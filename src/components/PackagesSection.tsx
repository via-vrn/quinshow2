const packages = [
  {
    name: "Базовый",
    icon: "⭐",
    color: "from-gray-100 to-gray-50",
    features: [
      "1 аниматор на 1.5 часа",
      "Авторский сценарий",
      "Музыкальное сопровождение",
      "Аквагрим для всех гостей",
      "Фигурки из шаров",
      "Вынос торта",
    ],
    oldPrice: "7 000",
    newPrice: "4 500",
    discount: "-35%",
  },
  {
    name: "Оптимальный",
    icon: "🌟",
    color: "from-orange-100 to-amber-50",
    popular: true,
    features: [
      "2 аниматора на 2 часа",
      "Расширенный сценарий",
      "Профессиональная аппаратура",
      "Аквагрим и тату",
      "Фигурки из шаров",
      "Мыльное шоу",
      "Вынос торта",
      "Подарки гостям",
    ],
    oldPrice: "14 000",
    newPrice: "9 900",
    discount: "-30%",
  },
  {
    name: "Премиум",
    icon: "👑",
    color: "from-amber-100 to-yellow-50",
    features: [
      "2 аниматора на 3 часа",
      "VIP-сценарий под ребёнка",
      "Профессиональный звук и свет",
      "Аквагрим, тату, причёски",
      "Шар-сюрприз",
      "Научное шоу",
      "Бумажная дискотека",
      "Фотозона с реквизитом",
      "Вынос торта",
      "Памятные подарки",
    ],
    oldPrice: "25 000",
    newPrice: "17 900",
    discount: "-28%",
  },
];

export default function PackagesSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]" id="prices">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500 rounded-[2.5rem] p-8 md:p-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
              Специальные предложения
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-4">
            Готовые пакеты услуг
          </h2>
          <p className="text-center text-white/90 mb-10 max-w-2xl mx-auto">
            Выберите подходящий пакет или соберите свою программу.
            Мы подстроимся под любой бюджет и пожелания!
          </p>

          {/* Packages Bento Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all ${
                  pkg.popular ? "ring-4 ring-yellow-400 md:-translate-y-4" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Популярный выбор
                  </div>
                )}

                <div className="text-center mb-4">
                  <span className="text-5xl">{pkg.icon}</span>
                  <h3 className="text-xl font-black mt-3">{pkg.name}</h3>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {pkg.discount}
                    </span>
                    <div className="text-center">
                      <span className="text-2xl font-black">{pkg.newPrice} ₽</span>
                      <span className="text-gray-400 text-sm line-through ml-2">
                        {pkg.oldPrice} ₽
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`w-full py-3 rounded-full font-bold transition-all ${
                      pkg.popular
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg"
                        : "border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    Выбрать
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8">
            <p className="text-white/80 text-sm mb-3">Не нашли подходящий пакет?</p>
            <button
              type="button"
              className="px-8 py-4 bg-white text-pink-500 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Собрать свою программу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
