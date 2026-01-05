// import IndiaMap from "../assets/maps/india.svg";
// import flag from "/images/logo/logo.jpeg";

const statesWithPins = [
  { name: "Uttar Pradesh", top: "38%", left: "48%" },
  { name: "Maharashtra", top: "55%", left: "40%" },
  { name: "Tamil Nadu", top: "72%", left: "45%" },
  { name: "Gujarat", top: "48%", left: "30%" },
  { name: "Karnataka", top: "63%", left: "42%" },
  { name: "Telangana", top: "58%", left: "46%" },
];

export default function AgrifortMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Agrifort Presence in India
        </h2>

        <div className="relative inline-block">
          <img
            src='/assets/maps/in.svg'
            alt="India Map"
            className="w-full max-w-3xl mx-auto drop-shadow-2xl"
          />

          {statesWithPins.map((s, i) => (
            <img
              key={i}
              src={"/images/logo/logo.jpeg"}
              alt="Agrifort Flag"
              className="
                absolute w-6 h-6
                animate-bounce
                drop-shadow-lg
              "
              style={{ top: s.top, left: s.left }}
              title={s.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
