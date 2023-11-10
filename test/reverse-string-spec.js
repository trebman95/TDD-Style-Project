const chai = require("chai");
const expect = chai.expect;

const { reverseString } = require("../problems/reverse-string");

describe("reverseString", () => {
    it("should return the reversed string", () => {
        const string1 = "fun";

        const result1 = reverseString(string1)

        expect(result1).to.equal("nuf")
    });

});
