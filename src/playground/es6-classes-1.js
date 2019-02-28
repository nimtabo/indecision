class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
} 

class Traveler extends Person {
  constructor(name, age, location){
    super(name, age);
    this.location = location;
  }
  getGreeting(){
    let greeting = super.getGreeting();

    if (this.location){
      greeting += ` Am visiting from ${this.location}.`;
    }

    return greeting;
  }
}

const me = new Traveler('kino', 20, 'Nairobi');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting()); 