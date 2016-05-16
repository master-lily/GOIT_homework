/**
 * Created by Lily on 03.04.2016.
 */

var test = {
    testBody: document.body,
    testWrapper: document.createElement('div'),
    testHeader: document.createElement('h1'),
    testContent: document.createElement('content'),
    questionForm: document.createElement ('form'),
    testButton: document.createElement('button'),



    createTest: function () {
        this.testWrapper.classList.add('wrapper');
        this.testHeader.classList.add('test-tittle');
        this.testButton.classList.add('btn');

        this.testHeader.innerHTML = 'Тест по программированию';
        this.testButton.innerHTML = 'Проверить мои результаты';

        this.testBody.appendChild(this.testWrapper);
        this.testWrapper.appendChild(this.testHeader);
        this.testWrapper.appendChild(this.testContent);
        this.testContent.appendChild(this.questionForm);
        this.testWrapper.appendChild(this.testButton);


        this.questionForm.setAttribute('action', '#');
        this.testButton.setAttribute('value', 'submit');


    },

    createTestQuestion: function () {


        var question = 1;

        for (var i = 1; i < 4; i++) {
            this.questionWrapper = document.createElement('div');
            this.questionTittle = document.createElement('h2');


            this.questionWrapper.classList.add('question-wrapper');
            this.questionTittle.classList.add('question-tittle');
            this.questionTittle.innerHTML = i + '. Вопрос №' + i;

            this.questionForm.appendChild(this.questionTittle);
            this.questionForm.appendChild(this.questionWrapper);




            for (var j=1; j < 4; j++) {
                this.label = document.createElement('label');
                this.input = document.createElement('input');

                this.label.setAttribute('for', 'question' + question);
                this.input.setAttribute('type', 'checkbox');
                this.input.setAttribute( 'id', 'question' + question);

                this.label.innerHTML = 'Вариант ответа № ' + j;

                this.input.classList.add('input');


                this.questionWrapper.appendChild(this.label);
                this.questionWrapper.appendChild(this.input);


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



