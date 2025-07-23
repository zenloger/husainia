import Image from "next/image";

import './page.css';

export default function Home() {
  return (
    <>
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
            <a href="https://vk.com/husainiya_medrese" className="vk-link">
              <Image src="/icons/vk.svg" alt="ВК" width={40} height={40} />
            </a>
          </div>
        </nav>
      </div>

      {/* Блок с карточками */}
      <div className="quick-access">
        <div className="quick-background">
          
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <div className="card-name">
              <div className="card-logo">
                <Image src="/icons/abit.svg" width={90} height={90} alt="Абитуриентам" />
              </div>
              <div className="card-title">
                <span>Абитуриентам</span>
              </div>
            </div>
            <div className="card-nav">
              <div className="card-link">
                <span>Приёмная комиссия</span>
              </div>
              <div className="card-link">
                <span>Документы и положения</span>
              </div>
              <div className="card-link">
                <span>Приказы о зачислении</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-name">
              <div className="card-logo">
                <Image src="/icons/stud.svg" width={90} height={90} alt="Студентам" />
              </div>
              <div className="card-title">
                <span>Студентам</span>
              </div>
            </div>
            <div className="card-nav">
              <div className="card-link">
                <span>Расписание</span>
              </div>
              <div className="card-link">
                <span>Документы и правила</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
