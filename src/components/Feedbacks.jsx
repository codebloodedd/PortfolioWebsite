// src/components/Feedback.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { externalLink } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-[350px] sm:w-[360px] flex flex-col justify-between flex-shrink-0"
  >
    {/* Quote + text */}
    <div>
      <p className="text-white font-black text-[48px] leading-none">"</p>
      <p className="mt-4 text-white tracking-wider text-[18px]">
        {testimonial}
      </p>
    </div>

    {/* Bottom area pinned */}
    <div className="mt-7 flex justify-between items-center gap-3">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} • {company}
        </p>
      </div>

      <button
        type="button"
        onClick={() => link && window.open(link, "_blank")}
        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
      >
        <img
          src={externalLink}
          alt="External link"
          className="w-4 h-4 object-contain"
        />
      </button>
    </div>
  </motion.div>
);


const Feedbacks = () => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // duplicate testimonials for seamless infinite scroll
  const loopedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    let frameId;

    const speed = 0.4; // px per frame-ish; tweak for faster/slower scroll

    const step = () => {
      const track = trackRef.current;
      if (track && !isPaused) {
        const fullWidth = track.scrollWidth / 2; // because we duplicated the list

        setOffset((prev) => {
          const next = prev - speed;
          // once we've scrolled past the first set, jump back
          if (Math.abs(next) >= fullWidth) {
            return 0;
          }
          return next;
        });
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  const handleMouseDown = () => setIsPaused(true);
  const handleMouseUp = () => setIsPaused(false);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* Header */}
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Auto-scrolling horizontal carousel */}
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} overflow-hidden cursor-grab active:cursor-grabbing`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          ref={trackRef}
          style={{ x: offset }}
          className="flex gap-7"
        >
          {loopedTestimonials.map((t, idx) => (
            <FeedbackCard key={`${t.name}-${idx}`} {...t} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
