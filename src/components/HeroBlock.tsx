export function HeroBlock() {
  return (
    <section className="px-4 py-12 md:py-20 border-b">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
          Карта HR-сервисов
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl">
          Все цифровые инструменты для сотрудников и руководителей — в одном
          месте. Найдите нужный сервис и перейдите в нужный канал: портал,
          мобильное приложение или бот.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="px-5 py-3 border border-black text-sm font-medium">
            Найти сервис
          </button>

          <button className="px-5 py-3 border border-gray-300 text-sm font-medium">
            Я новый сотрудник
          </button>
        </div>
      </div>
    </section>
  );
}
