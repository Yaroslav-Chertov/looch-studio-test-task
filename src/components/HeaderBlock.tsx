import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export function HeaderBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold uppercase">
          Ареал
        </a>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <nav className="flex gap-6">
            <a href="#services" className="text-gray-700 hover:text-black">
              Сервисы
            </a>
            <a href="#roadmap" className="text-gray-700 hover:text-black">
              Маршрут сотрудника
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-black">
              Контакты
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <button
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 z-50 shadow-lg">
          <nav className="flex flex-col gap-2 px-4 py-2">
            <a href="#services" className="text-gray-700 py-2">
              Сервисы
            </a>
            <a href="#roadmap" className="text-gray-700 py-2">
              Маршрут сотрудника
            </a>
            <a href="#contacts" className="text-gray-700 py-2">
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
