class Teacher extends Person {
    private _code: string;

    constructor(name: string, age: number, height: number, cpf: string, code: string){
        super(name, age, height, cpf);
        this._code = code;
    }

    educate() {
        console.log("Educating");
    }
}