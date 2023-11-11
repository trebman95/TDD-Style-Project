const chai = require("chai");
const expect = chai.expect;

const { Triangle, Scalene, Isosceles } = require("../problems/triangle");

describe("Triangle", () => {
    describe("Triangle constructor function", () => {
        it("should create an instance with side1, side2, and side3 properties set properly", () => {
            const triangleConstruct = new Triangle(5, 12, 13);

            expect(triangleConstruct).to.have.property('side1');
            expect(triangleConstruct).to.have.property('side2');
            expect(triangleConstruct).to.have.property('side3')
            expect(triangleConstruct.side1).to.equal(5);
            expect(triangleConstruct.side2).to.equal(12);
            expect(triangleConstruct.side3).to.equal(13);
        });
    })
    describe("getPerimeter", () => {
        it("should return the sum of the perimeter for the Triangle instance", () => {
            const triangle = new Triangle(5, 12, 13);
            const perimeterSum = triangle.getPerimeter();

            expect(perimeterSum).to.equal(30)
        })
    })
    describe("hasValidSideLengths", () => {
        it("should return true if it is a valid triangle", () => {
            const triangle = new Triangle(5, 12, 13);
            const validSideLengths = triangle.hasValidSideLengths();

            expect(validSideLengths).to.be.true
        })
        it("should return false if it is NOT a valid triangle", () => {
            const triangle = new Triangle(1, 2, 5);
            const invalidSideLengths = triangle.hasValidSideLengths();

            expect(invalidSideLengths).to.be.false
        })
    })
    describe("validate", () => {
        it("should return true if it is a valid triangle", () => {
            const triangle = new Triangle(5, 12, 13);
            triangle.validate();

            expect(triangle).to.have.property('isValid')
            expect(triangle.isValid).to.be.true
        })
        it("should return false if it is an invalid triangle", () => {
            const triangle = new Triangle(1, 2, 5);
            triangle.validate();

            expect(triangle).to.have.property('isValid')
            expect(triangle.isValid).to.be.false
        })
    })
    describe("getValidTriangles", () => {
        it("should return all of the instances that are valid triangles", () => {
            const triangles = [
                new Triangle(5, 12, 13),
                new Triangle(1, 2, 5),
                new Triangle(3, 4, 5)
            ]

            const validTriangles = Triangle.getValidTriangles(...triangles);
            expect(validTriangles).to.have.lengthOf(2);

        })
    })
});

describe("Scalene", () => {
    describe("Scalene constructor function", () => {
        it("should create an instance with side1, side2, and side3 properties set properly", () => {
            const scaleneConstruct = new Scalene(5, 12, 13);

            expect(scaleneConstruct).to.have.property('side1');
            expect(scaleneConstruct).to.have.property('side2');
            expect(scaleneConstruct).to.have.property('side3')
            expect(scaleneConstruct.side1).to.equal(5);
            expect(scaleneConstruct.side2).to.equal(12);
            expect(scaleneConstruct.side3).to.equal(13);
        });
        it("should have an isValidTriangle property derived from the hasValidSideLengths method", () => {
            const scalene = new Scalene(5, 12, 13);
            const hasValidSideLengths = scalene.hasValidSideLengths();

            expect(scalene).to.have.property('isValidTriangle');
            expect(scalene.isValidTriangle).to.equal(hasValidSideLengths);
        })
    })
    describe("isScalene", () => {
        it("should return true if it is a valid scalene triangle", () => {
            const scalene = new Scalene(5, 12, 13);
            const validScalene = scalene.isScalene();

            expect(validScalene).to.be.true;
        })
        it("should return false if is an invalid scalene triangle", () => {

            const scalene = new Scalene(5, 12, 12);
            const invalidScalene = scalene.isScalene();

            expect(invalidScalene).to.be.false;
        })

    });
    describe("validate", () => {
        it("should set isValidScalene as true if it is a valid scalene", () => {
            const scalene = new Scalene(5, 12, 13);
            scalene.validate();

            expect(scalene.isValidScalene).to.be.true;
        })
        it("should set isValidScalene as false if it is an invalid scalene", () => {
            const scalene = new Scalene(5, 12, 12);
            scalene.validate();

            expect(scalene.isValidScalene).to.be.false;
        })
    })

});

describe("Isosceles", () => {
    describe('Isosceles constructor function', () => {
        it('should create an instance with side1, side2, and side3 properties set properly', () => {
            const isoscelesConstruct = new Isosceles(5, 5, 8);

            expect(isoscelesConstruct).to.have.property('side1');
            expect(isoscelesConstruct).to.have.property('side2');
            expect(isoscelesConstruct).to.have.property('side3');
            expect(isoscelesConstruct.side1).to.equal(5);
            expect(isoscelesConstruct.side2).to.equal(5);
            expect(isoscelesConstruct.side3).to.equal(8);
        });
        it("should have an isValidIsosceles property derived from the hasValidSideLengths method", () => {
            const isosceles = new Isosceles(5, 5, 8);
            const hasValidSideLengths = isosceles.hasValidSideLengths();

            expect(isosceles).to.have.property('isValidIsosceles');
            expect(isosceles.isValidIsosceles).to.equal(hasValidSideLengths);
        })
    })
    describe("isIsosceles", () => {
        it("should return true if it is a valid isosceles triangle", () => {
            const isosceles = new Isosceles(5, 5, 8);
            const realIsosceles = isosceles.isIsosceles();

            expect(realIsosceles).to.be.true;
        })
        it("should return false if is an invalid isosceles triangle", () => {

            const isosceles = new Isosceles(3, 4, 5);
            const invalidIsosceles = isosceles.isIsosceles();

            expect(invalidIsosceles).to.be.false;
        })
    })
    describe("validate", () => {
        it("should set isValidIsosceles as true if it is a valid isosceles triangle", () => {
            const isosceles = new Isosceles(5, 5, 8);
            isosceles.validate();

            expect(isosceles.isValidIsosceles).to.be.true;
        })
        it("should set isValidIsosceles as false if it is an invalid isosceles triangle", () => {
            const isosceles = new Isosceles(3, 4, 5);
            isosceles.validate();

            expect(isosceles.isValidIsosceles).to.be.false;
        })
    })
});
