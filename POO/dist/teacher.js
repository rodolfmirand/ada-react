"use strict";
class Teacher extends Person {
    constructor(name, age, height, cpf, code) {
        super(name, age, height, cpf);
        this._code = code;
    }
    educate() {
        console.log("Educating");
    }
}
