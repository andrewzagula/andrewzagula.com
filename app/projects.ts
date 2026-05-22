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
    title: 'PaperTrail',
    description: 'AI research assistant for discovering, understanding, and building on academic papers',
    tech: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'React', 'OpenAI API', 'LangChain', 'LangGraph', 'SQLite', 'SQLAlchemy', 'ChromaDB', 'Tailwind CSS', 'Pydantic'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/PaperTrail' },
    ],
  },
  {
    title: 'Rewind',
    description: 'AI-native research platform for developing and simulating quantitative trading strategies',
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'OpenAI API', 'DuckDB', 'PostgreSQL', 'Redis', 'Polars', 'NumPy', 'Plotly', 'SQLAlchemy', 'Pydantic', 'Tailwind CSS', 'Docker'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/Rewind' },
    ],
  },
  {
    title: 'AutoAdv',
    description: 'Adaptive adversarial prompting framework for black-box multi-turn LLM jailbreaking',
    tech: ['Python', 'OpenAI API', 'Together AI API', 'xAI API'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AAN-AutoAdv/AutoAdv' },
    ],
  },
  {
    title: 'AUDIT',
    description: 'AI-powered CLI security scanner for detecting vulnerabilities in local code repositories',
    tech: ['Python', 'OpenAI API', 'Typer', 'Pydantic', 'SQLite', 'ChromaDB', 'PyInstaller', 'Node.js'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AryaVaidya08/AUDIT' },
    ],
  },
];
