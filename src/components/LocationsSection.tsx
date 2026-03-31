const locations = [
  { icon: "🌳", name: "В парке", color: "from-green-400 to-emerald-500" },
  { icon: "🏠", name: "Дома / на даче", color: "from-amber-400 to-orange-400" },
  { icon: "🍽️", name: "В кафе", color: "from-rose-400 to-pink-500" },
  { icon: "🏫", name: "В детском саду", color: "from-blue-400 to-cyan-500" },
  { icon: "🎪", name: "В детском центре", color: "from-purple-400 to-violet-500" },
  { icon: "🏢", name: "В квартире", color: "from-teal-400 to-cyan-500" },
];

export default function LocationsSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-teal-300 via-cyan-300 to-teal-400 rounded-[2.5rem] p-8 md:p-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-yellow-500 text-2xl">✨</span>
            <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800">
              Где мы можем
              <br />
              создавать праздник
            </h2>
            <span className="text-2xl font-bold italic text-pink-500">Hey!</span>
          </div>

          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-sm">
            Организуем праздник в любом удобном для вас месте — на открытом воздухе, дома, в кафе или в детском центре.
          </p>

          {/* Centered Bento Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${location.color} rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:scale-105 hover:shadow-lg transition-all cursor-pointer min-h-[100px] w-[calc(50%-0.375rem)] md:w-[180px]`}
              >
                <span className="text-3xl mb-2">{location.icon}</span>
                <span className="font-bold text-white text-sm">{location.name}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button
              type="button"
              className="px-8 py-4 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Пригласить праздник
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
