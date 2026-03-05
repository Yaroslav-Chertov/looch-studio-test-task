import { useState } from "react";
import type { FC } from "react";

type Stage = {
  name: string;
  year: number;
  employee: string[];
  hr: string[];
  manager: string[];
};

const years = [2024, 2025, 2026, 2027, 2028];
const currentYear = 2026;

const roadmap: Stage[] = [
  {
    name: "Поиск и подбор",
    year: 2024,
    employee: ["Карьерный сайт", "Просмотр вакансий", "Отклик на вакансии"],
    hr: ["Хантфлоу", "Создание заявки на подбор", "Скрининг резюме"],
    manager: ["Согласование заявки на подбор", "Участие в интервью"],
  },
  {
    name: "Пребординг",
    year: 2025,
    employee: ["ЛК кандидата", "Загрузка документов", "Анкета СБ"],
    hr: ["Проверка анкеты", "Организация интервью"],
    manager: ["Финальное интервью", "Подтверждение кандидата"],
  },
  {
    name: "Оформление",
    year: 2026,
    employee: [
      "Получение оффера",
      "Медицинский осмотр",
      "Подписание документов",
    ],
    hr: ["Формирование оффера", "Согласование оффера"],
    manager: ["Подтверждение условий"],
  },
  {
    name: "Адаптация",
    year: 2027,
    employee: ["HR-портал", "Обучение в Академии", "Знакомство с командой"],
    hr: ["Контроль адаптации", "Опросы новичков"],
    manager: ["План адаптации", "Регулярные встречи"],
  },
  {
    name: "Производительность",
    year: 2028,
    employee: ["Портал сотрудника", "Заявки HR сервисов"],
    hr: ["Оценка 360", "HR аналитика"],
    manager: ["Оценка KPI", "Развитие команды"],
  },
  {
    name: "Увольнение",
    year: 2028,
    employee: ["Заявление на увольнение", "Передача дел"],
    hr: ["Оформление увольнения", "Exit-интервью"],
    manager: ["Передача задач", "Закрытие позиции"],
  },
];

export const RoadmapBlock: FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const progress = (years.indexOf(currentYear) / (years.length - 1)) * 100;

  const totalServices = roadmap.reduce(
    (acc, s) => acc + s.employee.length + s.hr.length + s.manager.length,
    0,
  );

  const doneServices = roadmap
    .filter((s) => s.year <= currentYear)
    .reduce(
      (acc, s) => acc + s.employee.length + s.hr.length + s.manager.length,
      0,
    );

  const activeData = activeStage !== null ? roadmap[activeStage] : null;

  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="md:text-center">
          <h2 className="text-3xl font-semibold">
            Схема развития всех сервисов до 2028 года
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl md:mx-auto">
            Экосистема HR-сервисов компании: путь сотрудника от поиска вакансии
            до работы в компании и дальнейшего развития.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-semibold">{doneServices}</div>
            <div className="text-sm text-gray-500">реализовано сервисов</div>
          </div>

          <div>
            <div className="text-3xl font-semibold">
              {totalServices - doneServices}
            </div>
            <div className="text-sm text-gray-500">в разработке</div>
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="absolute top-3 left-0 w-full h-[2px] bg-gray-200" />

          <div
            className="absolute top-3 left-0 h-[2px] bg-black transition-all"
            style={{ width: `${progress}%` }}
          />

          <div className="relative grid grid-cols-5 text-center text-sm">
            {years.map((year) => {
              const isDone = year <= currentYear;

              return (
                <div key={year} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${
                      isDone
                        ? "bg-black border-black"
                        : "bg-white border-gray-300"
                    }`}
                  />

                  <span
                    className={
                      isDone ? "text-black font-medium" : "text-gray-400"
                    }
                  >
                    {year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 items-start">
          {roadmap.map((stage, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStage(idx)}
              className="border border-gray-300 rounded-lg p-5 cursor-pointer hover:shadow-md transition bg-white"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{stage.name}</h3>
                <span className="text-xs text-gray-500">{stage.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeData && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          onClick={() => setActiveStage(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-2xl rounded-xl p-6 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold">{activeData.name}</h3>
                <div className="text-sm text-gray-500 mt-1">
                  Этап HR-экосистемы · {activeData.year}
                </div>
              </div>

              <button
                onClick={() => setActiveStage(null)}
                className="text-gray-400 hover:text-black text-xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">Сотрудник</div>
                <ul className="space-y-1 text-gray-600">
                  {activeData.employee.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-semibold mb-2">HR</div>
                <ul className="space-y-1 text-gray-600">
                  {activeData.hr.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-semibold mb-2">Руководитель</div>
                <ul className="space-y-1 text-gray-600">
                  {activeData.manager.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
