export function ServicesGrid() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="md:col-span-2 bg-gray-100 p-6 rounded-xl flex flex-col justify-between hover:shadow-md transition">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Наше мобильное приложение
            </h3>
            <p className="text-gray-600">
              Пользуйтесь сервисами компании прямо со смартфона. Быстрый доступ,
              удобный интерфейс и все основные функции в одном приложении.
            </p>
          </div>

          <a
            href="#"
            className="mt-4 w-fit px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
          >
            Перейти
          </a>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl flex flex-col justify-between hover:shadow-md transition">
          <div>
            <h3 className="text-xl font-semibold mb-2">Telegram-бот</h3>
            <p className="text-gray-600">
              Получайте доступ к HR-сервисам прямо в Telegram. Быстрые ответы,
              уведомления и полезные функции в одном месте.
            </p>
          </div>

          <a
            href="#"
            className="mt-4 w-fit px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
          >
            Перейти
          </a>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl flex flex-col justify-between hover:shadow-md transition">
          <div>
            <h3 className="text-xl font-semibold mb-2">Корпоративный портал</h3>
            <p className="text-gray-600">
              Центральная точка доступа к основным HR-сервисам, новостям и
              внутренним инструментам компании.
            </p>
          </div>

          <a
            href="#"
            className="mt-4 w-fit px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
          >
            Перейти
          </a>
        </div>

        <div className="md:col-span-2 bg-gray-100 p-6 rounded-xl flex flex-col justify-between hover:shadow-md transition">
          <div>
            <h3 className="text-xl font-semibold mb-2">HR-Академия</h3>
            <p className="text-gray-600">
              Обучающие курсы, материалы и программы развития для сотрудников.
              Повышайте квалификацию и развивайте карьеру вместе с нами.
            </p>
          </div>

          <a
            href="#"
            className="mt-4 w-fit px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
          >
            Перейти
          </a>
        </div>
      </div>
    </section>
  );
}
