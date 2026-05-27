import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  EyeIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import "./page.css";
import { siteSections } from "./sections";
import { organizationSections } from "./sveden/data";

const letters = ["ح", "س", "ي", "ن", "ي", "ة", "ع", "ل", "م", "ق", "ر", "آ", "ن", "ف", "ك", "ر"];

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Сведения", href: "/sveden" },
  { label: "Абитуриентам", href: "/abiturientam" },
  { label: "Студентам", href: "/studentam" },
  { label: "Контакты", href: "/kontakty" },
];

const stats = [
  { value: "1889", label: "историческое наследие" },
  { value: "4", label: "формы обучения" },
  { value: "3000+", label: "книг в библиотеке" },
];

const documentGroups = [
  {
    title: "Основные документы",
    description: "Устав, лицензия, сведения об организации и управлении.",
    href: "https://medrese-husainia.ru/?page_id=87",
    items: ["Основные сведения", "Структура и органы управления", "Лицензия"],
  },
  {
    title: "Локальные акты",
    description: "Правила, инструкции, положения и внутренние регламенты.",
    href: "https://medrese-husainia.ru/?page_id=156",
    items: ["Инструкции", "Положения", "Правила распорядка"],
  },
  {
    title: "Образование",
    description: "Программы, учебные планы, дисциплины и графики обучения.",
    href: "https://medrese-husainia.ru/?page_id=204",
    items: ["Рабочие программы", "Учебные дисциплины", "Материальная база"],
  },
  {
    title: "Поступление",
    description: "Все, что нужно абитуриенту перед подачей заявления.",
    href: "https://medrese-husainia.ru/?page_id=1539",
    items: ["Перечень документов", "Контакты приемной комиссии", "Условия обучения"],
  },
];

const admissionDocs = [
  "Заявление на имя директора",
  "Документ об образовании",
  "Копия паспорта",
  "Автобиография",
  "Медицинская справка",
  "Фотографии 3x4",
];

const programs = [
  {
    title: "Очное отделение",
    text: "Погружение в исламские науки, арабский язык, Коран, фикх и хадисы.",
  },
  {
    title: "Заочное обучение",
    text: "Сессии несколько раз в год для тех, кто совмещает учебу с работой или служением.",
  },
  {
    title: "Вечерние занятия",
    text: "Удобный формат три раза в неделю для жителей города и области.",
  },
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <header className="hero">
        <nav className="topbar" aria-label="Основная навигация">
          <a className="brand" href="#top" aria-label="Медресе Хусаиния">
            <Image src="/images/logo.jpg" alt="" width={54} height={54} priority />
            <span>
              <strong>Хусаиния</strong>
              <small>Медресе Оренбурга</small>
            </span>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <a className="icon-link" href="https://vk.com/husainiya_medrese" target="_blank" rel="noreferrer" aria-label="ВКонтакте">
            <Image src="/icons/vk.svg" alt="" width={28} height={28} />
          </a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">ЦДУМ России • Оренбургский муфтият</p>
            <h1>Медресе «Хусаиния»</h1>
            <p className="lead">
              Духовное образование, арабский язык, Коран и студенческая среда, где традиция говорит современным языком.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/sveden">
                <DocumentTextIcon aria-hidden="true" />
                Сведения
              </Link>
              <Link className="secondary-action" href="/abiturientam">
                Абитуриентам
                <ChevronRightIcon aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="hero-visual" aria-label="Фотография медресе">
            <Image src="/images/hero.jpg" alt="Медресе Хусаиния" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
            <div className="hero-badge">
              <BuildingLibraryIcon aria-hidden="true" />
              <span>Оренбург, ул. Рыбаковская, 98</span>
            </div>
          </section>
        </div>

        <div className="hero-stats" aria-label="Краткая информация">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="quick-strip" aria-label="Быстрый доступ">
        <Link href="/sveden">
          <DocumentTextIcon aria-hidden="true" />
          Сведения об организации
        </Link>
        <Link href="/abiturientam">
          <AcademicCapIcon aria-hidden="true" />
          Поступление
        </Link>
        <Link href="/studentam">
          <BookOpenIcon aria-hidden="true" />
          Учеба и жизнь
        </Link>
        <Link href="/kontakty">
          <PhoneIcon aria-hidden="true" />
          Связаться
        </Link>
      </section>

      <section id="site-sections" className="section site-sections">
        <div className="section-heading">
          <p className="eyebrow">Навигация</p>
          <h2>Разделы сайта</h2>
          <p>
            Основные страницы вынесены отдельно, чтобы посетитель сразу понимал, куда идти: поступление, учеба, новости, контакты или официальный раздел.
          </p>
        </div>

        <div className="site-section-grid">
          <Link className="site-section-card official" href="/sveden">
            <span>01</span>
            <h3>Сведения об образовательной организации</h3>
            <p>Официальные подразделы, документы, сведения об образовании, составе, доступной среде и отчетности.</p>
          </Link>
          {siteSections.map((section, index) => (
            <Link className="site-section-card" key={section.slug} href={section.href}>
              <span>{String(index + 2).padStart(2, "0")}</span>
              <h3>{section.title}</h3>
              <p>{section.summary}</p>
              <ul>
                {section.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section id="organization-info" className="section info-section">
        <div className="section-heading">
          <p className="eyebrow">Официальный раздел</p>
          <h2>Сведения об образовательной организации</h2>
          <p>
            Подразделы вынесены отдельно и названы так, чтобы соответствовать требованиям к структуре официального сайта образовательной организации.
          </p>
        </div>

        <div className="info-grid">
          {organizationSections.map((section) => (
            <Link className="info-card" key={section.slug} href={`/sveden/${section.slug}`}>
              <span>
                <DocumentTextIcon aria-hidden="true" />
              </span>
              <h3>{section.title}</h3>
              <p>{section.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="documents" className="section documents-section">
        <div className="section-heading">
          <p className="eyebrow">Все важное в одном месте</p>
          <h2>Документы без квеста по сайту</h2>
          <p>
            Раздел собран по смысловым группам: открываешь нужную карточку и сразу попадаешь к нужным сведениям или файлам.
          </p>
        </div>

        <div className="document-grid">
          {documentGroups.map((group) => (
            <a className="document-card" key={group.title} href={group.href} target="_blank" rel="noreferrer">
              <div className="document-card-top">
                <DocumentTextIcon aria-hidden="true" />
                <ArrowTopRightOnSquareIcon aria-hidden="true" />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <CheckCircleIcon aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      <section id="admission" className="section admission-section">
        <div className="admission-copy">
          <p className="eyebrow">Для поступающих</p>
          <h2>Понятный маршрут абитуриента</h2>
          <p>
            Сначала выбираете формат обучения, затем готовите документы и связываетесь с приемной комиссией. Самое нужное вынесено на первый экран раздела.
          </p>
          <div className="admission-actions">
            <a className="primary-action" href="https://medrese-husainia.ru/?page_id=1539" target="_blank" rel="noreferrer">
              Открыть правила приема
            </a>
            <a className="secondary-action" href="tel:+73532560949">
              Позвонить
              <PhoneIcon aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="admission-panel">
          <h3>Документы для подачи</h3>
          <div className="doc-list">
            {admissionDocs.map((doc, index) => (
              <div key={doc}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="student-life" className="section campus-section">
        <div className="arabic-pattern" aria-hidden="true">
          {letters.map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
        <div className="campus-media">
          <Image src="/images/mechet.jpg" alt="Центральная соборная мечеть" fill sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="campus-content">
          <p className="eyebrow">Учеба и среда</p>
          <h2>Традиция, которая живет сегодня</h2>
          <div className="program-list">
            {programs.map((program) => (
              <article key={program.title}>
                <SparklesIcon aria-hidden="true" />
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="section contact-section">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2>Приезжайте, звоните или пишите</h2>
        </div>
        <div className="contact-grid">
          <a href="tel:+73532560949">
            <PhoneIcon aria-hidden="true" />
            <span>+7 (3532) 56-09-49</span>
          </a>
          <a href="mailto:alfit35@mail.ru">
            <UserGroupIcon aria-hidden="true" />
            <span>alfit35@mail.ru</span>
          </a>
          <a href="https://yandex.ru/maps/?text=Оренбург%2C%20Рыбаковская%2098" target="_blank" rel="noreferrer">
            <MapPinIcon aria-hidden="true" />
            <span>Оренбург, Рыбаковская, 98</span>
          </a>
          <div>
            <CalendarDaysIcon aria-hidden="true" />
            <span>Пн-чт 08:30-20:30, пт-сб 08:30-13:45</span>
          </div>
        </div>
      </section>

      <a className="accessibility-link" href="#documents" aria-label="Перейти к разделу документов">
        <EyeIcon aria-hidden="true" />
      </a>
    </main>
  );
}
