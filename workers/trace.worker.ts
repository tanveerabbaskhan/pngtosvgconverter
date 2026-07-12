/// <reference lib="webworker" />
import ImageTracer from "imagetracerjs";
import type { TraceOptions } from "imagetracerjs";
import type { TraceRequest, TraceResponse, TraceSettings } from "@/lib/trace/types";

// smoothing 0 (max detail) .. 100 (max simplification)
function baseOptions(settings: TraceSettings): TraceOptions {
  const t = settings.smoothing / 100;
  return {
    ltres: 0.1 + t * 4.9,
    qtres: 0.1 + t * 4.9,
    pathomit: Math.round(t * 30),
    rightangleenhance: true,
    roundcoords: 2,
    viewbox: true,
    strokewidth: 0,
  };
}

function traceColor(imageData: ImageData, settings: TraceSettings): string {
  return ImageTracer.imagedataToSVG(imageData, {
    ...baseOptions(settings),
    colorsampling: 2,
    numberofcolors: settings.colorCount,
    colorquantcycles: 3,
  });
}

function traceBlackAndWhite(imageData: ImageData, settings: TraceSettings): string {
  const pal = [
    { r: 0, g: 0, b: 0, a: 255 },
    { r: 255, g: 255, b: 255, a: 255 },
  ];
  const options: TraceOptions = { ...baseOptions(settings), pal };

  const tracedata = ImageTracer.imagedataToTracedata(imageData, options);

  // Drop the background (white) layer so only the ink path remains,
  // leaving the rest of the canvas transparent.
  if (settings.transparentBackground) {
    tracedata.layers[1] = [];
  }

  return ImageTracer.getsvgstring(tracedata, options);
}

// Flattens alpha onto a solid white backdrop, in place, so a disabled
// "transparent background" toggle produces an opaque result.
function flattenOntoWhite(imageData: ImageData): ImageData {
  const { data } = imageData;
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3] / 255;
    data[i] = Math.round(data[i] * alpha + 255 * (1 - alpha));
    data[i + 1] = Math.round(data[i + 1] * alpha + 255 * (1 - alpha));
    data[i + 2] = Math.round(data[i + 2] * alpha + 255 * (1 - alpha));
    data[i + 3] = 255;
  }
  return imageData;
}

self.onmessage = (event: MessageEvent<TraceRequest>) => {
  const { id, imageData, settings } = event.data;
  try {
    const source = settings.transparentBackground
      ? imageData
      : flattenOntoWhite(imageData);

    const svg =
      settings.mode === "bw"
        ? traceBlackAndWhite(source, settings)
        : traceColor(source, settings);

    const response: TraceResponse = { id, ok: true, svg };
    self.postMessage(response);
  } catch (err) {
    const response: TraceResponse = {
      id,
      ok: false,
      error: err instanceof Error ? err.message : "Tracing failed",
    };
    self.postMessage(response);
  }
};
