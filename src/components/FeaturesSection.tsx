export default function FeaturesSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container with rounded corners */}
        <div className="bg-gradient-to-br from-violet-400 via-purple-400 to-violet-500 rounded-[2.5rem] p-8 md:p-10">
          <div className="text-center mb-8">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">Почему мы</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 text-white">
              Праздники, которые запомнятся
            </h2>
            <p className="text-white/80 mt-3 max-w-2xl mx-auto">
              Мы не просто проводим мероприятия — мы создаём волшебные моменты,
              которые дети будут вспоминать годами.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            {/* Large Card - Team (spans 2 cols, 2 rows) */}
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-6 text-white relative overflow-hidden min-h-[280px] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-2">Профессиональная команда</h3>
                <p className="text-white/90 max-w-xs">Более 50 аниматоров с педагогическим образованием и опытом от 3 лет</p>
              </div>
              <div className="text-8xl opacity-30 absolute bottom-4 right-4">👨‍🎤</div>
            </div>

            {/* On Time - small */}
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-5 text-white min-h-[130px]">
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="text-base font-black mb-1">Всегда вовремя</h3>
              <p className="text-xs text-white/90">Приезжаем за 30 минут до начала</p>
            </div>

            {/* Payment - small */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl p-5 text-white min-h-[130px]">
              <div className="text-3xl mb-2">💳</div>
              <h3 className="text-base font-black mb-1">Удобная оплата</h3>
              <p className="text-xs text-white/90">Оплата после праздника</p>
            </div>

            {/* Individual Approach - wide (spans 2 cols) */}
            <div className="md:col-span-2 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-5 text-white relative overflow-hidden min-h-[130px]">
              <h3 className="text-lg font-black mb-1">Индивидуальный подход</h3>
              <p className="text-white/90 text-sm max-w-sm">
                Каждый сценарий адаптируем под интересы именинника.
                Учитываем возраст и увлечения ребёнка.
              </p>
              <div className="absolute bottom-2 right-4 text-5xl opacity-30">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
