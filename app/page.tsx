'use client';

import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaFileLines,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';
import { LuGlobe, LuMoon, LuSun } from 'react-icons/lu';
import { TypeAnimation } from 'react-type-animation';
import Item, { ExternalLink } from './Item';
import styles from './page.module.css';
import { projects } from './projects';

export default function Home() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const preferredTheme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : prefersDark
        ? 'dark'
        : 'light';

    const frameId = window.requestAnimationFrame(() => {
      setTheme(preferredTheme);
      setThemeLoaded(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    if (themeLoaded) {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme, themeLoaded]);

  const isDarkMode = theme === 'dark';

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className={styles.main} data-theme={theme}>
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              <TypeAnimation
                sequence={["Hi, I'm Andrew 👋", 2000]}
                wrapper="span"
                speed={25}
                cursor={true}
                repeat={0}
                className={styles.heroTypewriter}
              />
            </h1>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Current theme: dark. Switch to light mode' : 'Current theme: light. Switch to dark mode'}
              aria-pressed={isDarkMode}
              title={isDarkMode ? 'Current theme: dark. Switch to light mode' : 'Current theme: light. Switch to dark mode'}
            >
              {isDarkMode ? (
                <LuMoon className={styles.themeToggleIcon} aria-hidden="true" />
              ) : (
                <LuSun className={styles.themeToggleIcon} aria-hidden="true" />
              )}
            </button>
          </div>
          <p className={styles.heroDescription}>
            I&apos;m a freshman at Caltech studying computer science with a minor in robotics.
          </p>
          <div className={styles.heroSocials}>
            <a
              href="mailto:andrewzagula800@gmail.com"
              className={styles.heroSocialLink}
              aria-label="Email"
            >
              <FaEnvelope className={styles.heroSocialIcon} />
              <span className={styles.heroSocialLabel}>Email</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroSocialLink}
              aria-label="Resume"
            >
              <FaFileLines className={styles.heroSocialIcon} />
              <span className={styles.heroSocialLabel}>Resume</span>
            </a>
            <a
              href="https://github.com/andrewzagula"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroSocialLink}
              aria-label="GitHub"
            >
              <FaGithub className={styles.heroSocialIcon} />
              <span className={styles.heroSocialLabel}>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/andrewzagula/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroSocialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.heroSocialIcon} />
              <span className={styles.heroSocialLabel}>LinkedIn</span>
            </a>
          </div>
        </section>

        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Experience</h2>
          
          <div className={styles.itemList}>
            <Item
              logoSrc="/FD.png"
              logoAlt="FinalDose"
              title="FinalDose"
              subtitle="Software Engineer"
              date="Aug 2026 - Present"
              expanded={expandedItems.has('work-4')}
              onToggle={() => toggleItem('work-4')}
            >
              <p className={styles.itemDescription}>
                Programmable cancer elimination (YC P26)
              </p>
            </Item>

            <Item
              logoSrc="/TX.png"
              logoAlt="Terranox AI"
              title="Terranox AI"
              subtitle="Software Engineer"
              date="Jun 2026 - Aug 2026"
              expanded={expandedItems.has('work-5')}
              onToggle={() => toggleItem('work-5')}
            >
              <p className={styles.itemDescription}>
                AI-powered uranium discovery (YC W26)
              </p>
            </Item>

            <Item
              logoSrc="/UCB.png"
              logoAlt="UC Berkeley"
              title="University of California, Berkeley"
              subtitle="Student Researcher"
              date="Jul 2024 - Dec 2025"
              expanded={expandedItems.has('work-2')}
              onToggle={() => toggleItem('work-2')}
            >
              <p className={styles.itemDescription}>
                LLM jailbreaking (first-author NeurIPS 2025 Lock-LLM)
              </p>
              <div className={styles.itemLinks}>
                <ExternalLink href="https://arxiv.org/abs/2511.02376">arXiv</ExternalLink>
                <ExternalLink href="https://github.com/AAN-AutoAdv/AutoAdv">Source</ExternalLink>
              </div>
            </Item>

            <Item
              logoSrc="/BU.png"
              logoAlt="Boston University"
              title="Boston University"
              subtitle="Research Intern (RISE)"
              date="Jun 2025 - Aug 2025"
              expanded={expandedItems.has('work-1')}
              onToggle={() => toggleItem('work-1')}
            >
              <p className={styles.itemDescription}>
                VLM benchmarking (co-author CVPR 2026)
              </p>
              <div className={styles.itemLinks}>
                <ExternalLink href="https://arxiv.org/abs/2512.10932">arXiv</ExternalLink>
                <ExternalLink href="https://shawnking98.github.io/BabyVLM-v2/">Website</ExternalLink>
              </div>
            </Item>

          </div>
        </section>

        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Education</h2>
          
          <div className={styles.itemList}>

            <Item
              logoSrc="/CT.png"
              logoAlt="California Institute of Technology"
              title="California Institute of Technology"
              subtitle="B.S. in Computer Science, Minor in Robotics"
            />

            <Item
              logoSrc={isDarkMode ? "/BRDark.png" : "/BR.png"}
              logoAlt="Bridgewater-Raritan High School"
              title="Bridgewater-Raritan High School"
              subtitle="High School Diploma"
              expanded={expandedItems.has('edu-2')}
              onToggle={() => toggleItem('edu-2')}
            >
              <p className={styles.itemDescription}>
                Grade: Salutatorian
                <br /><br />
                Activities and societies: Boys&apos; Varsity Volleyball, DECA, Key Club
                <br /><br />
                Calculus III, Differential Equations, Linear Algebra, AP Calculus BC, AP Physics C, AP Chemistry, AP Biology, AP Computer Science A, Data Structures (Rutgers University)
              </p>
            </Item>
          </div>
        </section>

        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Awards</h2>
          
          <div className={styles.itemList}>
            <Item
              title="2x USA Mathematical Olympiad Qualifier"
              subtitle="139.5 AMC 12, 13 AIME"
            />
          </div>

          <div className={styles.itemList}>
            <Item title="5x AIME Qualifier" />
          </div>

          <div className={styles.itemList}>
            <Item title="USA Computing Olympiad Gold" />
          </div>
        </section>

        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Projects</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectLinks}>
                      {project.actions.map((action) => {
                        const icon = action.kind === 'source'
                          ? <FaGithub aria-hidden="true" />
                          : <LuGlobe aria-hidden="true" />;
                        const key = `${project.title}-${action.kind}-${action.label}`;

                        if (!action.href) {
                          return (
                            <span
                              key={key}
                              className={styles.projectLinkDisabled}
                              aria-disabled="true"
                              title={`${action.label} unavailable`}
                            >
                              {icon}
                            </span>
                          );
                        }

                        return (
                          <a
                            key={key}
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                            aria-label={`${project.title} — ${action.label}`}
                            title={action.label}
                          >
                            {icon}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.tech.map((tech) => (
                      <span key={`${project.title}-${tech}`} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
