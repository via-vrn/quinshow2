export default function QuestSection() {
  const quests = [
    { icon: "🗺️", name: "Пиратские приключения", color: "from-amber-500 to-orange-500" },
    { icon: "🔮", name: "Магический квест", color: "from-purple-500 to-violet-500" },
    { icon: "🕵️", name: "Детективное расследование", color: "from-gray-700 to-gray-900" },
  ];

  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-[2.5rem] p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="text-white relative z-10">
              <span className="text-amber-900 font-semibold text-sm uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Квесты</span>
              <h2 className="text-3xl md:text-4xl font-black mt-4 mb-4">
                Приключения
                <br />
                <span className="text-amber-900">для настоящих героев</span>
              </h2>
              <p className="text-white/90 mb-6 max-w-md">
                Захватывающие квесты с загадками, испытаниями и поиском сокровищ.
                Идеально для детей от 6 лет!
              </p>

              {/* Quest cards - bento style */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {quests.map((quest, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${quest.color} rounded-2xl p-4 text-center hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <span className="text-3xl block mb-2">{quest.icon}</span>
                    <span className="text-white text-xs font-bold">{quest.name}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Выбрать квест
              </button>
            </div>

            {/* Right Content - Decorative Bento */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-center">
                <span className="text-7xl">🏴‍☠️</span>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-center row-span-2">
                <div className="text-center">
                  <span className="text-6xl block mb-3">🎯</span>
                  <p className="text-white font-bold">от 6 000 ₽</p>
                  <p className="text-white/80 text-sm">за квест</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-center">
                <span className="text-7xl">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
