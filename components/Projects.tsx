"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { stagger, rise } from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <motion.article
            key={p.name}
            variants={rise}
            whileHover={{ y: -6 }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
            }}
            className="glass glass-hover spot flex flex-col p-7"
          >
            {p.badge && <span className="mb-3 w-fit rounded-full bg-violet-400/20 px-3 py-1 text-xs font-medium text-violet-200">Published at {p.badge}</span>}
            <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
            <p className="mt-2 flex-1 text-zinc-300">{p.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => <li key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">{t}</li>)}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
