export function HeroBlock() {
  return (
    <section className="px-4 py-12 md:py-20 border-b bg-white">
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
          <button className="px-5 py-3 border border-black text-sm font-medium sm:w-48">
            Найти сервис
          </button>

          <button className="px-5 py-3 bg-black text-white text-sm font-medium sm:w-48">
            Я новый сотрудник
          </button>
        </div>
      </div>
    </section>
  );
}
