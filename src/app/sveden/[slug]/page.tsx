import { ArrowLeftIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import styles from "../Sveden.module.css";
import { getInfoSection, organizationSections } from "../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return organizationSections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = getInfoSection(slug);

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

export default async function InfoSectionPage({ params }: PageProps) {
  const { slug } = await params;
  const section = getInfoSection(slug);

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
          <Link className={styles.backLink} href="/sveden">
            <ArrowLeftIcon aria-hidden="true" />
            Все сведения
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.topInner}>
          <div>
            <p className={styles.eyebrow}>{section.badge}</p>
            <h1>{section.title}</h1>
            <p className={styles.summary}>{section.summary}</p>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        <article className={styles.sectionCard}>
          <span className={styles.sectionCardIcon}>
            <DocumentTextIcon aria-hidden="true" />
          </span>
          <h2>Сведения</h2>
          <div className={styles.factsGrid}>
            {section.facts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <strong>{fact.label}</strong>
                <span>{fact.value}</span>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.sectionCard}>
          <span className={styles.sectionCardIcon}>
            <DocumentTextIcon aria-hidden="true" />
          </span>
          <h2>Документы и материалы раздела</h2>
          <ul className={styles.documentsList}>
            {section.documents.map((document) => (
              <li key={document}>{document}</li>
            ))}
          </ul>
        </article>

        <article className={styles.sectionCard}>
          <span className={styles.sectionCardIcon}>
            <DocumentTextIcon aria-hidden="true" />
          </span>
          <h2>Что публикуется на странице</h2>
          <ul className={styles.detailsList}>
            {section.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className={styles.notice}>
            Для юридически значимого наполнения сюда можно загрузить утвержденные PDF, сканы приказов и актуальные редакции локальных актов.
          </div>
        </article>
      </section>
    </main>
  );
}
