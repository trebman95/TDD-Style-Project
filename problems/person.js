class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return this.visit(otherPerson)
  }

  update(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error("Type Error! Has to be an object")
    } else if (!('name' in obj) || !('age' in obj)) {
      throw new Error("Object does not have name and age property")
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(obj) {
    const greetings = [];

    if (!Array.isArray(obj)) {
      throw new Error("Must be an array of Person instances")
    }
    for (const person of obj) {
      if (!(person instanceof Person)) {
        throw new Error("Array must contain only Person instances")
      }
      greetings.push(person.sayHello())
    }
    return greetings
  }
}


module.exports = Person;
