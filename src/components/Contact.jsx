// src/components/Contact.jsx
import { motion } from "framer-motion";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Left panel */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          Let&apos;s build something valuable.
        </h3>

        <p className="mt-6 text-secondary text-[15px] leading-relaxed w-full">
          I’m actively exploring Summer 2026 internships (Data / SWE / Quant).
          I’m also open to research collaborations, side projects, and
          interesting problems worth solving.
        </p>

        {/* 2x2 button grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Calendly */}
          <a
            href="https://calendly.com/prathamshah1006/30min"
            target="_blank"
            rel="noreferrer"
            className="group w-full inline-flex items-center justify-center rounded-xl border border-white/10 bg-tertiary/70 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-[2px] hover:border-white/30 hover:bg-tertiary hover:shadow-primary/40"
          >
            <span className="mr-1">Let&apos;s chat</span>
            <span className="opacity-70 group-hover:translate-x-0.5 transition-transform">
              💬
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:prathamshah1006@gmail.com"
            className="group w-full inline-flex items-center justify-center rounded-xl border border-white/10 bg-tertiary/70 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-[2px] hover:border-white/30 hover:bg-tertiary hover:shadow-primary/40"
          >
            <span className="mr-1">Email me</span>
            <span className="opacity-70 group-hover:translate-x-0.5 transition-transform">
              ↗
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pratham-shah-7a1053399/"
            target="_blank"
            rel="noreferrer"
            className="group w-full inline-flex items-center justify-center rounded-xl border border-white/10 bg-tertiary/70 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-[2px] hover:border-white/30 hover:bg-tertiary hover:shadow-primary/40"
          >
            <span className="mr-1">Connect on LinkedIn</span>
            <span className="opacity-70 group-hover:translate-x-0.5 transition-transform">
              ↗
            </span>
          </a>

          {/* Résumé – update href to your actual file path */}
          <a
            href="https://drive.google.com/file/d/1yC3L2jHBuUJiASTWW-eLN4sFfini9Opa/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group w-full inline-flex items-center justify-center rounded-xl border border-white/10 bg-tertiary/70 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-[2px] hover:border-white/30 hover:bg-tertiary hover:shadow-primary/40"
          >
            <span className="mr-1">View Résumé</span>
            <span className="opacity-70 group-hover:translate-x-0.5 transition-transform">
              ↗
            </span>
          </a>
        </div>
      </motion.div>

      {/* Right panel – same 3D globe */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-[0.5] xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
