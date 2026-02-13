const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
console.log(user);



// user.welcomeMessage()
user.username = "sam" ; //? value change
user.welcomeMessage()

// console.log(this);//? node ==> Object / globle;  browser ==> windows

// function chai(){
//     console.log(this);
// }

// chai();//? check

// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }
// chai();//? check


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();//? check


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()



// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


//?arrow method
// const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }
    
//?arrow method
    // const addTwo = (num1, num2) =>  num1 + num2
    
//?arrow method
    // const addTwo = (num1, num2) => ( num1 + num2 )
    
//?arrow method
// const addTwo = (num1, num2) => {username: "hitesh"} //? this will not work
const addTwo = (num1, num2) => ({username: "hitesh"}) //? this will work


console.log(addTwo(3, 4)) 


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()