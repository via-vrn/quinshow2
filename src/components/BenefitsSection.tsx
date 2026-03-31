const benefits = [
  {
    icon: "💰",
    title: "Бюджет",
    description: "Отличные праздники на любой бюджет. Качество не зависит от вашего бюджета",
    color: "from-green-400 to-emerald-500",
    size: "normal",
  },
  {
    icon: "🛡️",
    title: "Безопасность",
    description: "Все костюмы проходят термообработку и очистку перед каждым праздником",
    color: "from-blue-400 to-cyan-500",
    size: "large",
  },
  {
    icon: "📊",
    title: "Опыт",
    description: "Работаем с 2018 года и за это время провели более 20000 праздников",
    color: "from-orange-400 to-amber-500",
    size: "normal",
  },
  {
    icon: "🏢",
    title: "Для бизнеса",
    description: "Работаем с юридическими лицами по договору и на ваших площадках",
    color: "from-violet-400 to-purple-500",
    size: "normal",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-rose-400 via-pink-400 to-rose-500 rounded-[2.5rem] p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-white">
            Почему стоит
            <br />
            обратиться к нам
          </h2>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            {/* Budget - small */}
            <div className={`bg-gradient-to-br ${benefits[0].color} rounded-3xl p-5 text-white`}>
              <div className="text-4xl mb-3">{benefits[0].icon}</div>
              <h3 className="font-black text-lg mb-2">{benefits[0].title}</h3>
              <p className="text-sm text-white/90">{benefits[0].description}</p>
            </div>

            {/* Safety - large (spans 2 cols) */}
            <div className={`md:col-span-2 bg-gradient-to-br ${benefits[1].color} rounded-3xl p-6 text-white flex items-center gap-6`}>
              <div className="text-6xl">{benefits[1].icon}</div>
              <div>
                <h3 className="font-black text-xl mb-2">{benefits[1].title}</h3>
                <p className="text-sm text-white/90">{benefits[1].description}</p>
              </div>
            </div>

            {/* Experience - small */}
            <div className={`bg-gradient-to-br ${benefits[2].color} rounded-3xl p-5 text-white`}>
              <div className="text-4xl mb-3">{benefits[2].icon}</div>
              <h3 className="font-black text-lg mb-2">{benefits[2].title}</h3>
              <p className="text-sm text-white/90">{benefits[2].description}</p>
            </div>

            {/* Business - full width */}
            <div className={`md:col-span-4 bg-gradient-to-br ${benefits[3].color} rounded-3xl p-6 text-white`}>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="text-5xl">{benefits[3].icon}</div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-black text-xl mb-2">{benefits[3].title}</h3>
                  <p className="text-white/90">{benefits[3].description}</p>
                </div>
                <button
                  type="button"
                  className="bg-white text-violet-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Связаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
