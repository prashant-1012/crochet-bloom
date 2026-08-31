import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

const RED = "#E11D2A";

export default function AppleIcon() {
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
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 120,
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
            top: 26,
            right: 32,
            fontSize: 42,
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
