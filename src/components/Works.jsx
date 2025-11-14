// Works.jsx
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_icon,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="h-full"
    >
      <Tilt
        options={{ max: 10, scale: 1, speed: 350 }}
        className="bg-tertiary/90 backdrop-blur p-5 rounded-2xl w-full h-full flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,.06)]"
      >
        {/* Image */}
        <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-white/5">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full grid place-items-center text-white/60 text-sm">
              Screenshot coming soon
            </div>
          )}

          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 transition w-9 h-9 rounded-full grid place-items-center"
          >
            <img
              src={source_icon || github}
              className="w-1/2 h-1/2 object-contain opacity-90"
            />
          </button>
        </div>

        {/* Title & Desc */}
        <div className="mt-4 flex flex-col gap-2 flex-grow">
          <h3 className="text-white font-semibold text-[20px] leading-tight">
            {name}
          </h3>
          <p className="text-secondary text-[14px] leading-relaxed flex-grow">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {tags?.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Center-aligned + equal-height column grid */}
      <div className="mt-16 grid gap-10 justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
