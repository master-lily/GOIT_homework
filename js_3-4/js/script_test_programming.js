/**
 * Created by Lily on 03.04.2016.
 */

var test = {
    testBody: document.body,
    testWrapper: document.createElement('div'),
    testHeader: document.createElement('h1'),
    testContent: document.createElement('content'),
    testButton: document.createElement('button'),



    createTest: function () {
        this.testWrapper.classList.add('wrapper');
        this.testHeader.classList.add('test-tittle');
        this.testButton.classList.add('btn');

        /*this.testWrapper = document.querySelector('.wrapper');* - почему с этой строчкой не работает???*/

        this.testHeader.innerHTML = 'Тест по программированию';
        this.testButton.innerHTML = 'Проверить мои результаты';

        this.testBody.appendChild(this.testWrapper);
        this.testWrapper.appendChild(this.testHeader);
        this.testWrapper.appendChild(this.testContent);
        this.testWrapper.appendChild(this.testButton);
        this.testButton.setAttribute('value', 'submit');
    },

    createTestQuestion: function () {


        var question = 1;

        for (var i = 1; i < 4; i++) {
            this.questionWrapper = document.createElement('div');
            this.questionTittle = document.createElement('h2');
            this.questionForm = document.createElement ('form');

            this.questionWrapper.classList.add('question-wrapper');
            this.questionTittle.classList.add('question-tittle');
            this.questionForm.classList.add('question-form');

            this.questionTittle.innerHTML = i + '. Вопрос №' + i;

            this.testContent.appendChild(this.questionWrapper);
            this.questionWrapper.appendChild(this.questionTittle);
            this.questionTittle.appendChild(this.questionForm);

            this.questionForm.setAttribute('action', '#');


            for (var j=1; j < 4; j++) {

                this.input = document.createElement('input');
                this.label = document.createElement('label');
                this.answerText = document.createElement('text');

                this.label.setAttribute('for', 'question' + question);
                this.input.setAttribute('type', 'checkbox');
                this.input.setAttribute( 'id', 'question' + question);

                this.answerText.innerHTML = 'Вариант ответа № ' + j;

                this.input.classList.add('input');
                this.answerText.classList.add('answer-text');
                this.questionForm.appendChild(this.input);
                this.questionForm.appendChild(this.label);
                this.label.appendChild(this.answerText);

                question++;
            }

        }

    }


};

test.createTest();
test.createTestQuestion();







/*tittle: "Вопрос",
 answer: [
 {text: "Вариант ответа №1", correct: false},
 {text: "Вариант ответа №2", correct: false},
 {text: "Вариант ответа №3", correct: false}

 ],*/



