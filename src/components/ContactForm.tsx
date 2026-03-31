"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-4 bg-[#FFF8E7]" id="contacts">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-500 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="text-white">
              <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wider">Связаться</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 mt-2">
                Организуем праздник
                <br />
                <span className="text-yellow-200">вашей мечты!</span>
              </h2>
              <p className="text-white/90 mb-6">
                Оставьте заявку и мы перезвоним в течение 15 минут,
                чтобы подобрать идеальную программу.
              </p>

              {/* Benefits in bento style */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/15 rounded-xl p-3 text-center hover:bg-white/25 transition-colors cursor-default">
                  <span className="text-2xl block mb-1">✓</span>
                  <span className="text-xs">Бесплатная консультация</span>
                </div>
                <div className="bg-white/15 rounded-xl p-3 text-center hover:bg-white/25 transition-colors cursor-default">
                  <span className="text-2xl block mb-1">⚡</span>
                  <span className="text-xs">Подбор за 5 минут</span>
                </div>
                <div className="bg-white/15 rounded-xl p-3 text-center hover:bg-white/25 transition-colors cursor-default">
                  <span className="text-2xl block mb-1">💬</span>
                  <span className="text-xs">Без навязывания</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="font-bold text-lg mb-4 text-center">Оставить заявку</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all hover:border-orange-300"
                  required
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all hover:border-orange-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  Получить консультацию
                </button>
              </div>
              <label className="flex items-start gap-2 text-xs text-gray-500 mt-4">
                <input
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-0.5 accent-orange-500"
                />
                <span>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </span>
              </label>
            </form>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/5 rounded-full" />
        </div>
      </div>
    </section>
  );
}
