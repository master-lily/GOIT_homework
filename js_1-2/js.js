/**
 * Created by Lily on 02.04.2016.
 */
function pow() {
    var number = prompt('Введите число');
    var rate = prompt('Введите степень');
    var result = number;


    if (rate >= 1) {
    for (var i = 1; i < rate; i++) {
        result *= number;
    }

    }

     else if(rate < 0) {
        rate = Math.abs(rate);

        for ( var j = 1;  j < rate; j++) {
            result *= number;

        }
        result = 1/result;

} else {
        result = 1;
    }
    console.log(result);
}

pow();


function findName() {
    var arrNames = [];
    arrNames.length = 5;
    var name;
    for ( var i = 0; i <  arrNames.length; i++) {
        arrNames[i] = prompt('Введите имя', '');

    }
    console.log('Введенные имена ' + arrNames);

    name = prompt('Введите имя ', '');
    console.log('введенное имя ' + name);
    for ( i = 0; i < arrNames.length; i++) {

        if (name == arrNames[i]) {
            var answer = (name + ' вы успешно зашли');
        } else {

           answer = ('Такого имени нет в массиве');
        }
    }
alert(answer);

}
findName();

