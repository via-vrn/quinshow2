const programItems = [
  {
    icon: "🏷️",
    title: "Фиксированная стоимость",
    subtitle: "",
    color: "bg-gradient-to-br from-yellow-300 to-amber-300",
    size: "normal",
  },
  {
    icon: "🥁",
    title: "Музыкальное сопровождение",
    subtitle: "",
    color: "bg-gradient-to-br from-amber-100 to-yellow-100",
    size: "normal",
  },
  {
    icon: "📋",
    title: "Авторский сценарий",
    subtitle: "",
    color: "bg-gradient-to-br from-violet-200 to-purple-200",
    size: "small",
  },
  {
    icon: "🫧",
    title: "Мыльный интерактив",
    subtitle: "только при заказе от 1,5 часов",
    color: "bg-gradient-to-br from-gray-100 to-slate-100",
    size: "small",
  },
  {
    icon: "🎩",
    title: "Весёлые фокусы",
    subtitle: "",
    color: "bg-gradient-to-br from-violet-300 to-purple-300",
    size: "small",
  },
  {
    icon: "🎂",
    title: "Вынос торта",
    subtitle: "",
    color: "bg-gradient-to-br from-pink-100 to-rose-100",
    size: "small",
  },
  {
    icon: "🎪",
    title: "Тематический реквизит, который мы обновляем каждые 2 месяца",
    subtitle: "",
    color: "bg-gradient-to-br from-yellow-300 to-amber-300",
    size: "large",
  },
  {
    icon: "🎨",
    title: "Лёгкий аквагрим",
    subtitle: "только при заказе от 1,5 часов",
    color: "bg-gradient-to-br from-amber-100 to-yellow-100",
    size: "small",
  },
  {
    icon: "🎈",
    title: "Фигурки из шариков",
    subtitle: "",
    color: "bg-gradient-to-br from-yellow-300 to-amber-300",
    size: "small",
  },
  {
    icon: "🚗",
    title: "Транспортные расходы до МКАД",
    subtitle: "",
    color: "bg-gradient-to-br from-blue-100 to-cyan-100",
    size: "small",
  },
];

export default function ProgramSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FFF8E7] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Что входит</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            В каждую программу включено
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Мы продумали каждую деталь, чтобы праздник прошёл идеально.
            Вам остаётся только наслаждаться моментом вместе с детьми!
          </p>
        </div>

        {/* Bento Grid - Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 mb-3">
          {/* Фиксированная стоимость - 3 cols */}
          <div className={`col-span-2 md:col-span-3 ${programItems[0].color} rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-4xl">{programItems[0].icon}</span>
            <div>
              <h4 className="font-bold text-gray-800 text-sm md:text-base">{programItems[0].title}</h4>
            </div>
          </div>

          {/* Музыкальное сопровождение - 3 cols */}
          <div className={`col-span-2 md:col-span-3 ${programItems[1].color} rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-4xl">{programItems[1].icon}</span>
            <div>
              <h4 className="font-bold text-gray-800 text-sm md:text-base">{programItems[1].title}</h4>
            </div>
          </div>

          {/* Авторский сценарий - 2 cols */}
          <div className={`col-span-1 md:col-span-2 ${programItems[2].color} rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-3xl mb-2">{programItems[2].icon}</span>
            <h4 className="font-bold text-gray-800 text-xs md:text-sm">{programItems[2].title}</h4>
          </div>

          {/* Мыльный интерактив - 2 cols */}
          <div className={`col-span-1 md:col-span-2 ${programItems[3].color} rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-3xl mb-2">{programItems[3].icon}</span>
            <h4 className="font-bold text-gray-800 text-xs md:text-sm">{programItems[3].title}</h4>
            {programItems[3].subtitle && (
              <p className="text-[10px] text-gray-500 mt-1">{programItems[3].subtitle}</p>
            )}
          </div>

          {/* Весёлые фокусы - 2 cols */}
          <div className={`col-span-2 md:col-span-2 ${programItems[4].color} rounded-2xl p-4 flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-4xl">{programItems[4].icon}</span>
            <h4 className="font-bold text-white text-sm">{programItems[4].title}</h4>
          </div>
        </div>

        {/* Bento Grid - Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3">
          {/* Вынос торта - 2 cols */}
          <div className={`col-span-1 md:col-span-2 ${programItems[5].color} rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-3xl mb-2">{programItems[5].icon}</span>
            <h4 className="font-bold text-gray-800 text-xs md:text-sm">{programItems[5].title}</h4>
          </div>

          {/* Тематический реквизит - 4 cols (LARGE) */}
          <div className={`col-span-2 md:col-span-4 ${programItems[6].color} rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-4xl">{programItems[6].icon}</span>
            <div>
              <h4 className="font-bold text-gray-800 text-sm md:text-base leading-tight">{programItems[6].title}</h4>
            </div>
          </div>

          {/* Лёгкий аквагрим - 2 cols */}
          <div className={`col-span-1 md:col-span-2 ${programItems[7].color} rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-3xl mb-2">{programItems[7].icon}</span>
            <h4 className="font-bold text-gray-800 text-xs md:text-sm">{programItems[7].title}</h4>
            {programItems[7].subtitle && (
              <p className="text-[10px] text-gray-500 mt-1">{programItems[7].subtitle}</p>
            )}
          </div>

          {/* Фигурки из шариков - 2 cols */}
          <div className={`col-span-1 md:col-span-2 ${programItems[8].color} rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-3xl mb-2">{programItems[8].icon}</span>
            <h4 className="font-bold text-gray-800 text-xs md:text-sm">{programItems[8].title}</h4>
          </div>

          {/* Транспортные расходы - 3 cols (wider, fixed text) */}
          <div className={`col-span-2 md:col-span-3 ${programItems[9].color} rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[100px]`}>
            <span className="text-3xl mb-2">{programItems[9].icon}</span>
            <h4 className="font-bold text-gray-800 text-xs md:text-sm leading-tight">
              Транспортные расходы<br />до МКАД
            </h4>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 p-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl hover:shadow-xl transition-shadow">
          <div className="text-center sm:text-left">
            <p className="text-white/80 text-sm">Стоимость программы</p>
            <p className="text-3xl font-black text-white">от 4 500 ₽</p>
          </div>
          <button type="button" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
            <span className="group-hover:mr-2 transition-all">Получить расчёт</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
