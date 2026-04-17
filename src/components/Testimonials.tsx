import { motion } from "framer-motion";

export default function Testimonials(): JSX.Element {
  const reviews = [
    {
      name: "TB Production",
      text: "They built my web app exactly how I pictured it to turn out and even include extra features I did not know I needed!",
    },
    {
      name: "Kamalo City Resturant",
      text: "They help my brand look elegant and professional and provided consistency in my posts and kept me active online, while I focus on my business.",
    },
    {
      name: "Aisha K.",
      text: "They are so intentional and have this aura of excellence and it shows in their work.",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-2xl shadow"
          >
            <p className="italic">"{review.text}"</p>
            <h4 className="mt-4 font-bold">- {review.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}