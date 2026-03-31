import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Left - Text Content */}
            <div>
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Видео</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-2 mb-4">
                Посмотрите, как <span className="text-yellow-400">зажигательно</span>
                <br />
                проходят наши праздники
              </h2>
              <p className="text-gray-400 mb-6 text-sm">
                Откройте для себя атмосферу ярких и веселых праздников, наполненных энергией и радостью.
                Профессиональные ведущие и продуманные программы дарят каждому гостю море эмоций.
              </p>

              {/* Stats in bento style */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/10 rounded-xl p-3 text-center hover:bg-white/15 transition-colors">
                  <p className="text-2xl font-black text-yellow-400">100+</p>
                  <p className="text-xs text-gray-400">Видео</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center hover:bg-white/15 transition-colors">
                  <p className="text-2xl font-black text-yellow-400">50K+</p>
                  <p className="text-xs text-gray-400">Просмотров</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center hover:bg-white/15 transition-colors">
                  <p className="text-2xl font-black text-yellow-400">5.0</p>
                  <p className="text-xs text-gray-400">Рейтинг</p>
                </div>
              </div>

              <button
                type="button"
                className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-300 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Хочу так же
              </button>
            </div>

            {/* Right - Video */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 group cursor-pointer hover:shadow-2xl transition-shadow">
              <Image
                src="https://ext.same-assets.com/2723151962/2081029426.webp"
                alt="Video thumbnail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
                >
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              {/* Decorative badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-800">Смотреть видео</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
