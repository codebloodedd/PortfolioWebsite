import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        {/* circle and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="pointer-events-auto">
          <h1
            className={
              // Responsive headline (smaller on laptop), tight leading, max width
              "font-black text-white leading-[1.05] " +
              "text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] xl:text-[72px] " +
              "max-w-[720px] md:max-w-[640px] lg:max-w-[760px]"
            }
          >
            Hi, I'm <span className="text-[#915eff]">Pratham</span>
          </h1>

          <p
            className={
              // Slightly smaller body on laptop, relaxed leading, constrained width
              "mt-3 text-white-100 leading-relaxed " +
              "text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] " +
              "max-w-[820px] md:max-w-[700px] lg:max-w-[840px]"
            }
          >
            MS Data Science @ CU Boulder • Ex-Data Science & CV Intern @Engibrains • Developer @CUB x Texas A&M • Seeking Summer 2026 internships (Data / SWE / Quant)
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://drive.google.com/file/d/1yC3L2jHBuUJiASTWW-eLN4sFfini9Opa/view?usp=sharing"
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 text-[13px] md:text-sm"
            >
              View Résumé
            </a>
            <a
              href="mailto:prathamshah1006@gmail.com"
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-white/20 font-semibold hover:bg-white/10 text-[13px] md:text-sm"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/pratham-shah-7a1053399/"
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-semibold hover:bg-white/10 text-[13px] md:text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-auto">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* <motion.dev */}
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
