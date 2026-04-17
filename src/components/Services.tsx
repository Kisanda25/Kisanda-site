import { motion } from "framer-motion";

export default function Services(): JSX.Element {
  const services = [
    { title: "Kisanda Tech",items: ["Software Solutions", "Building digital products", "Building Systems"] },
    { title: "Kisanda Marketing", items: ["Digital Marketing ", "Social Media Management", "Helping brands grow online"] },
    { title: "Kisanda Media",items: ["Media Production", "Photography and Videography", "Live Production"] },
    { title: "Kisanda Logistics",items: ["Transport Services", "Delivery Services ", "Tourism"] },
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <ul className="text-sm space-y-1">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}