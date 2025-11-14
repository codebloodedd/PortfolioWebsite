import React from "react";
import { CUBLogo, EBLogo, HUELogo, TAMLogo } from "../assets";

const logos = [
  { name: "CU Boulder", src: CUBLogo, treatment: "multiply" },
  { name: "Texas A&M", src: TAMLogo, treatment: "normal" },
  { name: "Engibrains", src: EBLogo, treatment: "normal" },
  { name: "HUE-AI", src: HUELogo, treatment: "mormal" },
];

export default function TrustStrip() {
  return (
    <div className="w-full mt-10 md:mt-16 border-t border-white/10 border-b bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {logos.map((l) => {
          const img = (
            <img
              src={l.src}
              alt={l.name}
              className={[
                // slightly larger logos
                "h-9 md:h-10 w-auto object-contain opacity-90 transition-transform duration-300 hover:scale-105 hover:opacity-100",
                l.treatment === "multiply" ? "mix-blend-multiply" : "",
              ].join(" ")}
            />
          );

          if (l.treatment === "pill") {
            return (
              <div
                key={l.name}
                className="rounded-xl bg-white/80 px-4 py-2 shadow-sm ring-1 ring-black/5 hover:shadow-white/10 transition-all duration-300"
                title={l.name}
              >
                {img}
              </div>
            );
          }

          return (
            <div
              key={l.name}
              className="flex items-center justify-center hover:scale-105 transition-transform duration-300"
              title={l.name}
            >
              {img}
            </div>
          );
        })}
      </div>
    </div>
  );
}
