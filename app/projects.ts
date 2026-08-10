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
    tech: ['TypeScript', 'Next.js', 'React', 'Vercel AI SDK', 'Anthropic API', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'Vercel'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/Walkthru' },
      { kind: 'website', label: 'Website', href: 'https://trywalkthru.vercel.app/' },
    ],
  },
  {
    title: 'Eidola',
    description: 'Multimodal knowledge base for your life',
    tech: ['TypeScript', 'Python', 'Next.js', 'React', 'FastAPI', 'Supabase', 'pgvector', 'Gemini API', 'Anthropic API', 'Stripe', 'Tailwind CSS', 'Docker'],
    actions: [
      { kind: 'website', label: 'Website', href: 'https://eidola.me' },
    ],
  },
  {
    title: 'Alumhub',
    description: 'Student-alumni social networking platform',
    tech: ['JavaScript', 'CSS', 'Next.js', 'React', 'Firebase', 'Stripe', 'OpenAI API', 'Node.js', 'Vercel'],
    actions: [
      { kind: 'website', label: 'Website', href: 'https://thealumhub.com' },
    ],
  },
  {
    title: 'PaperTrail',
    description: 'Research assistant for scientific literature',
    tech: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'React', 'LangChain', 'LangGraph', 'OpenAI API', 'ChromaDB', 'SQLite', 'Tailwind CSS'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/PaperTrail' },
    ],
  },
  {
    title: 'Rewind',
    description: 'Quantitative trading research platform',
    tech: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'React', 'OpenAI API', 'PostgreSQL', 'Redis', 'DuckDB', 'pandas', 'Tailwind CSS', 'Docker'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/Rewind' },
    ],
  },
  {
    title: 'AUDIT',
    description: 'Vulnerability scanner for codebases',
    tech: ['Python', 'OpenAI API', 'Typer', 'ChromaDB', 'SQLite', 'PyInstaller', 'Node.js'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AryaVaidya08/AUDIT' },
    ],
  },
];
