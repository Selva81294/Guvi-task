//Write a “person” class to hold all the details.
/* class Person {

    name;
    age;
    Experience;
  
    constructor(name,age,Experience) {
      this.name = name;
      this.age = age;
      this.Experience = Experience;
    }
  
    Selfintro() {
      console.log(`Hi! I'm ${this.name}`);
      console.log(`My age is ${this.age}`);
      console.log(`My Experience is ${this.Experience}`);
    }
  
  }
  Person = new Person("Selva",28,6);
  Person.Selfintro(); */

  //write a class to calculate uber price
   class Uber {
    distance;
    price = this.distance*10;

    constructor(distance) {
      this.distance = distance;
      this.price = this.distance*10;
    }
Uberprice(){
  console.log(`The price for ${this.distance}KM is Rs.${this.price}`)
}
   }
Uber = new Uber(35);
Uber.Uberprice();