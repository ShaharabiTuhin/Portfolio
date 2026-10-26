"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { profile } from "@/lib/data";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, i = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      setText(word.slice(0, i));
      let d = del ? 40 : 80;
      if (!del && i === word.length) { del = true; d = 1400; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 300; }
      t = setTimeout(tick, d);
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

const btn = "inline-block rounded-full px-7 py-3 font-medium transition-colors";

export default function Hero() {
  const typed = useTypewriter(profile.titles);
  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24">
      <div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          {profile.name}
        </motion.h1>
        <p className="mt-6 h-9 font-display text-2xl text-cyan-300 sm:text-3xl">
          <span className="sr-only">{profile.titles.join(", ")}</span>
          <span aria-hidden="true">{typed}<span className="ml-0.5 inline-block w-0.5 animate-pulse bg-cyan-300">&nbsp;</span></span>
        </p>
        <p className="mt-4 max-w-xl text-lg text-zinc-300">Building AI systems that go from research paper to working product.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Magnetic><a href="#projects" className={`${btn} bg-cyan-300 text-zinc-950 hover:bg-cyan-200`}>View Projects</a></Magnetic>
          <Magnetic><a href="/resume.pdf" download className={`${btn} glass hover:border-cyan-300/60`}>Download Resume</a></Magnetic>
        </div>
      </div>
    </section>
  );
}
