import type { FC } from "react";

export type Role = "employee" | "manager" | "hr";
export type Lifecycle =
  | "search"
  | "recruitment"
  | "onboarding"
  | "adaptation"
  | "work"
  | "termination";

export type ServiceCardProps = {
  title: string;
  description: string;
  roles: Role[];
  lifecycle: Lifecycle;
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

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  roles,
  lifecycle,
  status,
}) => {
  const statusColor =
    status === "done"
      ? "bg-green-500"
      : status === "in-progress"
        ? "bg-blue-500"
        : "bg-red-500";

  return (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col bg-white h-full">
      <div className="bg-gray-200 rounded-md h-32 flex items-center justify-center mb-2 flex-shrink-0">
        <span className="text-gray-500 text-sm">Изображение</span>
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div>
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

          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>

        <div className="flex flex-wrap gap-1 mt-2">
          {roles.map((role) => (
            <span
              key={role}
              className="text-[10px] px-1 py-0.5 border border-gray-300 rounded text-gray-500 bg-gray-50"
            >
              {roleLabels[role]}
            </span>
          ))}
          <span className="text-[10px] px-1 py-0.5 border border-gray-300 rounded text-gray-500 bg-gray-50">
            {lifecycleLabels[lifecycle]}
          </span>
        </div>
      </div>
    </div>
  );
};
