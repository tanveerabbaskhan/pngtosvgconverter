export type TraceMode = "bw" | "color";

export type TraceSettings = {
  mode: TraceMode;
  colorCount: number;
  smoothing: number;
  transparentBackground: boolean;
};

export type TraceRequest = {
  id: string;
  imageData: ImageData;
  settings: TraceSettings;
};

export type TraceResponse =
  | { id: string; ok: true; svg: string }
  | { id: string; ok: false; error: string };

export const DEFAULT_SETTINGS: TraceSettings = {
  mode: "color",
  colorCount: 16,
  smoothing: 40,
  transparentBackground: true,
};
