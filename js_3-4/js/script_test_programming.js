/**
 * Created by Lily on 03.04.2016.
 */

var test = {
    testWrapper: document.createElement('div'),
    testHeader: document.createElement('h1'),
    testContent: document.createElement('content'),
    testButton: document.createElement('button'),

    createTest: function () {
        this.testWrapper.classList.add('wrapper');
        this.testHeader.classList.add('test-tittle');
        this.testButton.classList.add('btn');

        this.testWrapper = document.querySelector('.wrapper');

        this.testWrapper.appendChild(this.testHeader);
        this.testWrapper.appendChild(this.testContent);
        this.testWrapper.appendChild(this.testButton);
        this.testButton.setAttribute('value', 'submit');
        this.testButton.innerHTML = 'Проверить мои результаты';

        this.testHeader.innerHTML = 'Тест по программированию';
    },

    createTestQuestion: function () {
        this.questionTittle = document.createElement('h2');
        this.questionCheckbox = document.createElement('checkbox');
        this.answerText = document.createElement('text');

        this.questionTittle.classList.add('question-tittle');
        this.questionCheckbox.classList.add('checkboxes');
        this.answerText.classList.add('answer-text');

        var question = 1;

        for (var i = 1; i < 3; i++) {
            this.testContent.appendChild(this.questionTittle);
            this.questionTittle.innerHTML = i + 'Вопрос №' + i;

           this.questionTittle.appendChild(this.questionCheckbox);

            this.questionCheckbox.appendChild(this.answerText);

            this.answerText.innerHTML = 'Вариант ответа №' + i;

            question++;

    }

    }

};

test.createTest();
test.createTestQuestion();


