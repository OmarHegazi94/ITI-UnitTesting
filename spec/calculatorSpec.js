describe("Calculator", function () {

    let newCalc = new Calculator();

    it("Addition", function () {
        expect(newCalc.addition(5,5)).toBe(5+5);
        expect(newCalc.addition("fewfewg",5)).toBe(false);
        expect(newCalc.addition(5,[3,2,4,5])).toBe(false);
    });

    it("Subtraction", function () {
        expect(newCalc.subtract(5,5)).toBe(5-5);
        expect(newCalc.subtract("fewfewg",5)).toBe(false);
        expect(newCalc.subtract(5,[3,2,4,5])).toBe(false);
    });

    it("Multiply", function () {
        expect(newCalc.multiply(5,5)).toBe(5*5);
        expect(newCalc.multiply("fewfewg",5)).toBe(false);
        expect(newCalc.multiply(5,[3,2,4,5])).toBe(false);
    });

    it("Devition", function () {
        expect(newCalc.devide(5,5)).toBe(5/5);
        expect(newCalc.devide("fewfewg",5)).toBe(false);
        expect(newCalc.devide(5,[3,2,4,5])).toBe(false);
    });

});
