import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c3aed",
          borderRadius: 7,
        }}
      >
        <svg viewBox="0 0 24 24" width={19} height={19} fill="none">
          <path
            d="M4 12c2.5-6 13.5-6 16 0-2.5 6-13.5 6-16 0Z"
            stroke="white"
            strokeWidth={2}
          />
          <circle cx="12" cy="12" r="2.6" stroke="white" strokeWidth={2} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
