const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree", () => {
    it("should return the number 3", () => {
        const num1 = 3;

        const actual1 = returnsThree(num1);

        expect(actual1).to.equal(num1)

    });
})

describe("reciprocal", () => {
    context("if the argument is invalid", () => {
        it("should throw a RangeError if the argument is less than 1", () => {
            const num1 = -2;
            const actual1 = () => reciprocal(num1);
            const num2 = -4;
            const actual2 = () => reciprocal(num2);

            expect(actual1).to.throw(RangeError, "Range Error! Needs to be between 1 to 1000000")
            expect(actual2).to.throw(RangeError, "Range Error! Needs to be between 1 to 1000000")
        });
        it("should throw a RangeError if the argument is more than 1000000", () => {
            const num1 = 1000001;
            const actual1 = () => reciprocal(num1);
            const num2 = 1000004;
            const actual2 = () => reciprocal(num2);

            expect(actual1).to.throw(RangeError, "Range Error! Needs to be between 1 to 1000000")
            expect(actual2).to.throw(RangeError, "Range Error! Needs to be between 1 to 1000000")
        });
    })
    context("if the argument is valid", () => {
        it("should intake a number and then return the reciprocal of that number", () => {
            const num1 = 5;
            const actual1 = reciprocal(num1);
            const num2 = 10;
            const actual2 = reciprocal(num2);
            const num3 = 20;
            const actual3 = reciprocal(num3);

            expect(actual1).to.equal(0.2)
            expect(actual2).to.equal(0.1)
            expect(actual3).to.equal(0.05)
        });
    })

})
