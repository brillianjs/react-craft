import Hero from "../../assets/images/hero.svg?react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center ">
      <div className=" flex flex-row justify-center items-center max-w-7xl container">
        <motion.div
          className="w-full flex flex-row justify-center items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full"
            initial={{ y: -100, opacity: 1 }}
            animate={{ y: [0, -20, 0], opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Hero />
          </motion.div>
          <div className="w-full px-10 space-y-10">
            <motion.h1
              className="text-5xl font-bold text-teal-500"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Are you ready to carve out an extraordinary web development
              experience?
            </motion.h1>
            <motion.p
              className="text-gray-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Introducing React Craft, we present a powerful tool to assist you
              in designing and building dynamic and responsive web applications.
              Combining the strength of React, precision design craftsmanship,
              and user-friendly features, React Craft provides limitless
              capabilities to create stunning user experiences. Welcome to a
              world of web development enriched with creativity and innovation!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
