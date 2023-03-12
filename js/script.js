// Выбор элементов DOM
const widgetItem = document.querySelector("#item-widget");
const monthItem = document.querySelector("#item-month");
const gratitudeItem = document.querySelector("#item-gratitude");

// Объект с заменяемым текстом
const REPLACEMENT_TEXT = {
   widget: {
      default: "30 виджетов",
      changeValue: "виджеты",
   },
   month: { default: "Месяц аmoCRM", changeValue: "35 дней" },
   gratitude: {
      default: "Благодарность клиентов",
      changeValue: "Благодарственные письма",
   },
};

// Точка экрана для изменения текста
const pointScreen = 1310;

// Изменение текста при загрузке страницы
if (screen.width > pointScreen) {
   widgetItem.innerHTML = REPLACEMENT_TEXT.widget.changeValue;
   monthItem.innerHTML = REPLACEMENT_TEXT.month.changeValue;
   gratitudeItem.innerHTML = REPLACEMENT_TEXT.gratitude.changeValue;
}

// Изменение текста при изменении размеров экрана
window.onresize = function () {
   if (screen.width > pointScreen) {
      widgetItem.innerHTML = REPLACEMENT_TEXT.widget.changeValue;
      monthItem.innerHTML = REPLACEMENT_TEXT.month.changeValue;
      gratitudeItem.innerHTML = REPLACEMENT_TEXT.gratitude.changeValue;
   } else {
      widgetItem.innerHTML = REPLACEMENT_TEXT.widget.default;
      monthItem.innerHTML = REPLACEMENT_TEXT.month.default;
      gratitudeItem.innerHTML = REPLACEMENT_TEXT.gratitude.default;
   }
};