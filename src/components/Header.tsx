"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const menuCategories = [
  { id: "animators", label: "Аниматоры", icon: "🎭" },
  { id: "shows", label: "Шоу-программы", icon: "🎪" },
  { id: "quests", label: "Квесты", icon: "🎯" },
  { id: "additional", label: "Доп. услуги", icon: "✨" },
  { id: "graduation", label: "Выпускные", icon: "🎓" },
  { id: "newyear", label: "Новый год", icon: "❄️" },
  { id: "halloween", label: "Хэллоуин", icon: "🎃" },
];

const serviceCards: Record<string, Array<{ title: string; color: string; hasImage?: boolean; span?: string }>> = {
  animators: [
    { title: "Все аниматоры", color: "bg-violet-400", hasImage: true, span: "col-span-1 row-span-2" },
    { title: "Аниматор мальчику", color: "bg-gray-50" },
    { title: "Аниматор девочке", color: "bg-gray-50" },
    { title: "2 года", color: "bg-amber-100" },
    { title: "3-4 года", color: "bg-yellow-100" },
    { title: "5-6 лет", color: "bg-violet-100" },
    { title: "7-8 лет", color: "bg-amber-100" },
    { title: "9-10 лет", color: "bg-gray-50" },
    { title: "11-12 лет", color: "bg-gray-50" },
    { title: "12+", color: "bg-emerald-100" },
    { title: "Аниматор на свадьбу от 3990р", color: "bg-violet-100" },
    { title: "На день рождения", color: "bg-yellow-100" },
    { title: "На выпускной", color: "bg-amber-100" },
    { title: "Аниматор с выездом на дачу в Москве", color: "bg-gray-50" },
    { title: "На улицу", color: "bg-gray-50" },
    { title: "В ресторан", color: "bg-emerald-100" },
  ],
  shows: [
    { title: "Все шоу-программы", color: "bg-violet-400", hasImage: true, span: "col-span-1 row-span-2" },
    { title: "Научное шоу", color: "bg-gray-50" },
    { title: "Крио шоу", color: "bg-sky-100" },
    { title: "Шоу мыльных пузырей", color: "bg-pink-100" },
    { title: "Бумажное шоу", color: "bg-yellow-100" },
    { title: "Фокусник", color: "bg-violet-100" },
  ],
  quests: [
    { title: "Все квесты", color: "bg-violet-400", hasImage: true, span: "col-span-1 row-span-2" },
    { title: "Квест на природе", color: "bg-emerald-100" },
    { title: "Домашний квест", color: "bg-amber-100" },
    { title: "Квест в кафе", color: "bg-gray-50" },
  ],
  additional: [
    { title: "Все доп. услуги", color: "bg-violet-400", hasImage: true, span: "col-span-1 row-span-2" },
    { title: "Аквагрим", color: "bg-pink-100" },
    { title: "Фотограф", color: "bg-yellow-100" },
    { title: "Видеограф", color: "bg-gray-50" },
    { title: "Шары", color: "bg-violet-100" },
  ],
  graduation: [
    { title: "Выпускной под ключ", color: "bg-violet-400", hasImage: true, span: "col-span-1 row-span-2" },
    { title: "Выпускной в детском саду", color: "bg-yellow-100" },
    { title: "Выпускной в школе", color: "bg-gray-50" },
  ],
  newyear: [
    { title: "Новогодние программы", color: "bg-violet-400", hasImage: true, span: "col-span-1 row-span-2" },
    { title: "Дед Мороз", color: "bg-sky-100" },
    { title: "Снегурочка", color: "bg-gray-50" },
  ],
  halloween: [
    { title: "Хэллоуин программы", color: "bg-violet-400", hasImage: true, span: "col-span-1 row-span-2" },
    { title: "Страшные персонажи", color: "bg-amber-100" },
  ],
};

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("animators");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past initial position
      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setIsMegaMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-xl lg:text-2xl">🍌</span>
            </div>
            <div className="flex items-center gap-1">
              <span className={`font-black text-base lg:text-lg ${isScrolled ? "text-rose-500" : "text-rose-500"}`}>КВИНН</span>
              <span className={`font-black text-base lg:text-lg ${isScrolled ? "text-gray-800" : "text-white drop-shadow-sm"}`}>ШОУ</span>
            </div>
          </Link>

          {/* All Services Button & Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {/* Все услуги Button */}
            <div className="relative" ref={megaMenuRef}>
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  isMegaMenuOpen
                    ? "bg-white text-gray-800 shadow-md"
                    : "bg-white/90 text-gray-800 hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                </div>
                <span>Все услуги</span>
              </button>

              {/* Mega Menu Dropdown - Responsive */}
              {isMegaMenuOpen && (
                <div className="fixed left-1/2 -translate-x-1/2 top-16 bg-white rounded-2xl shadow-2xl p-3 lg:p-4 w-[calc(100vw-2rem)] max-w-[950px] max-h-[70vh] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="flex gap-3 lg:gap-4">
                    {/* Left Sidebar - Categories */}
                    <div className="w-44 lg:w-52 shrink-0 flex flex-col gap-1 overflow-y-auto max-h-[60vh]">
                      {menuCategories.map((cat) => (
                        <button
                          type="button"
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`flex items-center gap-2 lg:gap-3 px-3 py-2 rounded-xl text-left text-xs lg:text-sm font-medium transition-all ${
                            activeCategory === cat.id
                              ? "bg-yellow-400 text-gray-800"
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                        >
                          <span className="text-base lg:text-lg">{cat.icon}</span>
                          <span>{cat.label}</span>
                        </button>
                      ))}

                      {/* Promo Block */}
                      <div className="mt-3 bg-gradient-to-br from-violet-400 to-violet-500 rounded-2xl p-3 text-white relative overflow-hidden">
                        <p className="font-bold text-xs">Выпускной</p>
                        <p className="font-black text-sm lg:text-base leading-tight">в школу «Под ключ»</p>
                        <button
                          type="button"
                          className="mt-2 bg-orange-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full hover:bg-orange-600 transition-colors"
                        >
                          Подробнее
                        </button>
                        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-50">
                          <div className="text-4xl">🎓</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Service Cards Grid */}
                    <div className="flex-1 overflow-y-auto max-h-[60vh] pr-1">
                      <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                        {serviceCards[activeCategory]?.map((card, idx) => (
                          <Link
                            href="#"
                            key={`${activeCategory}-${idx}`}
                            className={`${card.color} ${card.span || ""} rounded-xl p-2 lg:p-3 ${card.span ? "min-h-[140px] lg:min-h-[160px]" : "min-h-[60px] lg:min-h-[70px]"} flex flex-col justify-between hover:shadow-md hover:scale-[1.02] transition-all group relative overflow-hidden border border-gray-100`}
                          >
                            <span className="text-[11px] lg:text-xs font-medium text-gray-800 leading-tight pr-5">
                              {card.title}
                            </span>
                            {card.hasImage && (
                              <div className="absolute bottom-6 left-2 text-3xl lg:text-4xl">
                                🎭
                              </div>
                            )}
                            {/* Arrow icon */}
                            <div className="absolute bottom-2 right-2 w-5 h-5 lg:w-6 lg:h-6 rounded-md bg-white/60 flex items-center justify-center group-hover:bg-white transition-colors">
                              <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-3 xl:gap-5">
              <Link href="#about" className={`text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${isScrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-yellow-200 drop-shadow-sm"}`}>
                О нас
              </Link>
              <Link href="#prices" className={`text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${isScrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-yellow-200 drop-shadow-sm"}`}>
                Цены
              </Link>
              <Link href="#blog" className={`text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${isScrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-yellow-200 drop-shadow-sm"}`}>
                Блог
              </Link>
              <Link href="#gallery" className={`text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${isScrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-yellow-200 drop-shadow-sm"}`}>
                Фотогалерея
              </Link>
              <Link href="#reviews" className={`text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${isScrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-yellow-200 drop-shadow-sm"}`}>
                Отзывы
              </Link>
              <Link href="#contacts" className={`text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${isScrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-yellow-200 drop-shadow-sm"}`}>
                Контакты
              </Link>
            </nav>
          </div>

          {/* Right Side - Working Hours, Social & Contact */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Working Hours - Top Right */}
            <p className={`text-[9px] lg:text-[10px] hidden xl:block whitespace-nowrap ${isScrolled ? "text-gray-700" : "text-white/90 drop-shadow-sm"}`}>С 9:00 до 20:00 без выходных</p>

            {/* Messenger Icons */}
            <div className="flex items-center gap-1.5 lg:gap-2">
              {/* MAX */}
              <Link
                href="#"
                className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:scale-110 transition-all"
                title="MAX"
              >
                <span className="text-[8px] lg:text-[9px] font-black text-orange-500">MAX</span>
              </Link>

              {/* Telegram */}
              <Link
                href="https://t.me/quinnshow"
                target="_blank"
                className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:scale-110 transition-all"
                title="Telegram"
              >
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/79507600027"
                target="_blank"
                className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:scale-110 transition-all"
                title="WhatsApp"
              >
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </Link>

              {/* VK */}
              <Link
                href="https://vk.com/quinnshow"
                target="_blank"
                className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md hover:scale-110 transition-all"
                title="ВКонтакте"
              >
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#0077FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.49 4 8.015c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.455 2.27 4.607 2.86 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </Link>
            </div>

            {/* Phone Number & Callback */}
            <div className="text-right hidden lg:block">
              <Link href="tel:+79507600027" className={`text-base xl:text-lg font-black transition-colors whitespace-nowrap ${isScrolled ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-yellow-200 drop-shadow-sm"}`}>
                +7 (950) 760-00-27
              </Link>
              <p className={`text-[9px] xl:text-[10px] font-medium cursor-pointer underline whitespace-nowrap ${isScrolled ? "text-orange-600 hover:text-orange-700" : "text-yellow-200 hover:text-white"}`}>
                Заказать обратный звонок
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "hover:bg-yellow-500/50" : "hover:bg-white/20"}`}
          >
            <svg className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white drop-shadow-sm"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-2xl shadow-lg p-4 max-h-[80vh] overflow-y-auto">
            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-2 mb-4">
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-yellow-400 rounded-xl font-semibold text-sm text-gray-800"
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                </div>
                <span>Все услуги</span>
              </button>
              <Link href="#about" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">О нас</Link>
              <Link href="#prices" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">Цены</Link>
              <Link href="#blog" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">Блог</Link>
              <Link href="#gallery" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">Фотогалерея</Link>
              <Link href="#reviews" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">Отзывы</Link>
              <Link href="#contacts" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">Контакты</Link>
            </nav>

            {/* Mobile Mega Menu */}
            {isMegaMenuOpen && (
              <div className="mb-4 border-t pt-4">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {menuCategories.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        activeCategory === cat.id
                          ? "bg-yellow-400 text-gray-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto">
                  {serviceCards[activeCategory]?.slice(0, 8).map((card, idx) => (
                    <Link
                      href="#"
                      key={`mobile-${activeCategory}-${idx}`}
                      className={`${card.color} rounded-xl p-2.5 min-h-[50px] flex items-start text-xs font-medium text-gray-800 relative`}
                    >
                      <span className="pr-5">{card.title}</span>
                      <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded bg-white/60 flex items-center justify-center">
                        <svg className="w-2 h-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Messenger Icons */}
            <div className="flex items-center gap-2 mb-4">
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                <span className="text-[9px] font-black text-orange-500">MAX</span>
              </Link>
              <Link href="https://t.me/quinnshow" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                <svg className="w-4 h-4 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>
              <Link href="https://wa.me/79507600027" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </Link>
              <Link href="https://vk.com/quinnshow" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                <svg className="w-4 h-4 text-[#0077FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.49 4 8.015c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.455 2.27 4.607 2.86 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </Link>
            </div>

            {/* Social & Contact */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-left">
                <Link href="tel:+79507600027" className="text-base font-bold text-gray-800">+7 (950) 760-00-27</Link>
                <p className="text-[10px] text-gray-500">С 9:00 до 20:00 без выходных</p>
              </div>
              <p className="text-[10px] text-orange-600 font-medium cursor-pointer hover:underline">
                Заказать обратный звонок
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
