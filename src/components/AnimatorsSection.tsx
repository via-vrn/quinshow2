"use client";

import { useState, useRef } from "react";
import { useModal } from "./OrderModal";

const filters = {
  audience: ["Все", "Для мальчиков", "Для девочек"],
  age: ["2-3 года", "4-6 лет", "7-9 лет", "10-12 лет", "13+"],
  event: ["День рождения", "Выпускной", "Утренник", "Корпоратив"],
};

const animators = [
  {
    id: 1,
    name: "Весёлые клоуны",
    description: "Яркие костюмы, фокусы и смех",
    price: "4 500",
    badge: "Популярно",
    color: "from-red-400 to-orange-400",
    icon: "🤡",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Принцессы и феи",
    description: "Волшебство и сказочная атмосфера",
    price: "5 000",
    badge: "Для девочек",
    color: "from-pink-400 to-purple-400",
    icon: "👸",
    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Супергерои",
    description: "Активные игры и приключения",
    price: "5 500",
    badge: "Для мальчиков",
    color: "from-blue-500 to-indigo-500",
    icon: "🦸",
    image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Пираты",
    description: "Поиск сокровищ и морские истории",
    price: "5 000",
    badge: "Хит",
    color: "from-amber-600 to-yellow-500",
    icon: "🏴‍☠️",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Волшебники",
    description: "Магия, фокусы и чудеса",
    price: "6 000",
    badge: "Новинка",
    color: "from-purple-500 to-blue-500",
    icon: "🧙",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Мультгерои",
    description: "Любимые персонажи из мультфильмов",
    price: "5 500",
    badge: "Топ",
    color: "from-green-400 to-teal-400",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Единороги",
    description: "Сказочные существа и радужное настроение",
    price: "5 500",
    badge: "Для девочек",
    color: "from-pink-300 to-violet-400",
    icon: "🦄",
    image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Динозавры",
    description: "Путешествие в мир юрского периода",
    price: "6 500",
    badge: "Новинка",
    color: "from-green-500 to-lime-400",
    icon: "🦖",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Роботы и трансформеры",
    description: "Космические приключения и технологии",
    price: "7 000",
    badge: "Для мальчиков",
    color: "from-gray-600 to-blue-600",
    icon: "🤖",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Ниндзя",
    description: "Боевые искусства и тренировки воинов",
    price: "5 500",
    badge: "Хит",
    color: "from-gray-800 to-red-600",
    icon: "🥷",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Космонавты",
    description: "Путешествие на другие планеты",
    price: "6 000",
    badge: "Новинка",
    color: "from-indigo-600 to-purple-600",
    icon: "👨‍🚀",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Русалки",
    description: "Подводное царство и морские тайны",
    price: "5 500",
    badge: "Для девочек",
    color: "from-cyan-400 to-blue-500",
    icon: "🧜‍♀️",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=300&fit=crop",
  },
];

export default function AnimatorsSection() {
  const [activeAudience, setActiveAudience] = useState("Все");
  const carouselRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredAnimators = animators.filter((animator) => {
    if (activeAudience === "Все") return true;
    if (activeAudience === "Для мальчиков") return animator.badge === "Для мальчиков" || animator.badge === "Хит" || animator.badge === "Новинка";
    if (activeAudience === "Для девочек") return animator.badge === "Для девочек";
    return true;
  });

  const handleBookAnimator = (animatorName: string) => {
    openModal("Заказать аниматора", animatorName);
  };

  return (
    <section className="py-16 bg-[#FFF8E7]" id="programs">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Наши программы</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            Аниматоры на любой вкус
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Выберите персонажа, который сделает праздник вашего ребёнка незабываемым.
            Все наши аниматоры — профессионалы с опытом работы от 3 лет.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl p-6 mb-10 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Audience */}
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-700">Для кого</h4>
              <div className="flex flex-wrap gap-2">
                {filters.audience.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveAudience(item)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                      activeAudience === item
                        ? "bg-orange-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Age */}
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-700">Возраст</h4>
              <div className="flex flex-wrap gap-2">
                {filters.age.map((item) => (
                  <button key={item} type="button" className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-orange-100 hover:-translate-y-0.5 transition-all">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Event */}
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-700">Событие</h4>
              <div className="flex flex-wrap gap-2">
                {filters.event.map((item) => (
                  <button key={item} type="button" className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-orange-100 hover:-translate-y-0.5 transition-all">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 font-medium">
            Найдено: <span className="text-orange-500 font-bold">{filteredAnimators.length}</span> персонажей
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-orange-50 hover:-translate-y-1 transition-all"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-orange-50 hover:-translate-y-1 transition-all"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Animators Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredAnimators.map((animator) => (
            <div
              key={animator.id}
              className="group flex-shrink-0 w-[300px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 snap-start"
            >
              <div className={`relative h-48 bg-gradient-to-br ${animator.color} flex items-center justify-center overflow-hidden`}>
                <span className="text-8xl group-hover:scale-125 transition-transform duration-500">{animator.icon}</span>
                {animator.badge && (
                  <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {animator.badge}
                  </span>
                )}
                {/* Hover overlay with book button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => handleBookAnimator(animator.name)}
                    className="px-6 py-3 bg-white text-gray-800 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-colors transform scale-90 group-hover:scale-100"
                  >
                    Заказать
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-orange-500 transition-colors">
                  {animator.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{animator.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-orange-500">от {animator.price} ₽</span>
                  <button
                    type="button"
                    onClick={() => handleBookAnimator(animator.name)}
                    className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors"
                  >
                    <svg className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => openModal("Подобрать персонажа", "Мы поможем выбрать идеального аниматора")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Смотреть всех персонажей
          </button>
        </div>
      </div>
    </section>
  );
}
