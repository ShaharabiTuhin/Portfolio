"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { stagger, rise } from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & AI automation">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-4 md:grid-cols-3">
        {skills.map((s) => (
          <motion.div key={s.title} variants={rise} className={`glass glass-hover spot p-6 ${s.span ?? ""} ${s.accent ? "ring-1 ring-violet-400/50" : ""}`}>
            <h3 className="font-display text-xl font-semibold">{s.title}</h3>
            {s.note && <p className="mt-1 text-sm text-zinc-300">{s.note}</p>}
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((i) => <li key={i} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-zinc-100">{i}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
