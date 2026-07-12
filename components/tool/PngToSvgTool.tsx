"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Dropzone } from "./Dropzone";
import { SettingsPanel } from "./SettingsPanel";
import { JobCard } from "./JobCard";
import { Button } from "@/components/ui/Button";
import {
  DEFAULT_SETTINGS,
  type TraceRequest,
  type TraceResponse,
  type TraceSettings,
} from "@/lib/trace/types";

export type JobStatus = "decoding" | "tracing" | "done" | "error";

export type Job = {
  id: string;
  file: File;
  originalUrl: string;
  imageData?: ImageData;
  svg?: string;
  status: JobStatus;
  error?: string;
};

async function fileToImageData(file: File): Promise<ImageData> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  ctx.drawImage(bitmap, 0, 0);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

export function PngToSvgTool() {
  const t = useTranslations("tool");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [settings, setSettings] = useState<TraceSettings>(DEFAULT_SETTINGS);

  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef(new Map<string, (res: TraceResponse) => void>());

  useEffect(() => {
    const worker = new Worker(
      new URL("../../workers/trace.worker.ts", import.meta.url),
      { type: "module" },
    );
    worker.onmessage = (event: MessageEvent<TraceResponse>) => {
      const resolver = pendingRef.current.get(event.data.id);
      resolver?.(event.data);
      pendingRef.current.delete(event.data.id);
    };
    workerRef.current = worker;
    return () => worker.terminate();
  }, []);

  const traceImage = useCallback(
    (imageData: ImageData, traceSettings: TraceSettings) => {
      return new Promise<TraceResponse>((resolve) => {
        const worker = workerRef.current;
        if (!worker) {
          resolve({ id: "", ok: false, error: t("workerUnavailable") });
          return;
        }
        const id = crypto.randomUUID();
        pendingRef.current.set(id, resolve);
        const request: TraceRequest = { id, imageData, settings: traceSettings };
        worker.postMessage(request);
      });
    },
    [t],
  );

  const runTrace = useCallback(
    async (jobId: string, imageData: ImageData, traceSettings: TraceSettings) => {
      setJobs((prev) =>
        prev.map((j) => (j.id === jobId ? { ...j, status: "tracing" } : j)),
      );
      const result = await traceImage(imageData, traceSettings);
      setJobs((prev) =>
        prev.map((j) =>
          j.id === jobId
            ? result.ok
              ? { ...j, status: "done", svg: result.svg, error: undefined }
              : { ...j, status: "error", error: result.error }
            : j,
        ),
      );
    },
    [traceImage],
  );

  function addFiles(files: File[]) {
    for (const file of files) {
      const id = crypto.randomUUID();
      const originalUrl = URL.createObjectURL(file);
      const job: Job = { id, file, originalUrl, status: "decoding" };
      setJobs((prev) => [...prev, job]);

      fileToImageData(file)
        .then((imageData) => {
          setJobs((prev) =>
            prev.map((j) => (j.id === id ? { ...j, imageData } : j)),
          );
          void runTrace(id, imageData, settings);
        })
        .catch(() => {
          setJobs((prev) =>
            prev.map((j) =>
              j.id === id
                ? { ...j, status: "error", error: t("couldNotReadImage") }
                : j,
            ),
          );
        });
    }
  }

  // Re-trace every loaded image when settings change (debounced so
  // dragging a slider doesn't fire a trace per pixel of movement).
  useEffect(() => {
    const timeout = setTimeout(() => {
      setJobs((current) => {
        for (const job of current) {
          if (job.imageData) void runTrace(job.id, job.imageData, settings);
        }
        return current;
      });
    }, 250);
    return () => clearTimeout(timeout);
  }, [settings, runTrace]);

  function removeJob(id: string) {
    setJobs((prev) => {
      const job = prev.find((j) => j.id === id);
      if (job) URL.revokeObjectURL(job.originalUrl);
      return prev.filter((j) => j.id !== id);
    });
  }

  function clearAll() {
    for (const job of jobs) URL.revokeObjectURL(job.originalUrl);
    setJobs([]);
  }

  function downloadJob(job: Job) {
    if (!job.svg) return;
    const blob = new Blob([job.svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = job.file.name.replace(/\.png$/i, "") + ".svg";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <Dropzone
        title={t("dropzoneTitle")}
        subtitle={t("dropzoneSubtitle")}
        browseLabel={t("browseButton")}
        onFiles={addFiles}
      />

      <SettingsPanel
        settings={settings}
        onChange={setSettings}
        labels={{
          modeLabel: t("modeLabel"),
          modeBw: t("modeBw"),
          modeColor: t("modeColor"),
          colorCountLabel: t("colorCountLabel"),
          detailLabel: t("detailLabel"),
          transparentLabel: t("transparentLabel"),
        }}
      />

      {jobs.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-muted">
              {t("fileCount", { count: jobs.length })}
            </p>
            <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={clearAll}>
              {t("clearAllButton")}
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                labels={{
                  originalLabel: t("originalLabel"),
                  tracedLabel: t("tracedLabel"),
                  downloadButton: t("downloadButton"),
                  removeButton: t("removeButton"),
                  processingLabel: t("processingLabel"),
                }}
                onDownload={downloadJob}
                onRemove={removeJob}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
