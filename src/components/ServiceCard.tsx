import type { FC } from "react";

export type Role = "employee" | "manager" | "hr";
export type Lifecycle =
  | "search"
  | "recruitment"
  | "onboarding"
  | "adaptation"
  | "work"
  | "termination";
export type Channel = "mobile" | "web" | "bot" | "academy";

export type ServiceCardProps = {
  title: string;
  description: string;
  roles: Role[];
  lifecycle: Lifecycle;
  channels: Channel[];
  status: "done" | "in-progress" | "planned";
};

const roleLabels: Record<Role, string> = {
  employee: "Сотрудник",
  manager: "Руководитель",
  hr: "HR",
};

const lifecycleLabels: Record<Lifecycle, string> = {
  search: "Вакансии",
  recruitment: "Подбор",
  onboarding: "Онбординг",
  adaptation: "Адаптация",
  work: "Работа",
  termination: "Увольнение",
};

const channelLabels: Record<Channel, string> = {
  mobile: "Мобильное",
  web: "Веб",
  bot: "Бот",
  academy: "Академия",
};

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  roles,
  lifecycle,
  channels,
  status,
}) => {
  const statusColor =
    status === "done"
      ? "bg-green-500"
      : status === "in-progress"
        ? "bg-blue-500"
        : "bg-red-500";

  return (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-2 bg-white">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span
          className={`px-2 py-1 text-xs text-white rounded whitespace-nowrap ${statusColor}`}
        >
          {status === "done"
            ? "Реализовано"
            : status === "in-progress"
              ? "В работе"
              : "Планируется"}
        </span>
      </div>

      <p className="text-sm text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-1">
        {roles.map((role) => (
          <span
            key={role}
            className="text-xs px-2 py-1 border border-gray-400 rounded"
          >
            {roleLabels[role]}
          </span>
        ))}
        <span className="text-xs px-2 py-1 border border-gray-400 rounded">
          {lifecycleLabels[lifecycle]}
        </span>
      </div>

      <div className="flex gap-2 mt-2">
        {channels.map((channel) => (
          <span
            key={channel}
            className="text-xs px-2 py-1 border border-gray-400 rounded"
          >
            {channelLabels[channel]}
          </span>
        ))}
      </div>
    </div>
  );
};
