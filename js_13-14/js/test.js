/**
 * Created by Lily on 12.05.2016.
 */

'use strict';

//объявляем массив объектов с вопросами и ответами
var testData = [
    {
        question: '1. Какая функция задает одноразовое выполнение переданных в нее команд через промежуток времени?',
        answer: [
            'timeOut()',
            'setTimeout();',
            'setInterval();'
        ],
        check: [ 'false', 'true', 'false'],
        name: 'second'
    },
    {
        question: '2. Назначение ключевого слова new:',
        answer: [
            'Создание нового объекта при помощи конструктора',
            ' Для объявления нового блока кода',
            'Для объявления конструктора'
        ],
        check:  ['true', 'false', 'false'],
        name: 'first'
    },
    {
        question: '3. Какая разница между call и apply?',
        answer: [
            'Разницы нет',
            'У apply аргументы передаются через запятую, у call - массивом',
            'У call аргументы передаются через запятую, у apply - массивом'
        ],
        check: ['false', 'false', 'true'],
        name: 'third'
    }
];

//записываем массив объектов с вопросами и ответами в localStorage
localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function() {

    var test = $('#test').html();

    var content = localStorage.getItem('questionAnswer');
    content = JSON.parse(content);

    var page = tmpl(test, { //формируем тест с помощью шаблонизатора
        data: content
    });

    $('.show_test').click(function() { // выводим тест на экран по клику на кнопку
        $('.show_test').hide();
        $('.check').css("display", "block").before(page);
    });

    $('.check').on('click', function() { //проверяем результаты по клику на кнопку
        var $result = true;
        $('.checkbox').each(function() {
            if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
                $result = false;
                return false;
            }
        });
        console.log($result);

        $('.modal_text')[0].innerHTML = $result ? 'Ответы верные, тест пройден' : 'Ответы неверные, тест не пройден'; // записываем результат теста в модальное окно
        $('.modal_window').css("display", "block").animate({opacity: 1}, 500); //показываем модальное окно
        $('.overlay').show('slow'); //показываем фон

    });

    $('.modal_button').on('click', function(){
        $('.modal_window').animate({opacity: 0}, 500, function() {
            $(this).css("display", "none"); //убираем модальное окно
            $('.overlay').hide('slow'); //убираем фон
        });
        $('.checkbox').each(function() { //очищаем чекбоксы
            $(this).prop('checked', false);
        });
    });

});




//http://ru.stackoverflow.com/questions/11840/%D0%9A%D0%B0%D0%BA-%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B8%D1%82%D1%8C-%D0%BF%D0%BE%D0%BB%D1%8F-%D1%84%D0%BE%D1%80%D0%BC%D1%8B-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0%D0%BC%D0%B8-jquery -очистка формы

//http://www.quirksmode.org/js/forms.html#sradio

//https://manual.limesurvey.org/Workarounds:_Manipulating_a_survey_at_runtime_using_Javascript
