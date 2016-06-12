'use strict';

/**
 * Created by Lily on 12.06.2016.
 */

//объявляем массив объектов с вопросами и ответами
var testData = [{
    question: '1. Какая функция задает одноразовое выполнение переданных в нее команд через промежуток времени?',
    answer: ['timeOut()', 'setTimeout();', 'setInterval();'],
    check: ['false', 'true', 'false'],
    name: 'second'
}, {
    question: '2. Назначение ключевого слова new:',
    answer: ['Создание нового объекта при помощи конструктора', ' Для объявления нового блока кода', 'Для объявления конструктора'],
    check: ['true', 'false', 'false'],
    name: 'first'
}, {
    question: '3. Какая разница между call и apply?',
    answer: ['Разницы нет', 'У apply аргументы передаются через запятую, у call - массивом', 'У call аргументы передаются через запятую, у apply - массивом'],
    check: ['false', 'false', 'true'],
    name: 'third'
}];

//записываем массив объектов с вопросами и ответами в localStorage
localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function () {

    var test = $('#test').html();

    var content = localStorage.getItem('questionAnswer');
    content = JSON.parse(content);

    var page = tmpl(test, { //формируем тест с помощью шаблонизатора
        data: content
    });

    $('.show_test').click(function () {
        // выводим тест на экран по клику на кнопку
        $('.show_test').hide();
        $('.check').css("display", "block").before(page);
    });

    $('.check').on('click', function () {
        //проверяем результаты по клику на кнопку
        var $result = true;
        $('.checkbox').each(function () {
            if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
                $result = false;
                return false;
            }
        });
        console.log($result);

        $('.modal_text')[0].innerHTML = $result ? 'Ответы верные, тест пройден' : 'Ответы неверные, тест не пройден'; // записываем результат теста в модальное окно
        $('.modal_window').css("display", "block").animate({ opacity: 1 }, 500); //показываем модальное окно
        $('.overlay').show('slow'); //показываем фон
    });

    $('.modal_button').on('click', function () {
        $('.modal_window').animate({ opacity: 0 }, 500, function () {
            $(this).css("display", "none"); //убираем модальное окно
            $('.overlay').hide('slow'); //убираем фон
        });
        $('.checkbox').each(function () {
            //очищаем чекбоксы
            $(this).prop('checked', false);
        });
    });
});
