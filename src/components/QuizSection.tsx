"use client";

import { useState } from "react";

const questions = [
  {
    title: "Какой праздник планируете?",
    options: ["День рождения", "Выпускной", "Утренник", "Другое событие"],
  },
  {
    title: "Сколько будет гостей?",
    options: ["До 10 детей", "10-20 детей", "20-30 детей", "Более 30"],
  },
  {
    title: "Возраст именинника?",
    options: ["2-4 года", "5-7 лет", "8-10 лет", "11+ лет"],
  },
  {
    title: "Где пройдёт праздник?",
    options: ["Дома/квартира", "Кафе/ресторан", "Детский центр", "На улице"],
  },
];

export default function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-4 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bento container */}
        <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-orange-400 rounded-[2.5rem] p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Left - Bonuses */}
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Квиз</span>
                <h3 className="text-2xl md:text-3xl font-black mb-2 mt-2">
                  Ответьте на 4 вопроса
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  и получите <span className="font-bold">персональное предложение</span>
                </p>

                {/* Benefits in bento */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                    <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🎁</span>
                    <span className="font-medium">Скидка 10% на первый заказ</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                    <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">📋</span>
                    <span className="font-medium">Чек-лист подготовки к празднику</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                    <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">💡</span>
                    <span className="font-medium">Идеи для тематики праздника</span>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full" />
            </div>

            {/* Right - Quiz */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-500">Вопрос {currentStep + 1} из {questions.length}</p>
                <div className="flex gap-1">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-1 rounded-full transition-colors ${
                        idx <= currentStep ? "bg-gradient-to-r from-pink-500 to-orange-500" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {questions[currentStep].title}
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswer(option)}
                    className={`p-4 rounded-xl border-2 font-semibold text-left transition-all hover:-translate-y-1 ${
                      answers[currentStep] === option
                        ? "border-pink-500 bg-pink-50 text-pink-700 shadow-md"
                        : "border-gray-200 hover:border-pink-300 text-gray-700 hover:shadow-md"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 rounded-full border-2 border-gray-200 font-semibold disabled:opacity-30 hover:border-gray-300 hover:-translate-y-1 transition-all"
                >
                  Назад
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!answers[currentStep]}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold disabled:opacity-50 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {currentStep === questions.length - 1 ? "Получить предложение" : "Далее"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
