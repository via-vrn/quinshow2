"use client";

import Link from "next/link";
import Image from "next/image";
import { useModal } from "./OrderModal";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-black leading-[1.1] mb-6">
              <span className="text-white drop-shadow-sm">Яркие детские</span>
              <br />
              <span className="text-white drop-shadow-sm">праздники</span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">с любовью к деталям</span>
            </h1>
            <p className="text-lg mb-2 font-medium text-white/90">
              Создаём незабываемые впечатления для детей от 2 до 14 лет
            </p>
            <p className="text-white/80 mb-6">
              Более 150 персонажей, шоу-программы и квесты в Москве и области
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openModal("Подобрать программу", "Расскажите о вашем празднике")}
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Подобрать программу
              </button>
              <button
                type="button"
                onClick={() => openModal("Рассчитать стоимость", "Получите персональное предложение")}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/30 hover:-translate-y-1 transition-all"
              >
                Рассчитать стоимость
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="text-center hover:scale-110 transition-transform cursor-default">
                <p className="text-3xl font-black text-white">7+</p>
                <p className="text-sm text-white/80">лет опыта</p>
              </div>
              <div className="text-center hover:scale-110 transition-transform cursor-default">
                <p className="text-3xl font-black text-white">5000+</p>
                <p className="text-sm text-white/80">праздников</p>
              </div>
              <div className="text-center hover:scale-110 transition-transform cursor-default">
                <p className="text-3xl font-black text-white">4.9</p>
                <p className="text-sm text-white/80">рейтинг</p>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
              <div className="absolute inset-8 bg-white/30 rounded-full" />
              <div
                className="absolute inset-16 bg-white/40 rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                onClick={() => openModal("Заказать праздник", "от 4 500 ₽")}
              >
                <div className="text-center">
                  <p className="text-6xl mb-2">🎉</p>
                  <p className="text-white font-bold text-xl">от 4 500 ₽</p>
                  <p className="text-white/80 text-sm">за праздник</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 text-5xl animate-bounce">🎈</div>
              <div className="absolute -bottom-4 -left-4 text-5xl animate-bounce delay-100">🎁</div>
              <div className="absolute top-1/2 -right-8 text-4xl animate-bounce delay-200">⭐</div>
            </div>
          </div>
        </div>

        {/* Event Banners */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {/* Graduation Banner */}
          <div
            onClick={() => openModal("Выпускной", "Раннее бронирование со скидкой")}
            className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 min-h-[180px] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div className="relative z-10">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                раннее бронирование
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                Выпускной в детский
                <br />
                сад и школу
              </h3>
            </div>
            {/* Character silhouettes */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-60">
              <div className="absolute bottom-2 right-2 text-6xl group-hover:scale-110 transition-transform">🎓</div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-purple-500/20 to-transparent" />
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>

          {/* Animators Program Banner */}
          <Link
            href="#programs"
            className="group relative bg-gradient-to-br from-violet-400 via-purple-400 to-violet-500 rounded-3xl p-6 min-h-[180px] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                О программе
                <br />
                аниматоров
              </h3>
              <p className="text-white/80 text-sm mt-2">150+ персонажей</p>
            </div>
            {/* Cute mascot */}
            <div className="absolute bottom-4 right-4 flex items-end gap-2">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center relative group-hover:scale-110 transition-transform">
                <div className="absolute top-2 left-3 w-2 h-2 bg-gray-900 rounded-full" />
                <div className="absolute top-2 right-3 w-2 h-2 bg-gray-900 rounded-full" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-2 bg-orange-400 rounded-full" />
                {/* Dots on body */}
                <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-orange-300 rounded-full" />
                <div className="absolute bottom-3 right-4 w-1.5 h-1.5 bg-orange-300 rounded-full" />
              </div>
              <div className="w-4 h-4 bg-yellow-300 rounded-full mb-6" />
            </div>
            <div className="absolute bottom-3 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white/80 text-xs font-medium">Подробнее →</span>
            </div>
          </Link>

          {/* Yandex Rating Banner */}
          <div className="relative bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-3xl p-6 min-h-[180px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start gap-4">
              {/* Yandex Logo */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-red-500 font-black text-3xl">Я</span>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gray-900">5.0</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 text-sm font-medium mt-1">
                  Рейтинг организаций Яндекс
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="w-3 h-3 bg-orange-500/30 rounded-full" />
              <div className="w-2 h-2 bg-red-400/40 rounded-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF8E7] to-transparent" />
    </section>
  );
}
