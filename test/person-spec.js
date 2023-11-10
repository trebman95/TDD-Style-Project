const chai = require("chai");
const expect = chai.expect;

const Person = require("../problems/person");

describe("Person", () => {
    describe("Person constructor function", () => {
        it("should create an instance with name and age properties set properly", () => {
            const personConstruct = new Person("James", 50);

            expect(personConstruct).to.have.property('name');
            expect(personConstruct).to.have.property('age');
            expect(personConstruct.name).to.equal("James");
            expect(personConstruct.age).to.equal(50);
        });
    })

    describe("sayHello function", () => {
        it("should return a string of Person instance's name and a greeting message", () => {
            const newPerson = new Person("James", 50);
            const greetingMessage = newPerson.sayHello();

            expect(typeof greetingMessage).to.equal('string');
            expect(greetingMessage).to.contain(newPerson.name);
            expect(greetingMessage).to.match('Hello');
        });

    });
    describe("visit function", () => {
        it("should return a string stating that this instance visited in the passed-in person instance", () => {
            const newPerson1 = new Person("James", 50);
            const newPerson2 = new Person("Michael", 25);
            const visitInstance = newPerson1.visit(newPerson2);

            expect(typeof visitInstance).to.equal('string');
            expect(visitInstance).to.contain(newPerson1.name);
            expect(visitInstance).to.contain(newPerson2.name);
            expect(visitInstance).to.equal(`${newPerson1.name} visited ${newPerson2.name}`);

        });

    });
    describe("switchVisit function", () => {
        it("should invoke the visit function of the parameter, passing in the current instance as the argument.", () => {
            const newPerson1 = new Person("James", 50);
            const newPerson2 = new Person("Michael", 25);
            const visitInstance = newPerson1.switchVisit(newPerson2);

            expect(typeof visitInstance).to.equal('string');
            expect(visitInstance).to.contain(newPerson1.name);
            expect(visitInstance).to.contain(newPerson2.name);
            expect(visitInstance).to.equal(`${newPerson1.name} visited ${newPerson2.name}`);
        })

    });
    describe("update function", () => {
        context("if the argument is invalid", () => {
            it("should throw a TypeError if the argument is not an object", () => {
                const person = new Person("James", 50);

                expect(() => person.update("invalid")).to.throw(TypeError, "Type Error! Has to be an object")
                expect(() => person.update(null)).to.throw(TypeError, "Type Error! Has to be an object")
                expect(() => person.update(42)).to.throw(TypeError, "Type Error! Has to be an object")
                expect(() => person.update(undefined)).to.throw(TypeError, "Type Error! Has to be an object")
            });
            it("should throw a TypeError if the object does not have a name and an age property", () => {
                const person = new Person("James", 50);

                expect(() => person.update({ name: "Jane" })).to.throw(TypeError, "Object does not have name and age property");
                expect(() => person.update({ age: 54 })).to.throw(TypeError, "Object does not have name and age property");
                expect(() => person.update({})).to.throw(TypeError, "Object does not have name and age property");
            });
        })
        context("if the argument is valid", () => {
            it("should update to match the passed-in object's value if the incoming argument is an object", () => {
                const person = new Person("James", 50);

                person.update({ name: "James", age: 50 });

                expect(person.name).to.equal("James");
                expect(person.age).to.equal(50);
            });
        });

    });
    describe("tryUpdate function", () => {
        context("if update is not successfully invoked", () => {
            it("Should not thrown an error, instead return false", () => {
                const person = new Person("James", 50);
                const result = person.tryUpdate("invalid");


                expect(result).to.equal(false);
                expect(person.name).to.equal("James");
                expect(person.age).to.equal(50);
            })
        })
        context("if update is successfully invoked", () => {
            it("Should return true", () => {
                const person = new Person("James", 50);
                const result = person.tryUpdate({ name: "James", age: 55 });

                expect(result).to.equal(true);
                expect(person.name).to.equal("James");
                expect(person.age).to.equal(50);
            })
        })


    });
    describe("greetAll function", () => {
        it("should should return an array of greeting messages from each person in the array", () => {
            const person1 = new Person("James", 50);
            const person2 = new Person("Michael", 25);
            const person3 = new Person("Prince", 30);

            const personArray = [person1, person2, person3];
            const greetings = Person.greetAll(personArray);

            expect(Array.isArray(greetings)).to.equal(true)
            expect(greetings.length).to.equal(personArray.length)
        })

    });
});
