import Image from "next/image";

const galleryImages = [
  "https://ext.same-assets.com/2723151962/2536022291.jpeg",
  "https://ext.same-assets.com/2723151962/4255121335.jpeg",
  "https://ext.same-assets.com/2723151962/3074328344.jpeg",
  "https://ext.same-assets.com/2723151962/4267756666.jpeg",
];

export default function GallerySection() {
  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-amber-300 via-yellow-300 to-amber-400 rounded-[2.5rem] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-gray-800">
            Волшебство, которое мы
            <br />
            создали для наших клиентов
          </h2>

          {/* Bento Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Large image */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer aspect-square">
              <Image
                src={galleryImages[0]}
                alt="Gallery image 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Small images */}
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center text-center">
              <p className="font-bold text-gray-800 mb-3 text-sm">Хотите так же?</p>
              <button
                type="button"
                className="px-4 py-2 bg-gray-900 text-white rounded-full font-bold text-xs hover:bg-gray-800 transition-all"
              >
                Заказать
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              type="button"
              className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Хочу также
            </button>
            <button
              type="button"
              className="px-8 py-4 border-2 border-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Смотреть все работы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
