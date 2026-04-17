import { motion } from "framer-motion";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-[#1695b1] to-[#1695b1] text-[#e5e5e8] py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Kisanda Holdings
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg"
      >
        We provide end-to-end business solutions by combining technology, marketing, logistics, and media into a single ecosystem—saving our clients time, cost, and complexity.
      </motion.p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-block bg-[#e5e5e8] text-[#1695b1] px-8 py-3 rounded-full font-semibold shadow-lg"
      >
        Book Appointment
      </motion.a>
    </section>
  );
}