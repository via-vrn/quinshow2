export default function Marquee() {
  const items = [
    "РАДУГА ШОУ",
    "ЯРКИЕ ПРАЗДНИКИ",
    "СЧАСТЛИВЫЕ ДЕТИ",
    "РАДУГА ШОУ",
    "ЯРКИЕ ПРАЗДНИКИ",
    "СЧАСТЛИВЫЕ ДЕТИ",
  ];

  return (
    <section className="py-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-6 text-xl font-black text-white flex items-center gap-4"
          >
            {item}
            <span className="text-yellow-200">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
