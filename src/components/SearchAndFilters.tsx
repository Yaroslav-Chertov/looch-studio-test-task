import { useState } from "react";

export function SearchAndFilters() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [product, setProduct] = useState("");
  const [lifecycle, setLifecycle] = useState("");

  const resetFilters = () => {
    setSearch("");
    setRole("");
    setProduct("");
    setLifecycle("");
  };

  return (
    <section className="px-4 py-6 border-b">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Поиск и фильтры</h2>
        <input
          type="text"
          placeholder="Поиск сервиса..."
          className="px-4 py-2 border border-gray-400 rounded-md w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          <select
            className="flex-1 min-w-[150px] px-3 py-2 border border-gray-400 rounded-md"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Все роли</option>
            <option value="employee">Сотрудник</option>
            <option value="manager">Руководитель</option>
            <option value="hr">HR</option>
          </select>

          <select
            className="flex-1 min-w-[150px] px-3 py-2 border border-gray-400 rounded-md"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">Все продукты</option>
            <option value="mobile">Mobile App</option>
            <option value="web">Web Portal</option>
            <option value="bot">Bot</option>
            <option value="academy">Academy</option>
          </select>

          <select
            className="flex-1 min-w-[150px] px-3 py-2 border border-gray-400 rounded-md"
            value={lifecycle}
            onChange={(e) => setLifecycle(e.target.value)}
          >
            <option value="">Все этапы</option>
            <option value="search">Поиск</option>
            <option value="recruitment">Подбор</option>
            <option value="onboarding">Оформление</option>
            <option value="adaptation">Адаптация</option>
            <option value="work">Работа</option>
            <option value="termination">Увольнение</option>
          </select>

          <button
            className="flex-1 min-w-[150px] px-3 py-2 bg-black text-white rounded-md text-sm"
            onClick={resetFilters}
          >
            Сбросить
          </button>
        </div>
      </div>
    </section>
  );
}
