/*
Example 1: User Object with Age Validation
This example demonstrates a User object where we use getters and setters to ensure the age of the user is always within a valid range.
*/

function User(name, age) {
    this.name = name;
    
    let _age = age;
  
    this.getAge = function() {
      return _age;
    };
  
    this.setAge = function(value) {
      if (value < 0 || value > 120) {
        console.log('Please enter a valid age.');
        return;
      }
      _age = value;
    };
  }
  
  const user1 = new User('John', 25);
  console.log(`${user1.name} is ${user1.getAge()} years old.`); // John is 25 years old.
  
  user1.setAge(30);
  console.log(`${user1.name} is now ${user1.getAge()} years old.`); // John is now 30 years old.
  
  user1.setAge(-5); // Please enter a valid age.

  
  /*
Example 2: Product Object with Price Formatting
In this example, a Product object uses a setter to set the price and a getter to return the formatted price.
  */
  function Product(name, price) {
    this.name = name;
  
    let _price = price;
  
    this.getPrice = function() {
      return _price;
    };
  
    this.setPrice = function(value) {
      if (value < 0) {
        console.log('Price cannot be negative.');
        return;
      }
      _price = value;
    };
  }
  
  const product1 = new Product('Laptop', 1000);
  console.log(`The price of ${product1.name} is $${product1.getPrice()}.`); // The price of Laptop is $1000.
  
  product1.setPrice(1200);
  console.log(`The price of ${product1.name} is now $${product1.getPrice()}.`); // The price of Laptop is now $1200.
  
  product1.setPrice(-100); // Price cannot be negative.


  /*
Example 3: Temperature Converter
This example illustrates a Temperature object where the temperature can be set in Celsius, and the getters provide the value in both Celsius and Fahrenheit.
  */
  
  function Temperature(celsius) {
    let _celsius = celsius;
  
    this.getCelsius = function() {
      return _celsius;
    };
  
    this.setCelsius = function(value) {
      _celsius = value;
    };
  
    this.getFahrenheit = function() {
      return _celsius * 9/5 + 32;
    };
  
    this.setFahrenheit = function(value) {
      _celsius = (value - 32) * 5/9;
    };
  }
  
  const temp = new Temperature(0);
  console.log(`Temperature is ${temp.getCelsius()}°C or ${temp.getFahrenheit()}°F.`); // Temperature is 0°C or 32°F.
  
  temp.setFahrenheit(212);
  console.log(`Temperature is now ${temp.getCelsius()}°C or ${temp.getFahrenheit()}°F.`); // Temperature is now 100°C or 212°F.
  

  /*
Real-World Usage:
User Management: Ensuring data integrity for user attributes such as age, email, etc., by validating inputs before setting the value.
E-commerce Platforms: Applying getters and setters for product information to ensure prices are always positive and formatted correctly when displayed.
Data Conversion: Using getters and setters to convert data between different units or formats seamlessly, as shown in the temperature converter example.
  */