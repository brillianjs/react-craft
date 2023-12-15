import Hero from "../../assets/images/hero.svg?react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { CiSearch } from "react-icons/ci";
import SectionWithMotion from "./section";
import Section1 from "../../assets/images/section-1.svg?react";
import Section2 from "../../assets/images/section-2.svg?react";
import Section3 from "../../assets/images/section-3.svg?react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center ">
      <div className="max-w-7xl container space-y-10">
        <div className="flex flex-row justify-center items-center">
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
                Introducing React Craft, we present a powerful tool to assist
                you in designing and building dynamic and responsive web
                applications. Combining the strength of React, precision design
                craftsmanship, and user-friendly features, React Craft provides
                limitless capabilities to create stunning user experiences.
                Welcome to a world of web development enriched with creativity
                and innovation!
              </motion.p>
              <Button icon={<CiSearch />}>Lets Explore</Button>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-10 justify-center items-center py-10">
          <div className=" bg-gradient-to-r from-blue-500 to-teal-500 w-content rotate-3 p-6">
            <h1 className="text-3xl font-bold text-white text-center -rotate-3">
              Why should you choose us?
            </h1>
          </div>
          <div className="flex flex-row gap-6">
            <SectionWithMotion
              image={<Section1 />}
              title="Reusable Components"
              description="React Craft allows the creation of reusable components, enhancing development efficiency and simplifying code maintenance."
            />
            <SectionWithMotion
              image={<Section2 />}
              title="Optimal Performance"
              description="With a virtual DOM and an efficient update system, React Craft provides optimal performance, ensuring that your web application runs responsively and efficiently."
            />
            <SectionWithMotion
              image={<Section3 />}
              title="Rich Ecosystem"
              description="React Craft boasts a rich ecosystem with numerous libraries and supportive tools, streamlining development so that you can focus on building features rather than starting from scratch."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
