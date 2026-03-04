import { ServiceCard } from "./ServiceCard";
import type { ServiceCardProps } from "./ServiceCard";

const lifecycleSteps = [
  "search",
  "recruitment",
  "onboarding",
  "adaptation",
  "work",
  "termination",
] as const;

const lifecycleLabels: Record<(typeof lifecycleSteps)[number], string> = {
  search: "Поиск",
  recruitment: "Подбор",
  onboarding: "Пребординг",
  adaptation: "Адаптация",
  work: "Производительность",
  termination: "Увольнение",
};

const mockServicesByStep: Record<
  (typeof lifecycleSteps)[number],
  ServiceCardProps[]
> = {
  search: [
    {
      title: "Платформа вакансий",
      description: "Список актуальных вакансий и заявок",
      roles: ["employee"],
      lifecycle: "search",
      channels: ["web", "mobile"],
      status: "done",
    },
  ],
  recruitment: [
    {
      title: "Интервью-менеджер",
      description: "Организация и отслеживание интервью",
      roles: ["manager", "hr"],
      lifecycle: "recruitment",
      channels: ["web"],
      status: "in-progress",
    },
  ],
  onboarding: [
    {
      title: "Онбординг-платформа",
      description: "Автоматизация адаптации новых сотрудников",
      roles: ["hr", "manager"],
      lifecycle: "onboarding",
      channels: ["web", "mobile"],
      status: "in-progress",
    },
  ],
  adaptation: [
    {
      title: "Академия iSpring",
      description: "Обучение и развитие сотрудников",
      roles: ["employee", "hr"],
      lifecycle: "adaptation",
      channels: ["academy"],
      status: "done",
    },
  ],
  work: [
    {
      title: "Портал сотрудников",
      description: "Доступ к личному кабинету и HR-документам",
      roles: ["employee", "manager"],
      lifecycle: "work",
      channels: ["web", "mobile"],
      status: "done",
    },
  ],
  termination: [
    {
      title: "Оформление увольнения",
      description: "Инструкции и документы",
      roles: ["employee", "hr"],
      lifecycle: "termination",
      channels: ["web"],
      status: "planned",
    },
  ],
};

export function LifecycleNav() {
  return (
    <section className="px-4 pr-0 py-6 border-b bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Маршрут сотрудника</h2>

        <div className="overflow-x-auto px-0 py-2">
          <div className="flex gap-4">
            {lifecycleSteps.map((step) => (
              <div key={step} className="flex-none w-64 snap-start">
                <h3 className="font-medium mb-2">{lifecycleLabels[step]}</h3>
                <div className="flex flex-col gap-2">
                  {mockServicesByStep[step].map((service) => (
                    <ServiceCard key={service.title} {...service} />
                  ))}
                </div>
              </div>
            ))}
            <div className="flex-none w-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
