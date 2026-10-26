import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About me">
      <Reveal>
        <div className="glass max-w-3xl p-8">
          <p className="text-lg leading-relaxed text-zinc-200">{profile.about}</p>
          <p className="mt-4 text-zinc-300">Two papers accepted at IEEE QPAIN 2026. BSc in Computer Science and Engineering at International Islamic University Chittagong, graduating December 2026.</p>
        </div>
      </Reveal>
    </Section>
  );
}
