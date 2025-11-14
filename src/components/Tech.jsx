// src/components/Tech.jsx
import React, { useMemo, useState } from "react";
import { SectionWrapper } from "../hoc";
import { techGroups, concepts } from "../constants";
import { styles } from "../style";
import { SkillsSolarCanvas } from "./canvas";

const Tech = () => {
  const [active, setActive] = useState(0);

  // Build 3 rings: Languages, ML/Data, Development (Frontend+Backend+Cloud)
  const rings = useMemo(() => {
    const devItems = [
      ...(techGroups["Frontend"] || []),
      ...(techGroups["Backend"] || []),
      ...(techGroups["Cloud & DevOps"] || []),
    ];

    return [
      {
        name: "Languages",
        items: techGroups["Languages"] || [],
        radius: 3.0,
        speed: 0.26,
      },
      {
        name: "Data Science / AIML",
        items: techGroups["ML / Data"] || [],
        radius: 4.8,
        speed: 0.22,
      },
      { name: "Development Stacks", items: devItems, radius: 6.6, speed: 0.18 },
    ];
  }, []);

  const groupNames = rings.map((r) => r.name);
  const selectedSkills =
    rings[active]?.items?.map((i) => i.name).filter(Boolean) ?? [];

  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>Skills</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Skills Matrix</h2>

      {/* Concepts */}
      <div className="mt-6">
        <h3 className="text-sm text-secondary uppercase tracking-wider mb-3 text-center">
          Concepts
        </h3>
        <div className="flex flex-wrap justify-center gap-2.5">
          {concepts.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Hard Skills (subheading above the selector) */}
      <div className="mt-10">
        <h3 className="text-sm text-secondary uppercase tracking-wider mb-3 text-center">
          Core Technical Skills
        </h3>

        {/* Ring selector */}
        <div className="flex flex-wrap justify-center gap-4 relative">
          {groupNames.map((name, i) => (
            <div key={name} className="relative flex flex-col items-center">
              {/* Bright indicator dot */}
              {i === active && (
                <span className="absolute -top-2 w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"></span>
              )}

              <button
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-sm transition
                  border ${
                    i === active
                      ? "border-white/30 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/8"
                  }
                  text-white/90`}
                aria-pressed={i === active}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Small caption listing skills in the selected section */}
      <div className="mt-5 px-4">
        <p className="text-center text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl mx-auto">
          {selectedSkills.length > 0
            ? selectedSkills.join(" • ")
            : "No skills listed yet."}
        </p>
      </div>

      {/* Solar canvas with focus on the active ring */}
      <div className="mt-8">
        <SkillsSolarCanvas rings={rings} activeIndex={active} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
