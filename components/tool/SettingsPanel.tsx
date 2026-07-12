"use client";

import type { TraceSettings } from "@/lib/trace/types";

export function SettingsPanel({
  settings,
  onChange,
  labels,
}: {
  settings: TraceSettings;
  onChange: (next: TraceSettings) => void;
  labels: {
    modeLabel: string;
    modeBw: string;
    modeColor: string;
    colorCountLabel: string;
    detailLabel: string;
    transparentLabel: string;
  };
}) {
  return (
    <div className="grid gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2">
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-text">
          {labels.modeLabel}
        </legend>
        <div className="flex gap-2">
          {(["color", "bw"] as const).map((mode) => (
            <label
              key={mode}
              className={`flex-1 cursor-pointer rounded-lg border px-3 py-2 text-center text-sm font-medium transition-colors ${
                settings.mode === mode
                  ? "border-brand-600 bg-brand-50 text-brand-700"
                  : "border-border text-text-muted hover:bg-bg-subtle"
              }`}
            >
              <input
                type="radio"
                name="trace-mode"
                value={mode}
                checked={settings.mode === mode}
                onChange={() => onChange({ ...settings, mode })}
                className="sr-only"
              />
              {mode === "color" ? labels.modeColor : labels.modeBw}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2 text-sm font-medium text-text sm:self-end">
        {labels.transparentLabel}
        <input
          type="checkbox"
          checked={settings.transparentBackground}
          onChange={(e) =>
            onChange({ ...settings, transparentBackground: e.target.checked })
          }
          className="h-4 w-4 accent-[var(--color-brand-600)]"
        />
      </label>

      {settings.mode === "color" && (
        <label className="text-sm font-medium text-text">
          <span className="flex justify-between">
            {labels.colorCountLabel}
            <span className="text-text-muted">{settings.colorCount}</span>
          </span>
          <input
            type="range"
            min={2}
            max={64}
            step={1}
            value={settings.colorCount}
            onChange={(e) =>
              onChange({ ...settings, colorCount: Number(e.target.value) })
            }
            className="mt-2 w-full accent-[var(--color-brand-600)]"
          />
        </label>
      )}

      <label className="text-sm font-medium text-text">
        <span className="flex justify-between">
          {labels.detailLabel}
          <span className="text-text-muted">{settings.smoothing}</span>
        </span>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={settings.smoothing}
          onChange={(e) =>
            onChange({ ...settings, smoothing: Number(e.target.value) })
          }
          className="mt-2 w-full accent-[var(--color-brand-600)]"
        />
      </label>
    </div>
  );
}
