export function NewEmployeeBlock() {
  return (
    <section id="new-employee" className="px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-start md:items-center text-left md:text-center">
        <h2 className="text-2xl font-semibold leading-tight">
          Для новых сотрудников
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl">
          Здесь вы найдете ответы на частые вопросы, полезные контакты коллег,
          инструкции, документы и все, что необходимо для быстрого старта в
          компании.
        </p>

        <a
          href="#"
          className="mt-6 px-5 py-3 bg-black text-white text-sm font-medium sm:w-48 hover:bg-gray-800 transition inline-block text-center rounded-md w-full"
        >
          Подробнее
        </a>
      </div>
    </section>
  );
}
