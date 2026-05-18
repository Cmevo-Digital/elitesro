import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const playfair = await fetch(
    "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xRbPQ.woff2"
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Playfair Display", serif',
          position: "relative",
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#c9a96e",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-2px",
            color: "#f9f7f4",
            lineHeight: 1,
          }}
        >
          ELITES
          <span style={{ color: "#c9a96e" }}>.</span>
        </div>

        {/* Thin gold divider */}
        <div
          style={{
            width: 64,
            height: 1,
            background: "#c9a96e",
            marginTop: 28,
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#e8d5b0",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          Fiecare detaliu, la locul lui.
        </div>

        {/* Locations */}
        <div
          style={{
            fontSize: 16,
            color: "#f9f7f480",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginTop: 20,
            fontFamily: "sans-serif",
          }}
        >
          București · Ilfov · Pitești · Ploiești
        </div>

        {/* Gold bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#c9a96e",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfair,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
