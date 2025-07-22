import { AcademicCapIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col font-sans">
      {/* Header */}
      <header className="w-full py-8 bg-white/80 shadow-md flex flex-col items-center gap-2">
        <AcademicCapIcon className="h-12 w-12 text-emerald-700" />
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 tracking-tight">Хусаиния</h1>
        <p className="text-emerald-700 text-lg font-medium">Духовная образовательная организация</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 gap-12">
        {/* Welcome Section */}
        <section className="max-w-2xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-800">Добро пожаловать!</h2>
          <p className="text-lg text-emerald-900">
            "Хусаиния" — место, где знания, духовность и традиции ислама объединяются для развития личности и общества. Мы рады видеть вас в нашем образовательном центре!
          </p>
        </section>

        {/* Mission Section */}
        <section className="max-w-3xl bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center gap-3 border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Наша миссия</h3>
          <p className="text-emerald-900 text-base">
            Продвигать исламские ценности, обучать основам веры, Корана и арабского языка, а также формировать гармоничную личность на основе духовных и нравственных принципов.
          </p>
        </section>

        {/* Schedule Section */}
        <section className="w-full max-w-2xl bg-emerald-50 rounded-xl shadow p-6 flex flex-col gap-4 border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">Расписание занятий</h3>
          <ul className="text-emerald-900 text-base space-y-1">
            <li><span className="font-medium">Понедельник, Среда, Пятница:</span> 18:00 – 20:00 — Основы ислама, Коран</li>
            <li><span className="font-medium">Суббота:</span> 12:00 – 14:00 — Арабский язык для начинающих</li>
            <li><span className="font-medium">Воскресенье:</span> 13:00 – 15:00 — Встречи и лекции</li>
          </ul>
        </section>

        {/* Contacts Section */}
        <section className="w-full max-w-2xl bg-white/80 rounded-xl shadow p-6 flex flex-col gap-4 border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">Контакты</h3>
          <div className="flex flex-col gap-2 text-emerald-900">
            <div className="flex items-center gap-2"><PhoneIcon className="h-5 w-5 text-emerald-700" /> <span>+7 (999) 123-45-67</span></div>
            <div className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5 text-emerald-700" /> <span>info@husaine.ru</span></div>
            <div className="flex items-center gap-2"><MapPinIcon className="h-5 w-5 text-emerald-700" /> <span>г. Москва, ул. Примерная, 10</span></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-emerald-900 text-white text-center text-sm mt-auto">
        &copy; {new Date().getFullYear()} Хусаиния. Все права защищены.
      </footer>
    </div>
  );
}
