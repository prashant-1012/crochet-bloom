import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Crochet Bloom — Handmade Crochet Flowers & Gifts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFBF2",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={49} alt="" />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span style={{ color: "#1D8AE5" }}>Crochet</span>
            <span style={{ color: "#F84E8B", marginLeft: 10 }}>Bloom</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 80,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#D70F51",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              color: "#2B2A28",
              lineHeight: 1.2,
            }}
          >
            Handmade Blooms That Never Wilt
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#726D65" }}>
          Handmade crochet bouquets, keychains, hampers & decor
        </div>
      </div>
    ),
    { ...size }
  );
}
