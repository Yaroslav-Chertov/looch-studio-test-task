export function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold">Контакты</h4>
          <span>+7 (495) 424 95 21</span>
          <span>
            123112, Москва, Пресненская наб., дом 10, 34 этаж, помещение І
          </span>
          <a href="mailto:info@areal.ru" className="hover:text-white">
            info@areal.ru
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold">Быстрые ссылки</h4>
          <a href="#services" className="hover:text-white">
            Сервисы
          </a>
          <a href="#onboarding" className="hover:text-white">
            Онбординг
          </a>
          <a href="#roadmap" className="hover:text-white">
            Дорожная карта
          </a>
          <a href="#contacts" className="hover:text-white">
            Контакты
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold">Правовая информация</h4>
          <a href="#" className="hover:text-white">
            Политика персональных данных
          </a>
          <a href="#" className="hover:text-white">
            Условия использования
          </a>
          <span>© 2026, Ареал</span>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        Сайт создан для внутреннего использования сотрудников компании.
      </div>
    </footer>
  );
}
