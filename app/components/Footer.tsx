/* Footer: 1054×51.22px, bg #0379B9
   "ETTIC Company © 2025. All Rights Reserved"  — Work Sans 400, 10px, white, centered
   "Portfolio" text (small caps 500, 14.63px) on left */

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        minHeight: "51.22px",
        backgroundColor: "#0379B9",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="max-w-[1054px] mx-auto px-5 w-full flex flex-col sm:flex-row items-center justify-between gap-2"
      >
        {/* "Portfolio" — Work Sans 500, 14.63px, small-caps, white */}
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 500,
            fontSize: "14.63px",
            lineHeight: "1.173em",
            textTransform: "small-caps",
            color: "#FFFFFF",
            letterSpacing: "0.05em",
          }}
        >
          PORTFOLIO
        </span>

        {/* Copyright — Work Sans 400, 10px, white, centered */}
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 400,
            fontSize: "10px",
            lineHeight: "1.173em",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          ETTIC Company © 2025. All Rights Reserved
        </span>

        {/* Spacer for balance on desktop */}
        <span style={{ width: "76px" }} className="hidden sm:block" />
      </div>
    </footer>
  );
}
