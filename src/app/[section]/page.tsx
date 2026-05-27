import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getSiteSection, siteSections } from "../sections";
import styles from "../sveden/Sveden.module.css";

type PageProps = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return siteSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section: slug } = await params;
  const section = getSiteSection(slug);

  if (!section) {
    return {
      title: "Раздел не найден — Медресе Хусаиния",
    };
  }

  return {
    title: `${section.title} — Медресе Хусаиния`,
    description: section.summary,
  };
}

export default async function SiteSectionPage({ params }: PageProps) {
  const { section: slug } = await params;
  const section = getSiteSection(slug);

  if (!section) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <div className={styles.topInner}>
          <Link className={styles.brand} href="/">
            <Image src="/images/logo.jpg" alt="" width={48} height={48} />
            <span>Медресе «Хусаиния»</span>
          </Link>
          <Link className={styles.backLink} href="/">
            <ArrowLeftIcon aria-hidden="true" />
            На главную
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.topInner}>
          <div>
            <p className={styles.eyebrow}>{section.eyebrow}</p>
            <h1>{section.title}</h1>
            <p className={styles.summary}>{section.summary}</p>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        {section.blocks.map((block) => (
          <article className={styles.sectionCard} key={block.title}>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
            <ul className={styles.detailsList}>
              {block.items.map((item) => (
                <li key={item}>
                  <CheckCircleIcon aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
