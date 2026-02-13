//! ------------------------- Static properties --------------------------

/*
! Static properties and methods
- We can also assign a method to the class as a whole. Such methods are called static.
- In a class declaration, they are prepended by static keyword, like this:

We can make static methods like this-
1) By using the Static keyword before the method.
statMeth = function(){};  

*/
// First way.

class User1 {
    static userStaticMethod() {
        console.log("Hi this is a static method of user1")
    }
}

class User2 {
    userStaticMethod = function () {
        console.log("Hi this is a static method of user2")
    }
}

class User3 {
    userStaticMethod() {
        console.log("Hi this is a static method of user3")
    }
}

//? This will give typeerror: userStaticMethod is not a function.
// let obj1 = new User1();
// obj1.userStaticMethod();

// This works for now. Because the method is not created with static keyword.
let obj2 = new User2();
obj2.userStaticMethod();

let obj3 = new User3();
obj3.userStaticMethod();


//? The only way for output. We user Class name and '.' for accessing the static methods.
User1.userStaticMethod();

//? The normal methods are not available on the class directly therefore Typeerror : it is not a function.
// User2.userStaticMethod();
// User3.userStaticMethod();



/*
- The value of this in User.staticMethod() call is the class constructor User itself (the “object before dot” rule).
- Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.

For instance, we have Article objects and need a function to compare them.
A natural solution would be to add Article.compare static method.
Solution example =
*/

class Article {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }

    static compare(ArticleA, ArticleB) {
        return ArticleA.date - ArticleB.date;
    }

    static printArticle(ArticleA){
        return ` ArticleA Name : ${ArticleA.name} 
        ArticleA Date : ${ArticleA.date}`
    }
}

let articles = [
    new Article('ASUS', '2021'),
    new Article('MacBook', '2022'),
    new Article('Dell', '2019'),
    new Article('Lenovo', '2020')
];

//? Simple use of static method using Classname
console.log(Article.printArticle(articles[0]));
console.log(Article.printArticle(articles[1]));
console.log(Article.printArticle(articles[2]));
console.log(Article.printArticle(articles[3]));

//? Complex DB operation using static.
articles.sort(Article.compare);
console.log(` The oldest article is =>   ${articles[0].name}`);

// Here in above example the articles is the array of new objects. On this we run the sort method which sorts the array itself. The sort mehod is passed a callback function which is the static method of the Article class. Earlier we pass a global functions as callback function. Which automatically takes the first and next element as arguments and returns either a positive or negative value.
// This ensures that the data remains limited to the class and no external code gets access to the objects.


/*
!   Another example would be a so-called “factory” method.
Let’s say, we need multiple ways to create an article:

1 - Create by given parameters (title, date etc).
2 - Create an empty article with today’s date.
…or else somehow.

*/

// These are called factory methods because by just calling this methods using the class.factoryMethod() we can create the new instances.
//  With desired names and without using the new operator because the factory methods are known to have their own new keyword thus they return new annonymous object / class instance. 

class Newspaper {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }

    get info() {
        return `Name of Newspaper is ${this.name} and the Creation date is ${this.date}`;
    }

    // the this in static method will refer to the orignal constructor i.e Newspaper we do so because the name "Newspaper is not accessible here."

    static createNewspaper(name) {
        return new this(name, new Date());
    }
}

let lokmat = Newspaper.createNewspaper('Lokmat');
console.log(lokmat.info);

// Now every time we need to create a today’s newspaper, we can call Newspaper.createNewspaper(). Once again, that’s not a method of object, but a method of the whole class.

/* 
! Static methods are also used in database-related classes to search/save/remove entries from the database, like this:
/ assuming Article is a special class for managing articles
/ static method to remove the article by id:
~   Article.remove({id: 12345});

! Static methods aren’t available for individual objects
Static methods are callable on classes, not on individual objects.

E.g. such code won’t work:
~ lokamt.createNewspaper(); // Error: lokamt.createNewspaper is not a function

*/



/*
!                   Static properties
This is a recent addition
This is a recent addition to the language. Examples work in the recent Chrome.

- Static properties are also possible, they look like regular class properties, but prepended by static:
*/

class Article {
    static publisher = "Ilya Kantor";
}

console.log(Article.publisher); // Ilya Kantor

// That is the same as a direct assignment to Article:

Article.publishers = "Ilya Kantor";



/*
!                  Inheritance of static properties and methods

* Static properties and methods are inherited.

For instance, Animal.compare and Animal.planet in the code below are inherited and accessible as Rabbit.compare and Rabbit.planet:
*/


class Animal {
    static planet = "Earth";

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }

}

// Inherit from Animal
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

console.log(Rabbit.planet); // Earth


/*

Now when we call Rabbit.compare, the inherited Animal.compare will be called.

How does it work ? Again, using prototypes.As you might have already guessed, extends gives Rabbit the[[Prototype]] reference to Animal.

So, Rabbit extends Animal creates two[[Prototype]] references:

Rabbit function prototypally inherits from Animal function.
Rabbit.prototype prototypally inherits from Animal.prototype.
As a result, inheritance works both for regular and static methods.

!    Here, let’s check that by code:
*/

class Animal { }
class Rabbit extends Animal { }

// for statics
console.log(Rabbit.__proto__ === Animal); // true

// for regular methods
console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true
