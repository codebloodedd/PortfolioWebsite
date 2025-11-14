import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* NOTE: prop is 'options' (not 'option') on react-tilt */}
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[260px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const stats = [
    "🎓 MS Data Science (’27)",
    "💻 Python · PyTorch · SQL · React · FastAPI",
    "☁️ AWS · Docker",
    "🏆 Hackathon finalist",
    "👨🏻‍🏫 Mentored 80+ juniors",
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me (in 60 seconds)</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4">
        <p className="text-secondary text-[17px] leading-[30px] max-w-3xl">
          I’m Pratham, an MS Data Science student at CU Boulder. I love building
          data-driven products end-to-end: from collecting/processing data to
          modeling to shipping responsive front-ends and APIs that people
          actually use. Recently, I’ve:
        </p>

        <ul className="list-disc ml-6 mt-3 space-y-2 text-[16px] text-secondary max-w-3xl">
          <li>
            Built time-series/regression models to predict project overruns (
            <span className="font-semibold text-white">↓ delays 18%</span>,{" "}
            <span className="font-semibold text-white">
              ↓ cost overruns 30%
            </span>
            )
          </li>
          <li>
            Engineered computer-vision pipelines that lifted accuracy{" "}
            <span className="font-semibold text-white">15%</span>
          </li>
          <li>
            Migrated a university site from Drupal → Next.js CMS, cutting infra
            costs <span className="font-semibold text-white">80%</span> and load
            times <span className="font-semibold text-white">35%</span>
          </li>
        </ul>

        <p className="mt-3 text-secondary text-[16px] max-w-3xl">
          <span className="font-medium text-white">What I’m looking for:</span>{" "}
          Summer 2026 internships in Data Science / ML / SWE / Quant. I thrive
          where data meets product.
        </p>

        {/* Quick Stats */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          {stats.map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
            >
              {s}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Keep your cool tilt cards, just below the copy */}
      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
