export function FeedbackBlock() {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-stretch">
        <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow-md flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Ваша обратная связь</h2>
          <p className="text-gray-600 mb-6">
            Расскажите нам, что вы думаете или задайте вопрос. Мы ответим в
            кратчайшие сроки.
          </p>

          <form className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Имя"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Сообщение"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
            />
            <button
              type="submit"
              className="mt-6 px-5 py-3 bg-black text-white text-sm font-medium sm:w-48 hover:bg-gray-800 transition inline-block text-center rounded-md"
            >
              Отправить
            </button>
          </form>
        </div>

        <div className="hidden md:flex flex-1 bg-gray-200 rounded-xl flex items-center justify-center min-h-[300px]">
          <span className="text-gray-500">Здесь может быть иллюстрация</span>
        </div>
      </div>
    </section>
  );
}
