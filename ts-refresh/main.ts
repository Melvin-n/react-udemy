//let and const

//mutable
let myName: string = 'melvin'
//immutable
const myAge: number = 30


//regular func
function add(num1, num2: number): number {
    return num1 + num2
}
//arrow func
const subtract = (num1, num2: number): number => {
    return num1 - num2
}
//import
import TPerson from './person.js'

let me: TPerson = {
    name: 'melvin',
    age: 30
    }

//extends
interface TEmployee extends TPerson {
    job: string
}

//classes
class Worker {
    role: string
    name: string

    constructor(role, name: string) {
        this.role = role
        this.name = name
    }

    about() {
        return `Name: ${this.name}, Role: ${this.role}`
    }
}

//spread & rest
//spread: split up array elements OR object properties
const letters = ['i', 'g', 'h']
const moreLetters = [...letters, 'l', 'm', 'n']

const max: TPerson = {
    name: 'Max',
    age: 3
}

const maxWithJob: TEmployee = {
    ...max,
    job: 'dev'
}

//rest: merge a list of function arguments into an array
//takes
const filter = (...args: number[]): number[] => {
    return args.filter(element => element === 1)
}

console.log(filter(1, 2, 3, 4, 1))





//classes

