/**
 * Created by Lily on 11.06.2016.
 */
var app = {

    pow: function pow(number, rate) {
        var result = number;

        if (rate >= 1) {
            for (var i = 1; i < rate; i++) {
                result *= number;
            }

        }

        else if (rate < 0) {
            rate = Math.abs(rate);

            for (var j = 1; j < rate; j++) {
                result *= number;
                }
                result = 1 / result;


        } else {
            result = 1;
        }
return result
    }

};

module.exports = app;