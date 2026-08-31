import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

const RED = "#E11D2A";

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
          background: "#ffffff",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1,
            color: RED,
            fontFamily: "sans-serif",
          }}
        >
          e
        </div>
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 10,
            fontSize: 16,
            lineHeight: 1,
            color: RED,
          }}
        >
          ♥
        </div>
      </div>
    ),
    { ...size }
  );
}
