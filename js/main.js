$(document).ready(function () {
  var currentFloor = 2;                           /*Переменная где хранится текущий этаж*/
  var floorPath = $(".home-image path");          /*Каждый отдельный этаж в SVG*/
  var counterUp = $(".counter-arrow-up");         /* Кнопка увеличения этажа*/
  var counterDown = $(".counter-down");           /* Кнопка уменьшения этажа*/

    floorPath.on("mouseover", function () {      // Функция при наведении мышкой на этаж.
    floorPath.removeClass("current-floor");     // Очищаем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // Получаем занчение текущего этажа
    $(".counter").text(currentFloor);         // Записываеам значение этажа в счётчик справа
  });

  counterUp.on("click", function() {       // Отслеживаем клик по кнопке вверх
   if(currentFloor < 18) {                // Проверяем значение этажа, оно не должно быть больше 18
    currentFloor++;                      // Прибавляем один этаж.
    usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false}) 
    $(".counter").text(usCurrentFloor);           // Записываеам значение этажа в счётчик справа
    floorPath.removeClass("current-floor");      // Удаляем активные классы
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");     // Подсвечиваем этаж
   }
  });

  counterDown.on("click", function(){     // Отслеживаем клик по кнопке вниз
    if(currentFloor > 2 )                // Значение этажа не должно быть меньше 2-ух.
    currentFloor--;                     // Отнимаем значение
    usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false}) // Форматируем переменную с этажом, чтобы было 01 а не 1
    $(".counter").text(usCurrentFloor);             // Записываем значение этажа в счётчик справа
    floorPath.removeClass("current-floor");        // Удаляем активный класс
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");     // Подсвечиваем этаж
  })
});
