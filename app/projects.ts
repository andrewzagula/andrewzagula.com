export type ProjectAction = {
  kind: 'source' | 'website';
  label: string;
  href?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  actions: ProjectAction[];
};

export const projects: Project[] = [
  {
    title: 'Walkthru',
    description: 'Knowledge check for code you ship ($1K winner at NY Tech Week)',
    tech: ['TypeScript', 'Next.js', 'Vercel AI SDK', 'Anthropic API', 'PostgreSQL'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/Walkthru' },
      { kind: 'website', label: 'Website', href: 'https://trywalkthru.vercel.app/' },
    ],
  },
  {
    title: 'Eidola',
    description: 'Multimodal knowledge base for your life',
    tech: ['TypeScript', 'Python', 'Next.js', 'FastAPI', 'Anthropic API', 'Gemini API', 'Supabase', 'pgvector', 'Stripe', 'Cloud Run'],
    actions: [
      { kind: 'website', label: 'Website', href: 'https://eidola.me' },
    ],
  },
  {
    title: 'Alumhub',
    description: 'Student-alumni social networking platform',
    tech: ['JavaScript', 'CSS', 'Next.js', 'OpenAI API', 'Firebase', 'Stripe'],
    actions: [
      { kind: 'website', label: 'Website', href: 'https://thealumhub.com' },
    ],
  },
  {
    title: 'PaperTrail',
    description: 'Research assistant for scientific literature',
    tech: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'LangGraph', 'OpenAI API', 'ChromaDB', 'SQLite'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/PaperTrail' },
    ],
  },
  {
    title: 'Rewind',
    description: 'Quantitative trading research platform',
    tech: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'OpenAI API', 'PostgreSQL', 'Redis', 'DuckDB'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/Rewind' },
    ],
  },
  {
    title: 'AUDIT',
    description: 'Vulnerability scanner for codebases',
    tech: ['Python', 'Typer', 'OpenAI API', 'ChromaDB', 'SQLite', 'PyInstaller', 'npm'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AryaVaidya08/AUDIT' },
    ],
  },
];
