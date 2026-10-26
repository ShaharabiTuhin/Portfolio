import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Page() {
  return (
    <>
      <a href="#main" className="sr-only rounded bg-white px-3 py-2 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]">Skip to content</a>
      <nav aria-label="Primary" className="glass fixed left-1/2 top-4 z-50 max-w-[94vw] -translate-x-1/2 px-4 py-2 text-xs sm:px-5 sm:text-sm">
        <ul className="flex gap-3 sm:gap-5">
          {links.map((l) => (
            <li key={l}><a href={`#${l}`} className="capitalize text-zinc-200 hover:text-white">{l}</a></li>
          ))}
        </ul>
      </nav>
      <main id="main">
        <Hero /><About /><Skills /><Projects /><Experience /><Contact />
      </main>
      <footer className="py-10 text-center text-sm text-zinc-400">© 2026 Gazi Shaharabi Anwar Tuhin</footer>
    </>
  );
}
