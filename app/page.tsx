'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  FaEnvelope,
  FaFileLines,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa6';
import { LuGlobe, LuMoon, LuSun } from 'react-icons/lu';
import { TypeAnimation } from 'react-type-animation';
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
            I&apos;m an incoming freshman at Caltech studying computer science, interested in AI research, product development, & quantitative engineering.
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
            <a
              href="https://www.instagram.com/andrewzagulaa/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroSocialLink}
              aria-label="Instagram"
            >
              <FaInstagram className={styles.heroSocialIcon} />
              <span className={styles.heroSocialLabel}>Instagram</span>
            </a>
          </div>
        </section>

        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Experience</h2>
          
          <div className={styles.itemList}>
            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('work-4')}>
                <div className={styles.itemLogo}>
                  <Image 
                    src="/AH.png" 
                    alt="Alumhub" 
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>Alumhub</h3>
                    <p className={styles.itemSubtitle}>Co-Founder</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Jan 2025 - Mar 2026</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('work-4') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('work-4') && (
                <div className={styles.itemDetails}>
                  <p className={styles.itemDescription}>
                    Student-alumni social networking platform backed by Google, Vercel, Stripe, and others
                  </p>
                  <a href="https://thealumhub.com" target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Website
                  </a>
                </div>
              )}
            </div>

            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('work-2')}>
                <div className={styles.itemLogo}>
                  <Image 
                    src="/UCB.png" 
                    alt="UC Berkeley" 
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>University of California, Berkeley</h3>
                    <p className={styles.itemSubtitle}>Student Researcher</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Jul 2024 - Dec 2025</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('work-2') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('work-2') && (
                <div className={styles.itemDetails}>
                  <p className={styles.itemDescription}>
                    Adversarial prompting for multi-turn LLM jailbreaking (first-author at NeurIPS 2025 Lock-LLM)
                  </p>
                  <a href="https://arxiv.org/abs/2511.02376" target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    arXiv
                  </a>
                </div>
              )}
            </div>

            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('work-1')}>
                <div className={styles.itemLogo}>
                  <Image 
                    src="/BU.png" 
                    alt="Boston University" 
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>Boston University</h3>
                    <p className={styles.itemSubtitle}>Research Intern (RISE)</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Jun 2025 - Aug 2025</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('work-1') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('work-1') && (
                <div className={styles.itemDetails}>
                  <p className={styles.itemDescription}>
                    Benchmarking sample-efficient vision language models (co-author at CVPR 2026)
                  </p>
                  <div className={styles.itemLinks}>
                    <a href="https://arxiv.org/abs/2512.10932" target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      arXiv
                    </a>
                    <a href="https://shawnking98.github.io/BabyVLM-v2/" target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Education</h2>
          
          <div className={styles.itemList}>

            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <div className={styles.itemLogo}>
                  <Image
                    src="/CT.png"
                    alt="California Institute of Technology"
                    width={56}
                    height={56}
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>California Institute of Technology</h3>
                    <p className={styles.itemSubtitle}>B.S. in Computer Science</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Sep 2026 - Jun 2030</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('edu-2')}>
                <div className={styles.itemLogo}>
                  <Image
                    src={isDarkMode ? "/BRDark.png" : "/BR.png"}
                    alt="Bridgewater-Raritan High School"
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>Bridgewater-Raritan High School</h3>
                    <p className={styles.itemSubtitle}>High School Diploma</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Sep 2022 - Jun 2026</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('edu-2') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('edu-2') && (
                <div className={styles.itemDetails}>
                  <p className={styles.itemDescription}>
                    GPA: 5.0 (Salutatorian)
                    <br /><br />
                    Activities and societies: Boys&apos; Varsity Volleyball, DECA, Key Club
                    <br /><br />
                    Calculus III, Differential Equations, Linear Algebra, AP Calculus BC, AP Physics C, AP Chemistry, AP Biology, AP Computer Science A, Data Structures (Rutgers University)
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Awards</h2>
          
          <div className={styles.itemList}>
            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>2x USA Mathematical Olympiad Qualifier</h3>
                    <p className={styles.itemSubtitle}>139.5 AMC 12; 13 AIME</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>2025 - 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.itemList}>
            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>5x AIME Qualifier</h3>
                    <p className={styles.itemSubtitle}>1x Distinguished Honor Roll (top 1%); 4x Honor Roll (top 5%)</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>2021 - 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.itemList}>
            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>USA Computing Olympiad Gold</h3>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Dec 2023</span>
                  </div>
                </div>
              </div>
            </div>
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
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.tech.map((tech) => (
                      <span key={`${project.title}-${tech}`} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.actions.map((action) => {
                      const icon = action.kind === 'source'
                        ? <FaGithub />
                        : <LuGlobe />;

                      if (!action.href) {
                        return (
                          <span
                            key={`${project.title}-${action.kind}-${action.label}`}
                            className={styles.projectLinkDisabled}
                            aria-disabled="true"
                          >
                            {icon}
                            {action.label}
                          </span>
                        );
                      }

                      return (
                        <a
                          key={`${project.title}-${action.kind}-${action.label}`}
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          {icon}
                          {action.label}
                        </a>
                      );
                    })}
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
