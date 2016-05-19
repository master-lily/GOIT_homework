/**
 * Created by Lily on 12.05.2016.
 */

'use strict';

//объявляем массив объектов с вопросами и ответами
var testData = [
    {
        question: 'Вопрос №1',
        answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
        check: ['true', 'false', 'false'],
        name: 'first'
    },
    {
        question: 'Вопрос №2',
        answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
        check: ['false', 'true', 'false'],
        name: 'second'
    },
    {
        question: 'Вопрос №3',
        answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
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























//    localStorage.setItem('test', JSON.stringify(test)); //записываем объект на жесткий диск;
//
//
//    var fromLocal = localStorage.getItem('test'); // извлекаем информацию о записанном объекте;
//    var parseTest = JSON.parse(testFromLocalStorage);
//    console.log(localStorage);
//
//    var content = tmpl (html, {data: test});
//    $('body').append(content);
//
//$(function(){
//var html=('#test').html();
//$('.form-wrapper').slideDown('slow');
//    $('.btn').on('click', function() { //проверяем результаты по клику на кнопку
//        var $result = true;
//        $('.checkbox').each(function() {
//            if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
//                $result = false;
//                return false;
//            }
//        });
//        console.log($result);
//
//        $('.modal_message')[0].innerHTML = $result ? 'Ответы верные, тест пройден' : 'Ответы неверные, тест не пройден'; // записываем результат теста в модальное окно
//        $('.modal').css("display", "block").animate({opacity: 1}, 500); //показываем модальное окно
//        $('.overlay').show('slow'); //показываем фон
//
//    });
//
//    $('.modal_close').on('click', function(){
//        $('.modal').animate({opacity: 0}, 500, function() {
//            $(this).css("display", "none"); //убираем модальное окно
//            $('.overlay').hide('slow'); //убираем фон
//        });
//        $('.checkbox').each(function() { //очищаем чекбоксы
//            $(this).prop('checked', false);
//        });
//    });
//
//
//});










//"use strict";
//
//$(function() {
//
//    // Template
//
//    var html = $('#output-test').html();
//    var info = [
//
//        {
//            questionTitle: '1. Что такое HTML? ',
//            questionText: ['Язык гипертекстовой разметки', 'Язык программирования Hybrid', 'Язык программирования C#'],
//            questionAnswer: ['true', 'false', 'false']
//        },
//
//        {
//            questionTitle: '2. Как расшифровывается абревиатура CSS?',
//            questionText: ['Cascading Site Style', 'Cascading Style Sheets', 'Cascad Sheet Style'],
//            questionAnswer: ['false', 'true', 'false']
//        },
//
//        {
//            questionTitle: '3. Кто самый крутой чувак в GoIT? :-)',
//            questionText: ['Тарас Банный', 'Олег Змиюк', 'Андрей Пивоваров'],
//            questionAnswer: ['true', 'true', 'true']
//        }
//    ];
//
//    var testInLocalStorage = JSON.stringify(info);
//    localStorage.setItem('keyTest', testInLocalStorage);
//
//    var testOutFromLocalStorage = localStorage.getItem('keyTest');
//
//    var variableTest = JSON.parse(testOutFromLocalStorage);
//
//    var content = tmpl(html, {
//        data: variableTest
//    });
//
//    var answerResult = [];
//    var count = 0,  markPositive = 0, markNegative = 0;
//
//    $('body').append(content);
//
//    $('.output-wrapper').slideDown('slow');
//
//    $('.button-refer').on('click', function() {
//
//        for (var i =  0; i < variableTest.length; i++) {
//
//            for (var j =  0; j < variableTest[i].questionText.length; j++) {
//
//                if (($('#checkbox_' + i + '_' + j).prop('checked')) && (variableTest[i].questionAnswer[j] === 'true')) {
//
//                    answerResult[count] = '<p class="modal-window__output-result">' +'Ответ ' + (i + 1) + '.' + (j + 1) + ' верный' + '</p>';
//                    count++;
//                    markPositive++;
//
//                } else if (($('#checkbox_' + i + '_' + j).prop('checked')) && (variableTest[i].questionAnswer[j] === 'false')) {
//
//                    answerResult[count] = '<p class="modal-window__output-result">' + 'Ответ ' + (i + 1) + '.' + (j + 1) + ' не верный!'+ '</p>';
//                    count++;
//                    markNegative++;
//                }
//            }
//        }
//
//        for (var m = 0; m < answerResult.length; m++) {
//            console.log(answerResult[m]);
//
//        };
//        console.log('--------------');
//        console.log('Правильных ответов: ', markPositive);
//        console.log('Не правильных ответов: ', markNegative);
//
//        $('.modal-window').fadeIn('slowly');
//
//        $('div.modal-window__result-here').append(answerResult);
//
//        if (markPositive == 5) {
//            $('div.modal-window__result-here').after('<p class="modal-window__output-result-all-correct">' + 'Поздравляю! Вы ответили правильно на все вопросы!' + '</p>');
//        } else if ((markPositive >= 1) && (markPositive < 5)) {
//            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-all-correct">' + 'Вы ответили правильно не на все вопросы!' + '</p>');
//            $('p.modal-window__output-result-not-all-correct').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
//        } else if ((markPositive == 0) && (markNegative ==0))  {
//            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Вы не выбрали ни одного ответа!' + '</p>');
//            $('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
//        } else if ((markNegative > 0) && (markPositive == 0))  {
//            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Все ответы неверные!' + '</p>');
//            $('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
//        };
//
//        $('.modal-window__button-retry').on('click', function() {
//            window.location.reload();
//        });
//
//    });
//
//});






//$(function(){
//    ('.btn').on('click', function(e){
//        e.preventDefault();
//    $('.modal').css('display', 'block');
//    //({"display": "block"});
//})
//});

