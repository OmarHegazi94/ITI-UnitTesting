describe("Math Utilities", function () {
    let x = 10;
    let y = 10;
    let newAdd = new MathUtilities();

    it("Should return summition of a and b", function () {
        expect(newAdd.add(x,y)).toBe(x+y);
    });

    it("Should return Subtraction of a and b", function () {
        expect(newAdd.sub(x,y)).toBe(x-y);
    });

    it("Should return Divition of a and b", function () {
        expect(newAdd.devide(x,y)).toBe(x/y);
    });

});
