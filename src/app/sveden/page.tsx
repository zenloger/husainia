import { ArrowLeftIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import styles from "./Sveden.module.css";
import { organizationSections } from "./data";

export default function SvedenPage() {
  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <div className={styles.topInner}>
          <Link className={styles.brand} href="/">
            <Image src="/images/logo.jpg" alt="" width={48} height={48} />
            <span>Медресе «Хусаиния»</span>
          </Link>
          <Link className={styles.backLink} href="/#organization-info">
            <ArrowLeftIcon aria-hidden="true" />
            На главную
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.topInner}>
          <div>
            <p className={styles.eyebrow}>Официальный раздел</p>
            <h1>Сведения об образовательной организации</h1>
            <p className={styles.summary}>
              Все обязательные подразделы собраны отдельными страницами, чтобы информацию было удобно проверять, обновлять и читать.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.main} aria-label="Подразделы">
        <div className={styles.directoryGrid}>
          {organizationSections.map((section) => (
            <Link className={styles.directoryCard} key={section.slug} href={`/sveden/${section.slug}`}>
              <span>
                <DocumentTextIcon aria-hidden="true" />
              </span>
              <h2>{section.title}</h2>
              <p>{section.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
