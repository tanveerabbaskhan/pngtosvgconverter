"use client";

import { useRef, useState } from "react";

export function Dropzone({
  title,
  subtitle,
  browseLabel,
  onFiles,
}: {
  title: string;
  subtitle: string;
  browseLabel: string;
  onFiles: (files: File[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    const files = Array.from(fileList).filter((f) => f.type === "image/png");
    if (files.length > 0) onFiles(files);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${title}. ${subtitle}`}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-colors ${
        isDragging
          ? "border-brand-600 bg-brand-50"
          : "border-border bg-surface hover:border-brand-400"
      }`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16V4m0 0 4 4m-4-4-4 4M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"
          />
        </svg>
      </span>
      <p className="font-medium text-text">{title}</p>
      <p className="text-sm text-text-muted">{subtitle}</p>
      <span className="mt-1 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
        {browseLabel}
      </span>
      <input
        ref={inputRef}
        type="file"
        accept="image/png"
        multiple
        className="sr-only"
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = "";
        }}
      />
    </div>
  );
}
