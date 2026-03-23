export default function AboutUs() {
  return (
    /* About us section: 1054×691.49px, white bg */
    <section
      id="about"
      style={{
        width: "100%",
        minHeight: "691.49px",
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="max-w-[1054px] mx-auto relative"
        style={{ minHeight: "691.49px" }}
      >
        {/* Photo / image area: left side, 660×489.53px, opacity 0.35, border-radius 1.46px */}
        {/* Using a construction image placeholder */}
        <div
          style={{
            position: "absolute",
            left: "83.42px",
            top: "54.15px",
            width: "660.02px",
            height: "489.53px",
            borderRadius: "1.46px",
            overflow: "hidden",
            boxShadow: "0px 5.85px 5.85px -2.93px rgba(17,24,39,0.04), 0px 14.63px 17.56px -2.93px rgba(17,24,39,0.10)",
            opacity: 0.35,
            backgroundColor: "#4A5568",
          }}
        >
          {/* Construction site placeholder gradient */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #2947A9 0%, #0379B9 50%, #3D445C 100%)",
            }}
          />
        </div>

        {/* Blue info panel: right side, 357.09×382.7px at x:614.66, y:107.56 */}
        {/* border-radius 1.46px, bg #0379B9 */}
        <div
          style={{
            position: "absolute",
            left: "614.66px",
            top: "107.56px",
            width: "357.09px",
            height: "382.7px",
            backgroundColor: "#0379B9",
            borderRadius: "1.46px",
            boxShadow: "0px 5.85px 5.85px -2.93px rgba(17,24,39,0.04), 0px 14.63px 17.56px -2.93px rgba(17,24,39,0.10)",
          }}
        >
          {/* "About us": x:29.27, y:36.59 — Work Sans 700, 26.34px, white */}
          <h2
            style={{
              position: "absolute",
              left: "29.27px",
              top: "36.59px",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "26.34px",
              lineHeight: "1.173em",
              color: "#FFFFFF",
            }}
          >
            About us
          </h2>

          {/* Body text: x:29.27, y:94.39 — Work Sans 400, 14.63px, white, width 283.91 */}
          <p
            style={{
              position: "absolute",
              left: "29.27px",
              top: "94.39px",
              width: "283.91px",
              height: "151.47px",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14.63px",
              lineHeight: "1.173em",
              color: "#FFFFFF",
            }}
          >
            Ettic Construction is a leading Civil Construction Company in the Mozambique region.
            <br /><br />
            The company&apos;s activity is based on Civil Construction, in its entirety.
          </p>

          {/* Secondary button (styled as outlined white) at bottom of blue panel */}
          <button
            style={{
              position: "absolute",
              left: "29.27px",
              bottom: "40px",
              backgroundColor: "transparent",
              border: "1.5px solid #FFFFFF",
              borderRadius: "6px",
              padding: "10px 20px",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 600,
              fontSize: "13.17px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
