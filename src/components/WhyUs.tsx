export default function WhyUs(): JSX.Element {
  const points = [
    "Experienced Team",
    "Affordable services",
    "Fast & reliable solutions",
    "Convenient location",
  ];

  return (
    <section className="bg-[#1695b1] text-[#e5e5e8] py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-6">
        {points.map((point) => (
          <div key={point} className="bg-white/10 p-6 rounded-xl">
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
