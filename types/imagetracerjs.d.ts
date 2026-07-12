declare module "imagetracerjs" {
  export interface RGBAColor {
    r: number;
    g: number;
    b: number;
    a: number;
  }

  export interface TraceOptions {
    ltres?: number;
    qtres?: number;
    pathomit?: number;
    rightangleenhance?: boolean;
    colorsampling?: number;
    numberofcolors?: number;
    mincolorratio?: number;
    colorquantcycles?: number;
    layering?: number;
    strokewidth?: number;
    linefilter?: boolean;
    scale?: number;
    roundcoords?: number;
    viewbox?: boolean;
    desc?: boolean;
    blurradius?: number;
    blurdelta?: number;
    pal?: RGBAColor[];
  }

  export interface TraceData {
    layers: unknown[][];
    palette: RGBAColor[];
    width: number;
    height: number;
  }

  const ImageTracer: {
    imagedataToSVG(imageData: ImageData, options?: TraceOptions): string;
    imagedataToTracedata(imageData: ImageData, options?: TraceOptions): TraceData;
    getsvgstring(tracedata: TraceData, options?: TraceOptions): string;
  };

  export default ImageTracer;
}
