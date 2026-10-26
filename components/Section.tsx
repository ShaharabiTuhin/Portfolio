import Reveal from "./Reveal";

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl scroll-mt-12 px-5 py-24">
      <Reveal><h2 id={`${id}-h`} className="mb-10 font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2></Reveal>
      {children}
    </section>
  );
}
