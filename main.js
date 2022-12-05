import {Employee, Person} from "./index.js";

const mark = new Employee("Mark")
console.log(mark.getName())

const fulan = new Employee("Fulan")
console.log(fulan.getEmployeeName())
console.log(fulan.doWork())