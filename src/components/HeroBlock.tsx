export function HeroBlock() {
  return (
    <section className="px-4 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Карта HR-сервисов
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl">
          Все цифровые инструменты для сотрудников и руководителей — в одном
          месте. Найдите нужный сервис и перейдите в нужный канал: портал,
          мобильное приложение или бот.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="px-5 py-3 bg-black text-white text-sm font-medium sm:w-48 hover:bg-gray-800 transition rounded-md">
            Найти сервис
          </button>

          <a
            href="#new-employee"
            className="px-5 py-3 border border-black bg-white text-black text-sm font-medium sm:w-48 hover:bg-gray-100 transition inline-block text-center rounded-md"
          >
            Я новый сотрудник
          </a>
        </div>
      </div>
    </section>
  );
}
