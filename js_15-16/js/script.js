/**
 * Created by Lily on 22.05.2016.
 */

(function() {
    var cx = '017270073310002898913:lawqytdb75y';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();




function Human(){
   this.name = 'Kate';
    this.age = 27;
    this.gender = 'female';
    this.height = 180;
    this.weight = 55;
}

function Worker() {
    this.placeOfWork = 'S&P';
    this.salary = 3500;
    this.work = function () {
        alert('method: work');

    };
}


     function Student() {
        this.placeOfStudy = 'Oxford';
        this.scolarship = 400;
        var seeFilms = function() {
            alert('method: watch films');
        }
    }

Worker.prototype = new Human();
Student.prototype = new Human();


var Worker1 = new Worker();


console.log('Worker1.name', Worker1.name);
console.log('Worker1.age', Worker1.age);
console.log('Worker1.gender', Worker1.gender);
console.log('Worker1.height', Worker1.height);
console.log('Worker1.weight', Worker1.weight);
console.log('Worker1.placeOfWork', Worker1.placeOfWork);
console.log('Worker1.salary', Worker1.salary);


var Student1 = new Student();
console.log('Student1.name', Student1.name);
console.log('Student1.age', Student1.age);
console.log('Student1.gender', Student1.gender);
console.log('Student1.height', Student1.height);
console.log('Student1.weight', Student1.weight);
console.log('Student1.placeOfStudy', Student1.placeOfStudy);
console.log('Student1.scolarship', Student1.scolarship);


