'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

type ItemProps = {
  title: string;
  date?: string;
  subtitle?: string;
  logoSrc?: string;
  logoSrcDark?: string;
  logoAlt?: string;
  expanded?: boolean;
  onToggle?: () => void;
  children?: ReactNode;
};

export default function Item({
  title,
  date,
  subtitle,
  logoSrc,
  logoSrcDark,
  logoAlt,
  expanded = false,
  onToggle,
  children,
}: ItemProps) {
  const expandable = Boolean(children && onToggle);

  return (
    <div className={styles.itemContainer}>
      <div
        className={`${styles.item} ${expandable ? '' : styles.itemStatic}`}
        onClick={onToggle}
        onKeyDown={expandable ? event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggle?.();
          }
        } : undefined}
        role={expandable ? 'button' : undefined}
        tabIndex={expandable ? 0 : undefined}
        aria-expanded={expandable ? expanded : undefined}
      >
        {logoSrc && (
          <div className={styles.itemLogo}>
            <Image
              src={logoSrc}
              alt={logoAlt ?? ''}
              width={224}
              height={224}
              className={`${styles.itemLogoImage} ${logoSrcDark ? styles.lightOnly : ''}`}
              quality={100}
            />
            {logoSrcDark && (
              <Image
                src={logoSrcDark}
                alt={logoAlt ?? ''}
                width={224}
                height={224}
                className={`${styles.itemLogoImage} ${styles.darkOnly}`}
                quality={100}
              />
            )}
          </div>
        )}
        <div className={styles.itemContent}>
          <div>
            <h3 className={styles.itemTitle}>{title}</h3>
            {subtitle && <p className={styles.itemSubtitle}>{subtitle}</p>}
          </div>
          {(date || expandable) && (
            <div className={styles.itemRight}>
              {date && <span className={styles.itemDate}>{date}</span>}
              {expandable && (
                <svg
                  className={`${styles.chevron} ${expanded ? styles.chevronExpanded : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
      {expandable && (
        <div
          className={`${styles.itemDetailsWrapper} ${expanded ? styles.itemDetailsWrapperOpen : ''}`}
          inert={!expanded}
        >
          <div className={styles.itemDetailsClip}>
            <div className={styles.itemDetails}>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      {children}
    </a>
  );
}
