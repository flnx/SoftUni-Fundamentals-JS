function cats(catsData) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];

  for (let el of catsData) {
    let [catName, catAge] = el.split(' ');
    let currentCat = new Cat(catName, catAge);
    cats.push(currentCat);
  }

  for (let myCat of cats) {
    myCat.meow();
  }
}
cats(['Mellow 2', 'Tom 5']);

// Mellow, age 2 says Meow
// Tom, age 5 says Meow
