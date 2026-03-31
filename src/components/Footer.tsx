import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-orange-400 to-amber-500">
      <div className="max-w-6xl mx-auto px-4">
        {/* Quality Guarantee Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 mb-10 text-white hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-5xl">🛡️</div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-black">
                Гарантируем <span className="text-yellow-300">качество</span> каждого праздника!
              </h3>
              <p className="text-sm opacity-90 mt-1">
                Если что-то пойдёт не так — вернём деньги без лишних вопросов
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl font-black bg-gradient-to-br from-pink-500 via-rose-400 to-orange-400 text-white shadow-lg">
                Q
              </div>
              <div>
                <span className="font-black text-xl text-white">КВИНН</span>
                <span className="font-black text-xl text-gray-800 ml-1">ШОУ</span>
              </div>
            </div>
            <p className="text-gray-800 text-sm mb-4 max-w-xs">
              Создаём яркие детские праздники с 2017 года. Более 5000 счастливых семей доверили нам свои торжества.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all text-xl">
                📱
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all text-xl">
                💬
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all text-xl">
                📧
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Контакты</h4>
            <Link href="tel:+79507600027" className="text-xl font-black text-white hover:underline block mb-2">
              +7 (950) 760-00-27
            </Link>
            <p className="text-sm text-gray-800">Ежедневно с 9:00 до 21:00</p>
            <p className="text-sm text-gray-800 mt-2">Москва и область</p>
            <button
              type="button"
              className="mt-4 px-5 py-2 bg-white rounded-full font-bold text-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              Заказать звонок
            </button>
          </div>

          {/* Rating */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Наш рейтинг</h4>
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-black">4.9</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500">На основе 847 отзывов</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-2 gap-4 mt-10 pt-6 border-t border-orange-300/50">
          <div className="flex flex-wrap gap-4 text-sm text-gray-800">
            <Link href="#" className="hover:underline">О компании</Link>
            <Link href="#" className="hover:underline">Вакансии</Link>
            <Link href="#" className="hover:underline">Блог</Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm md:justify-end text-gray-800">
            <Link href="#" className="hover:underline">Политика конфиденциальности</Link>
            <Link href="#" className="hover:underline">Оферта</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-orange-300/50 text-center text-sm text-gray-700">
          <p>© 2017–2026 КВИНН ШОУ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
