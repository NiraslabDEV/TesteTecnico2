/* Reusable Reasons card matching Figma component "Reasons" */

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <div
      style={{
        width: "214px",
        height: "209px",
        backgroundColor: "#FFFFFF",
        border: "1.02443px solid #E0E3EB",
        borderRadius: "2.92693px",
        padding: "14.6346px 14.6346px 29.2693px",
        gap: "13.17px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      <div style={{ flexShrink: 0 }}>{icon}</div>

      <h3
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: 700,
          fontSize: "14.63px",
          lineHeight: "17.16px",
          color: "#3D445C",
          margin: 0,
        }}
      >
        {title}
      </h3>

      <div
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: 400,
          fontSize: "11.71px",
          lineHeight: "13.74px",
          color: "#858EAD",
        }}
      >
        {description}
      </div>
    </div>
  );
}

/* Headset icon — used in Mission and Vision cards */
const HeadsetIcon = () => (
  <svg
    width="27"
    height="27"
    viewBox="15 27 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40.2453 35.6333C40.8922 35.6333 41.5125 35.8903 41.97 36.3477C42.4274 36.8051 42.6844 37.4255 42.6844 38.0724V42.9506C42.6844 43.5975 42.4274 44.2179 41.97 44.6753C41.5125 45.1327 40.8922 45.3897 40.2453 45.3897H38.9501C38.6528 47.7475 37.5052 49.9157 35.7228 51.4875C33.9404 53.0593 31.6457 53.9265 29.2693 53.9266V51.4875C31.21 51.4875 33.0711 50.7166 34.4434 49.3443C35.8157 47.972 36.5866 46.1108 36.5866 44.1702V36.8528C36.5866 34.9122 35.8157 33.051 34.4434 31.6787C33.0711 30.3064 31.21 29.5355 29.2693 29.5355C27.3286 29.5355 25.4674 30.3064 24.0951 31.6787C22.7229 33.051 21.952 34.9122 21.952 36.8528V45.3897H18.2933C17.6464 45.3897 17.026 45.1327 16.5686 44.6753C16.1112 44.2179 15.8542 43.5975 15.8542 42.9506V38.0724C15.8542 37.4255 16.1112 36.8051 16.5686 36.3477C17.026 35.8903 17.6464 35.6333 18.2933 35.6333H19.5885C19.8861 33.2758 21.0337 31.1078 22.8161 29.5363C24.5985 27.9648 26.893 27.0977 29.2693 27.0977C31.6455 27.0977 33.9401 27.9648 35.7225 29.5363C37.5048 31.1078 38.6525 33.2758 38.9501 35.6333H40.2453ZM24.0984 45.1275L25.3911 43.0591C26.5534 43.7873 27.8977 44.1724 29.2693 44.1702C30.6408 44.1724 31.9851 43.7873 33.1475 43.0591L34.4402 45.1275C32.8904 46.0984 31.098 46.6121 29.2693 46.6093C27.4405 46.6121 25.6481 46.0984 24.0984 45.1275Z"
      fill="#F9995D"
    />
  </svg>
);

/* Crossed tools icon — used in Values card */
const ToolsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="610 14 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M634.209 32.6824L627.44 25.9139L629.355 23.9992L624.782 19.4258L622.867 21.3405L616.098 14.572L610.33 20.3405L617.098 27.109L611.293 32.9141V37.4874H615.867L621.672 31.6824L628.44 38.4509L634.209 32.6824ZM618.83 25.3773L613.781 20.3405L616.098 18.0234L617.647 19.5722L616.196 21.0235L617.915 22.743L619.367 21.2918L621.135 23.0601L618.83 25.3773ZM623.403 29.9506L625.721 27.6334L627.489 29.4018L626.038 30.8531L627.757 32.5726L629.209 31.1214L630.757 32.6702L628.44 34.9874L623.403 29.9506ZM626.09 18.1246L629.185 15.0281L633.756 19.599L630.661 22.6955L626.09 18.1246Z"
      fill="#F9995D"
    />
  </svg>
);

const reasons = [
  {
    icon: <HeadsetIcon />,
    title: "Our Mission",
    description:
      "The company's focus is civil construction and topography, complemented by services in Architecture, Consulting, and Property Management.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Our Vision",
    description:
      "Our vision is to be the first choice in construction for the various stakeholders in the Mozambican region.",
  },
  {
    icon: <ToolsIcon />,
    title: "Our Values",
    description: (
      <ul style={{ margin: 0, paddingLeft: "14px", display: "flex", flexDirection: "column", gap: "2px" }}>
        <li>Lead by example;</li>
        <li>Work as a team, listening to all stakeholders in our projects;</li>
        <li>Keep our promises, always aiming to exceed expectations;</li>
      </ul>
    ),
  },
];

export default function Reasons() {
  return (
    <section
      id="reasons"
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: "1054px",
          margin: "0 auto",
          padding: "53.84px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {reasons.map((r) => (
          <ReasonCard key={r.title} icon={r.icon} title={r.title} description={r.description} />
        ))}
      </div>
    </section>
  );
}
