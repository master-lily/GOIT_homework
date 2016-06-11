/**
 * Created by Lily on 11.06.2016.
 */
var app = require('../js/app.js');
describe("app", function(){
    it("возведение в положительную степень pow()", function(){
        //prepare
        var result;

        //act
        result=app.pow(2,3);

        //assert
        expect(result).toEqual(8);
    });

    it("возведение в отрицательную степень pow()", function(){
        //prepare
        var result;

        //act
        result=app.pow(2,-3);

        //assert
        expect(result).toEqual(0.125);
    });

    it("возведение в ноль pow()", function(){
        //prepare
        var result;

        //act
        result=app.pow(2,0);

        //assert
        expect(result).toEqual(1);
    });
});