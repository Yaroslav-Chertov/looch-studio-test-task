import { ServiceCard } from "./ServiceCard";
import type { ServiceCardProps } from "./ServiceCard";

const mockServices: ServiceCardProps[] = [
  {
    title: "Портал сотрудников",
    description: "Доступ к личному кабинету и HR-документам",
    roles: ["employee", "manager"],
    lifecycle: "work",
    channels: ["web", "mobile"],
    status: "done",
  },
  {
    title: "Телеграм-бот Ареал",
    description: "Быстрый доступ к HR-сервисам через чат",
    roles: ["employee"],
    lifecycle: "onboarding",
    channels: ["bot"],
    status: "done",
  },
  {
    title: "Академия iSpring",
    description: "Обучение и развитие сотрудников",
    roles: ["employee", "hr"],
    lifecycle: "adaptation",
    channels: ["academy"],
    status: "done",
  },
  {
    title: "Онбординг-платформа",
    description: "Автоматизация адаптации новых сотрудников",
    roles: ["hr", "manager"],
    lifecycle: "onboarding",
    channels: ["web", "mobile"],
    status: "in-progress",
  },
  {
    title: "Портал льгот и бонусов",
    description: "Информация о корпоративных привилегиях и программах",
    roles: ["employee"],
    lifecycle: "work",
    channels: ["web"],
    status: "planned",
  },
  {
    title: "Спорт/челленджи",
    description: "Мотивация и здоровье сотрудников",
    roles: ["employee"],
    lifecycle: "work",
    channels: ["mobile"],
    status: "in-progress",
  },
  {
    title: "Онлайн-библиотека МИФ",
    description: "Образовательные материалы для сотрудников",
    roles: ["employee", "hr"],
    lifecycle: "adaptation",
    channels: ["web", "academy"],
    status: "planned",
  },
];

export function ServicesSection() {
  const visibleServices = mockServices.slice(0, 6);

  return (
    <section className="px-4 py-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Сервисы</h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {visibleServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Смотреть все
          </button>
        </div>
      </div>
    </section>
  );
}
