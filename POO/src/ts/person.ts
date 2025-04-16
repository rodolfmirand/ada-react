class Person implements IPerson {

    name: string;
    age: number;
    height: number;
    private _cpf: string;

    constructor(name: string, age: number, height: number, cpf: string) {
        this.name = name;
        this.age = age;
        this.height = height;
        this._cpf = cpf
    }

    sleep() {
        console.log("Sleeping...")
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(newCpf: string) {
        if (newCpf.length !== 14) {
            throw new Error("CPF lenght is incorrect!");
        }

        this._cpf = newCpf;
    }
}

const person = new Person("Rodolfo", 20, 188, "111.222.333-99")
console.log(person)
console.log(person.cpf)
person.cpf = '10'