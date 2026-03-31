import Link from "next/link";

const shows = [
  {
    id: 1,
    name: "Научное шоу",
    description: "Эксперименты, взрывы и химия",
    price: "от 8 000",
    icon: "🔬",
    color: "from-blue-500 to-cyan-400",
    badge: "Хит",
    size: "large",
  },
  {
    id: 2,
    name: "Мыльное шоу",
    description: "Гигантские пузыри и волшебство",
    price: "от 6 000",
    icon: "🫧",
    color: "from-pink-400 to-purple-400",
    badge: "Популярно",
    size: "normal",
  },
  {
    id: 3,
    name: "Бумажная дискотека",
    description: "Море конфетти и танцы",
    price: "от 10 000",
    icon: "🎊",
    color: "from-yellow-400 to-orange-400",
    badge: "Новинка",
    size: "normal",
  },
];

export default function ShowsSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">Дополнительно</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Шоу-программы
            </h2>
            <p className="text-white/80 mt-3 max-w-2xl mx-auto">
              Добавьте яркие эмоции к празднику! Наши шоу-программы
              превратят любое мероприятие в настоящее волшебство.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Large Show Card */}
            <Link
              href="#"
              className="md:row-span-2 group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`relative h-48 bg-gradient-to-br ${shows[0].color} flex items-center justify-center`}>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{shows[0].icon}</span>
                <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {shows[0].badge}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                  {shows[0].name}
                </h4>
                <p className="text-gray-500 text-sm mb-4">{shows[0].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-purple-600">{shows[0].price} ₽</span>
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <svg className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Normal Show Cards */}
            {shows.slice(1).map((show) => (
              <Link
                key={show.id}
                href="#"
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`relative h-32 bg-gradient-to-br ${show.color} flex items-center justify-center`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{show.icon}</span>
                  <span className="absolute top-3 left-3 bg-white text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    {show.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-base mb-1 group-hover:text-purple-600 transition-colors">
                    {show.name}
                  </h4>
                  <p className="text-gray-500 text-xs mb-2">{show.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-purple-600">{show.price} ₽</span>
                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                      <svg className="w-4 h-4 text-purple-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-white/20">
              <p className="text-white font-bold mb-4">Хотите больше шоу?</p>
              <button
                type="button"
                className="px-6 py-3 bg-white text-purple-600 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm"
              >
                Все шоу-программы
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
