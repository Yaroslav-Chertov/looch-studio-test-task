import { ServiceCard } from "./ServiceCard";
import type { ServiceCardProps } from "./ServiceCard";

const lifecycleSteps = [
  "search",
  "recruitment",
  "onboarding",
  "adaptation",
  "termination",
] as const;

const lifecycleLabels: Record<(typeof lifecycleSteps)[number], string> = {
  search: "Вакансии",
  recruitment: "Подбор",
  onboarding: "Пребординг",
  adaptation: "Адаптация",
  termination: "Документы",
};

const mockServicesByStep: ServiceCardProps[] = [
  {
    title: "Платформа вакансий",
    description: "Список актуальных вакансий и заявок",
    roles: ["employee"],
    lifecycle: "search",
    channels: [],
    status: "done",
  },
  {
    title: "Интервью-менеджер",
    description: "Организация и отслеживание интервью",
    roles: ["manager", "hr"],
    lifecycle: "recruitment",
    channels: [],
    status: "in-progress",
  },
  {
    title: "Онбординг",
    description: "Автоматизация адаптации новых сотрудников",
    roles: ["hr", "manager"],
    lifecycle: "onboarding",
    channels: [],
    status: "in-progress",
  },
  {
    title: "Академия iSpring",
    description: "Обучение и развитие сотрудников",
    roles: ["employee", "hr"],
    lifecycle: "adaptation",
    channels: [],
    status: "done",
  },
  {
    title: "Портал сотрудников",
    description: "Доступ к личному кабинету и HR-документам",
    roles: ["employee", "manager"],
    lifecycle: "work",
    channels: [],
    status: "done",
  },
  {
    title: "Оформление и увольнения",
    description: "Инструкции и все основные документы",
    roles: ["employee", "hr"],
    lifecycle: "termination",
    channels: [],
    status: "planned",
  },
];

export function LifecycleNav() {
  return (
    <section className="px-4 pr-0 py-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Маршрут сотрудника</h2>

        <div className="overflow-x-auto px-0 py-2">
          <div className="flex gap-4">
            {lifecycleSteps.map((step) => {
              const servicesForStep = mockServicesByStep.filter(
                (s) => s.lifecycle === step,
              );

              return (
                <div
                  key={step}
                  className="flex-none w-64 snap-start flex flex-col"
                >
                  <h3 className="font-medium mb-2">{lifecycleLabels[step]}</h3>

                  <div className="flex flex-col gap-2 flex-1">
                    {servicesForStep.map((service) => (
                      <div className="flex-1" key={service.title}>
                        <ServiceCard {...service} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="flex-none w-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
