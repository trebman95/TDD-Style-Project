class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.isValid = false;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths() {
        const possiblyValid1 = this.side1 + this.side2
        const possiblyValid2 = this.side1 + this.side3
        const possiblyValid3 = this.side2 + this.side3

        if (possiblyValid1 > this.side3 && possiblyValid2 > this.side2 && possiblyValid3 > this.side1) {
            return true
        }

        return false
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(...triangles) {
        return triangles.filter(triangle => triangle.hasValidSideLengths())
    };
    isScalene() {
        return false;
    };
    isIsosceles() {
        return false;
    };
}
class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidScalene = false;
        this.isValidTriangle = this.hasValidSideLengths();
    }
    isScalene() {
        if (this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3) {
            return true
        }
        return false
    }
    validate() {
        super.validate();
        this.isValidScalene = this.isScalene();
    }

}

class Isosceles extends Scalene {
    // code here
}

module.exports = {
    Triangle: Triangle,
    Scalene: Scalene,
    Isosceles: Isosceles
}
