import Image from "next/image";
import Link from "next/link";

const additions = [
  {
    id: 1,
    name: "Оформление праздника",
    image: "https://ext.same-assets.com/2723151962/1669664347.webp",
    price: "от 5 000",
    size: "large",
  },
  {
    id: 2,
    name: "Фотограф",
    image: "https://ext.same-assets.com/2723151962/3786108188.webp",
    price: "от 5 000",
    size: "normal",
  },
  {
    id: 3,
    name: "Шар-сюрприз",
    image: "https://ext.same-assets.com/2723151962/3043102959.webp",
    price: "",
    size: "normal",
  },
  {
    id: 4,
    name: "Видеограф",
    image: "https://ext.same-assets.com/2723151962/1600744419.webp",
    price: "от 12 000",
    size: "normal",
  },
];

export default function AdditionsSection() {
  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-violet-300 via-purple-300 to-violet-400 rounded-[2.5rem] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-4 text-gray-800">
            Добавки к вашему празднику
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-sm">
            Добавьте особенные детали к вашему празднику, чтобы сделать его ещё ярче и незабываемее!
          </p>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Card */}
            <Link
              href="#"
              className="md:col-span-2 md:row-span-2 group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative aspect-square md:aspect-auto md:h-full">
                <Image
                  src={additions[0].image}
                  alt={additions[0].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-bold text-lg text-white mb-1">{additions[0].name}</h4>
                  {additions[0].price && (
                    <span className="text-white/90 text-sm">{additions[0].price} ₽</span>
                  )}
                </div>
              </div>
            </Link>

            {/* Normal Cards */}
            {additions.slice(1).map((item) => (
              <Link
                key={item.id}
                href="#"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm text-gray-800 group-hover:text-purple-600 transition-colors">
                    {item.name}
                  </h4>
                  {item.price && (
                    <span className="text-gray-500 text-xs">{item.price} ₽</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button
              type="button"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 hover:shadow-lg transition-all"
            >
              Все добавки
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
