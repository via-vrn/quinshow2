import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Антон",
    role: "Операционный директор",
    image: "https://ext.same-assets.com/2723151962/3604810372.webp",
    color: "bg-gradient-to-br from-yellow-300 to-amber-300",
    accent: "bg-violet-400",
  },
  {
    name: "Наталия",
    role: "Креативный директор",
    image: "https://ext.same-assets.com/2723151962/2951944871.webp",
    color: "bg-gradient-to-br from-pink-100 to-rose-100",
    accent: "bg-pink-300",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title at top */}
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          команда волшебников
        </h2>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left - Large Text Block (spans 2 rows on desktop) */}
          <div className="md:row-span-2 bg-gradient-to-br from-violet-400 via-purple-400 to-violet-500 rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-6">
                Устроим <span className="italic text-yellow-300">сюрприз</span>,
                <br />
                от которого в <span className="italic text-yellow-300">восторге</span>
                <br />
                останется каждый!
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 max-w-md">
                В нашем арсенале множество оригинальных программ
                с выступлениями артистов, трюкачей, фокусников,
                ошеломляющие представления, интересные игры, квесты
                и мастер-классы.
              </p>
              <p className="text-white/90 text-sm md:text-base max-w-md">
                Все шоу интерактивные – полная свобода для выброса
                энергии, эмоций в кругу друзей и любимых персонажей.
              </p>
            </div>

            {/* Video Button */}
            <div className="relative z-10 mt-6">
              <button
                type="button"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full pl-1 pr-5 py-1 hover:bg-white/20 transition-colors"
              >
                <span className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-white font-semibold text-sm">
                  Посмотрите
                  <br />
                  <span className="font-bold">видео о нас</span>
                </span>
              </button>
            </div>

            {/* Decorative lightning bolt */}
            <div className="absolute bottom-8 right-8 text-white/30 text-6xl font-black">
              ⚡
            </div>
          </div>

          {/* Right Top - Антон */}
          <div className={`${team[0].color} rounded-3xl p-6 relative overflow-hidden min-h-[220px]`}>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-gray-900">{team[0].name}</h3>
              <p className="text-gray-700 text-sm mb-4">{team[0].role}</p>

              {/* Social Links */}
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="absolute bottom-0 right-0 w-40 h-52">
              {/* Accent circle behind photo */}
              <div className={`absolute top-4 right-4 w-32 h-32 ${team[0].accent} rounded-full`} />
              <Image
                src={team[0].image}
                alt={team[0].name}
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-20 text-pink-400 text-2xl">✨</div>
          </div>

          {/* Right Bottom - Наталия */}
          <div className={`${team[1].color} rounded-3xl p-6 relative overflow-hidden min-h-[220px]`}>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-gray-900">{team[1].name}</h3>
              <p className="text-gray-700 text-sm mb-4">{team[1].role}</p>

              {/* Social Links */}
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="absolute bottom-0 right-0 w-40 h-52">
              {/* Accent circles behind photo */}
              <div className={`absolute top-8 right-8 w-28 h-28 ${team[1].accent} rounded-full opacity-60`} />
              <div className="absolute top-2 right-2 w-10 h-10 bg-pink-200 rounded-full" />
              <Image
                src={team[1].image}
                alt={team[1].name}
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Decorative flower */}
            <div className="absolute top-6 right-24 text-pink-400 text-xl">✿</div>
          </div>
        </div>
      </div>
    </section>
  );
}
