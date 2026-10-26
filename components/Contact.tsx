"use client";
import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "ok" | "error";
const field = "mt-1 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-400";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title="Let's work together">
      <Reveal className="grid gap-6 md:grid-cols-[1fr_auto]">
        <form onSubmit={onSubmit} className="glass space-y-5 p-8">
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <label className="block text-sm text-zinc-200">Name<input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Your name" /></label>
          <label className="block text-sm text-zinc-200">Email<input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" /></label>
          <label className="block text-sm text-zinc-200">Message<textarea name="message" required minLength={5} maxLength={2000} rows={5} className={field} placeholder="What are you working on?" /></label>
          <button disabled={status === "sending"} className="rounded-full bg-cyan-300 px-7 py-3 font-medium text-zinc-950 hover:bg-cyan-200 disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" aria-live="polite" className={status === "error" ? "text-red-300" : "text-emerald-300"}>
            {status === "ok" && "Message sent. I'll reply soon."}
            {status === "error" && "Couldn't send your message. Check the fields and try again, or email me directly."}
          </p>
        </form>
        <ul className="glass h-fit space-y-3 p-8 text-zinc-100">
          <li><a className="hover:text-cyan-300" href={profile.github} aria-label="GitHub profile">GitHub</a></li>
          <li><a className="hover:text-cyan-300" href={profile.linkedin} aria-label="LinkedIn profile">LinkedIn</a></li>
          <li><a className="hover:text-cyan-300" href={`mailto:${profile.email}`}>{profile.email}</a></li>
        </ul>
      </Reveal>
    </Section>
  );
}
