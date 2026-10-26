export const profile = {
  name: "Gazi Shaharabi Anwar Tuhin",
  titles: ["Computer Engineer", "AI & ML Researcher", "UI/UX Designer"],
  about: "BSc CSE student at IIUC, passionate about AI engineering and machine learning research, and about turning research ideas into working systems. I lead teams and manage projects end to end.",
  email: "shaharabituhin@gmail.com",
  github: "https://github.com/ShaharabiTuhin",
  linkedin: "https://www.linkedin.com/in/shaharabi",
};

type Skill = { title: string; items: string[]; span?: string; accent?: boolean; note?: string };
export const skills: Skill[] = [
  { title: "Frontend & UI", span: "md:col-span-2", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Graphics Design"] },
  { title: "Backend & DB", items: ["Node.js", "Express.js", "MongoDB", "C/C++"] },
  { title: "AI & Automation", span: "md:col-span-2", accent: true, note: "Claude and OpenAI Codex are part of my daily engineering workflow.", items: ["AI/ML Research", "Generative AI", "RAG", "FastAPI", "Claude", "OpenAI Codex"] },
  { title: "Tools & Automation", items: ["Git", "GitHub", "n8n", "Vercel"] },
];

export const projects = [
  { name: "LMFNet", badge: "IEEE QPAIN 2026", desc: "A lightweight multimodal fusion network for early chronic disease detection on edge devices.", tags: ["Multimodal", "Edge AI"] },
  { name: "KG-Sepsis", badge: "IEEE QPAIN 2026", desc: "Knowledge-guided temporal graph neural networks for early sepsis prediction in the ICU.", tags: ["Graph Neural Networks", "Healthcare"] },
  { name: "Generative AI ChatBot", desc: "A document-aware chatbot with retrieval, OCR and a FastAPI backend.", tags: ["RAG", "OCR", "FastAPI", "FAISS", "LangChain", "LangSmith"] },
  { name: "CureSphere AI", desc: "An AI-powered virtual healthcare ecosystem: home treatment, diagnostics, doctor consultation and pharmacy.", tags: ["Healthcare", "AI"] },
];

export const timeline = [
  { org: "IEEE CIS IIUC Student Branch Chapter", role: "Founding Chairperson", date: "Jul 2026 – Present" },
  { org: "IIUC Cyber Security Club", role: "Public Relation Secretary", date: "Jun 2026 – Present" },
  { org: "IEEE Computer Society IIUC", role: "Vice-Chairperson (Technical)", date: "Sep 2024 – Present" },
  { org: "YSSE", role: "Marketing & PR Associate", date: "Mar 2023 – Nov 2024" },
];
