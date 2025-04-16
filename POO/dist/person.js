"use strict";
class Person {
    constructor(name, age, height, cpf) {
        this.name = name;
        this.age = age;
        this.height = height;
        this._cpf = cpf;
    }
    sleep() {
        console.log("Sleeping...");
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error("CPF lenght is incorrect!");
        }
        this._cpf = newCpf;
    }
}
const person = new Person("Rodolfo", 20, 188, "111.222.333-99");
console.log(person);
console.log(person.cpf);
person.cpf = '10';
