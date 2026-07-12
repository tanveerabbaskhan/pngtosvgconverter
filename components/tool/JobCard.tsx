"use client";

import { Button } from "@/components/ui/Button";
import type { Job } from "./PngToSvgTool";

export function JobCard({
  job,
  labels,
  onDownload,
  onRemove,
}: {
  job: Job;
  labels: {
    originalLabel: string;
    tracedLabel: string;
    downloadButton: string;
    removeButton: string;
    processingLabel: string;
  };
  onDownload: (job: Job) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="grid grid-cols-2 divide-x divide-border">
        <div className="flex flex-col">
          <p className="border-b border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-text-muted">
            {labels.originalLabel}
          </p>
          <div className="checkered-bg flex flex-1 items-center justify-center p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={job.originalUrl}
              alt={`Original upload: ${job.file.name}`}
              className="max-h-40 max-w-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="border-b border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-text-muted">
            {labels.tracedLabel}
          </p>
          <div className="checkered-bg flex flex-1 items-center justify-center p-3">
            {job.svg ? (
              <div
                className="max-h-40 max-w-full [&_svg]:max-h-40 [&_svg]:max-w-full"
                role="img"
                aria-label={`Traced vector preview of ${job.file.name}`}
                dangerouslySetInnerHTML={{ __html: job.svg }}
              />
            ) : (
              <p className="text-xs text-text-muted">
                {job.status === "error" ? job.error : labels.processingLabel}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border px-3 py-2">
        <p className="truncate text-xs text-text-muted" title={job.file.name}>
          {job.file.name}
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            variant="secondary"
            className="px-3 py-1.5 text-xs"
            onClick={() => onRemove(job.id)}
          >
            {labels.removeButton}
          </Button>
          <Button
            variant="primary"
            className="px-3 py-1.5 text-xs"
            disabled={!job.svg}
            onClick={() => onDownload(job)}
          >
            {labels.downloadButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
