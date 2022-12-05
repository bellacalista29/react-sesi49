
export class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

// class Employee extends Person {
//     constructor(name,title) {
//         super(name)
//         this.title = title
//     }
//     getTitleAndName() {
//         //cara 1
//         // return [this.title, this.name].join(" ")
//         //cara 2
//         return this.title + " " + this.name
//     }
// }

// let fulan = new Employee("Fulan", "Mr")
// console.log(fulan.getTitleAndName())

export class Employee extends Person {
    getEmployeeName() {
        return this.name
    }
    doWork() {
        return "I am working"
    }
}

