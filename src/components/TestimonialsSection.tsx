const testimonials = [
  {
    id: 1,
    name: "Анна М.",
    text: "Заказывали аниматоров на 5-летие дочери. Фея Винкс была просто потрясающая! Дети не отходили от неё ни на минуту.",
    rating: 5,
    event: "День рождения, 5 лет",
  },
  {
    id: 2,
    name: "Дмитрий К.",
    text: "Супергерои на празднике сына — это было что-то невероятное! Активные игры, конкурсы, все дети были в восторге.",
    rating: 5,
    event: "День рождения, 7 лет",
  },
  {
    id: 3,
    name: "Елена В.",
    text: "Научное шоу превзошло все ожидания. Дети смотрели с открытыми ртами на эксперименты. Рекомендую всем!",
    rating: 5,
    event: "Выпускной в детском саду",
  },
  {
    id: 4,
    name: "Мария С.",
    text: "Пиратский квест был организован на высшем уровне! Дети искали сокровища, разгадывали загадки. Восторг!",
    rating: 5,
    event: "День рождения, 8 лет",
  },
  {
    id: 5,
    name: "Ольга П.",
    text: "Заказывали принцессу Эльзу. Дочь до сих пор вспоминает этот праздник как самый волшебный день в жизни!",
    rating: 5,
    event: "День рождения, 6 лет",
  },
  {
    id: 6,
    name: "Алексей Т.",
    text: "Бумажная дискотека — это нечто! Дети визжали от восторга, родители тоже участвовали. Очень круто!",
    rating: 5,
    event: "Корпоратив для детей",
  },
  {
    id: 7,
    name: "Наталья Р.",
    text: "Спасибо за чудесный выпускной! Всё было продумано до мелочей, дети и родители в восторге.",
    rating: 5,
    event: "Выпускной, 4 класс",
  },
  {
    id: 8,
    name: "Игорь Л.",
    text: "Мыльное шоу покорило всех гостей! Огромные пузыри, дети внутри пузырей — незабываемо!",
    rating: 5,
    event: "День рождения, 4 года",
  },
];

const testimonials2 = [
  {
    id: 9,
    name: "Светлана Ж.",
    text: "Человек-паук на празднике сына — мечта сбылась! Аниматор был просто супер, все игры продуманы.",
    rating: 5,
    event: "День рождения, 6 лет",
  },
  {
    id: 10,
    name: "Павел Н.",
    text: "Заказывали научное шоу на день рождения. Дети были в восторге от опытов, особенно от жидкого азота!",
    rating: 5,
    event: "День рождения, 9 лет",
  },
  {
    id: 11,
    name: "Екатерина Б.",
    text: "Спасибо огромное за праздник! Аниматоры приехали вовремя, всё было организовано идеально.",
    rating: 5,
    event: "День рождения, 5 лет",
  },
  {
    id: 12,
    name: "Виктория А.",
    text: "Единорожка была волшебной! Дочь и её подружки были счастливы. Обязательно закажем ещё!",
    rating: 5,
    event: "День рождения, 7 лет",
  },
  {
    id: 13,
    name: "Андрей М.",
    text: "Квест по мотивам Minecraft — сын был в восторге! Всё было продумано до мелочей.",
    rating: 5,
    event: "День рождения, 10 лет",
  },
  {
    id: 14,
    name: "Юлия Ф.",
    text: "Фокусник поразил всех! Даже взрослые не могли понять, как он это делает. Браво!",
    rating: 5,
    event: "Семейный праздник",
  },
  {
    id: 15,
    name: "Роман К.",
    text: "Отмечали день рождения в парке. Аниматоры справились отлично, несмотря на погоду!",
    rating: 5,
    event: "День рождения, 8 лет",
  },
  {
    id: 16,
    name: "Татьяна Д.",
    text: "Детективный квест был супер! Дети чувствовали себя настоящими сыщиками. Спасибо!",
    rating: 5,
    event: "День рождения, 11 лет",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow mx-2">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.event}</p>
        </div>
        <div className="ml-auto flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        "{testimonial.text}"
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]" id="reviews">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-orange-400 via-amber-400 to-orange-500 rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Отзывы</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 text-white">
              Что говорят наши клиенты
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full px-8 py-4 shadow-lg flex items-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-black text-orange-500">4.9</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">на основе 847 отзывов</p>
              </div>
            </div>
          </div>

          {/* Marquee Row 1 - scrolls left */}
          <div className="relative mb-4 overflow-hidden">
            <div className="flex animate-marquee">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Marquee Row 2 - scrolls right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {[...testimonials2, ...testimonials2].map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button
              type="button"
              className="px-8 py-4 bg-white text-orange-500 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Читать все отзывы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
