import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SectionWithMotion = ({ title, description, image }) => {
  const controls = useAnimation();

  const handleScrollAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5, // Menyesuaikan sesuai kebutuhan
    });

    observer.observe(document.getElementById("section")); // Ganti dengan ID yang sesuai dengan komponen Anda

    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      id="section"
      className="w-full bg-gray-100 rounded-xl flex flex-row justify-center items-center space-y-3 p-10 transition-transform hover:drop-shadow-lg cursor-pointer"
    >
      <div className="w-full">{image}</div>
      <div className="w-full">
        <h1 className="text-2xl font-bold text-teal-500">{title}</h1>
        <div className="w-full border border-b-0"></div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default SectionWithMotion;
