class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello, my name is " + this.name);
  }
}

const adam = new Person("Adam Ondra", 29);
console.log(adam.greet());
