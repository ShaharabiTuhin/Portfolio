"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Section from "./Section";
import { timeline } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <Section id="experience" title="Experience & leadership">
      <div ref={ref} className="relative ml-3 max-w-3xl">
        <span aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-white/15" />
        <motion.span aria-hidden="true" style={{ scaleY }} className="absolute left-0 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-cyan-300 to-violet-500" />
        <ol className="space-y-6 pl-8">
          {timeline.map((t) => (
            <motion.li key={t.org} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="glass relative p-6">
              <span aria-hidden="true" className="absolute -left-[37px] top-8 h-3 w-3 rounded-full bg-cyan-300 ring-4 ring-cyan-300/20" />
              <p className="text-sm text-zinc-300">{t.date}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{t.role}</h3>
              <p className="text-zinc-200">{t.org}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
