let person = {
    firstName:'Scott',
    lastName: 'Sutherland',
    age: 23
}

// console.log(person.firstName)
// console.log(person['lastName'])


let meal = {
    appetizer: 'Bread with olive oil and balsamic vinegar',
    entree: 'Chicken Tikki Massala',
    dessert: 'Brownie',
    drink: 'Dr. Pepper'
}

// let motorcycle = {
//     name: 'Yamaha',
//     manufacturer: {
//         locations: [
//             {
//                 city: 'Milwaukee'
//             }
//         ]
//     }
// }

// // console.log(motorcycle.manufacturer.locations[0].city)
// let {city} = motorcycle.manufacturer.locations[0]
// console.log(city)

// let dessert = meal.dessert
let {dessert} = meal
const {appetizer, entree} = meal

// const scottDrink = meal.drink
const {drink: scottDrink} = meal

// const myAppetizer = meal.appetizer
// const myEntree = meal.entree
// const myDessert = meal.dessert
// const myDrink = meal.drink

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(myAppetizer, myEntree, myDessert, myDrink)


// for(let key in person){
//     console.log(typeof key)
//     console.log(person[key])
// }

person.job = "Insect labeling"
person['pets'] = ['duck', 'shetland']

// person.pets.splice(0, 1)
delete person.pets

// console.log(person)


// -------------Classes-----------------


class Dog {
    constructor(dogName, dogBreed, dogAge){
        // "this" represents the object that will be created by the Dog class
        // this = {}
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;

        this.lovesBones = true
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}.`)
    }
}

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, dogTrainingLevel){
        super(dogName, dogBreed, dogAge)

        this.trainingLevel = dogTrainingLevel
    }

    levelUp(num){
        this.trainingLevel += num
    }

    greeting(){
        // super.greeting()
        console.log("I'm a puppy!")
    }
}

let lassie = new Dog('Lassie', 'collie', 18)
let beethoven = new Dog('Beethoven', 'St. Bernard', 12)

let chief = new Puppy('Chief', 'lab', 1, 0)

chief.levelUp(5)
console.log(chief)
chief.greeting()
// lassie.greeting()
// beethoven.greeting()

// for(let key in lassie){
//     console.log(lassie[key])
// }
// console.log(lassie)
// console.log(beethoven)