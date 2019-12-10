describe("Authintication", function () {
    // let USERNAME = "OMAR";
    // let PASS = "123456789";

    it("Should authinticate username and pass >= 9 length", function () {
        expect(authintication("Omar","123456789")).toBe(true);
    });

    it("Length is Greater than 9", function () {
        expect(authintication("fewgvwegwekmfkwekf","12345678987878")).toBe(false);
    });

    it("Should not authinticate user if it's a NUMBER", function () {
        expect(authintication(34343553,"35254325")).toBe(false);
    });

    it("Should not authinticate user if it's any other type than string ", function () {
        expect(authintication([1,2,4,5],452452)).toBe(false);
    });

});
