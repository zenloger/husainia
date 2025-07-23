import Image from "next/image";

export default function Home() {
  return (
    <div className="main-bg">
      {/* Верхний блок с изображениями и заголовками */}
      <header className="header">
        <div className="top-header">
          <div className="top-header-empty"></div>
          <div className="top-header-text">
            <div>Центральное духовное управление мусульман России</div>
            <div>Региональное духовное управление мусульман Оренбургской области</div>
          </div>
          <div className="top-header-text-settings">
            <span>Aa</span>
          </div>
        </div>
        <div className="under-header">
          <div className="header-img-left">
            <Image src="/images/mechet.png" alt="Старое здание" width={180} height={120} />
          </div>
          <div className="header-center">
            <div className="header-title">
              Мусульманская религиозная организация<br/>
              «духовная профессиональная образовательная организация»<br/>
              <span className="header-title-main">«Медресе Хусаиния»</span>
            </div>
          </div>
          <div className="header-img-right">
            <Image src="/images/logo.png" alt="Герб" width={110} height={110} />
          </div>
        </div>
      </header>
      {/* Меню */}
      <nav className="main-menu">
        <div className="nav-empty"></div>
        <div className="nav-pages">
          <a href="#">Главная</a>
          <a href="#">Новости</a>
          <a href="#">Сведения об образовательной организации</a>
          <a href="#">Контакты</a>
        </div>
        <div className="nav-links">
          <a href="#" className="vk-link">
            <Image src="/icons/vk.svg" alt="ВК" width={40} height={40} />
          </a>
        </div>
      </nav>
      {/* Главный блок с фоновым фото и текстом */}
      <section className="main-hero">
        <div className="main-hero-bg" />
        <div className="main-hero-content">
          <h1>Поступайте к нам учиться!</h1>
        </div>
      </section>
    </div>
  );
}
