// import sahzam from "./util.js";
// import { apikey } from "./util";
// import { apikey,sai } from "./util";
// import * as util from "./util.js";
// import { apikey, sai as content } from "./util"; //rename the variable
// console.log(util);
// export default (userName, message) => {
//   console.log("hello");
//   return "This is " + userName + "." + message;
// };
// const user = {
//   name: "sai",
//   age: 22,
//   greet() {
//     console.log("hello!");
//     console.log(this.age);              //object
//   },
// };
// console.log(user.age);
// user.greet();
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("hello!"); //class
//   }
// }
// const user1 = new User("prem", 22);
// console.log(user1);
// user1.greet();
// const hobbies = ["sports", "reading", "music"];
// console.log(hobbies[0]);

// hobbies.push("coding");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "sports");
// console.log(index);

// const editHobby = hobbies.map((item) => ({ text: item }));
// console.log(editHobby);
// const hobbies = ["playing", "music", "watching"];
// const newHobbie = ["reading"];
// const mergeHobbies = [...hobbies, ...newHobbie];

// console.log(mergeHobbies);

// const user = {
//   name: "prem",
//   age: 22,
// };

// const extendedUser = {
//   ...user,
//   isAdmin: true,
// };
// console.log(extendedUser);
const password = prompt("Your Password");
if (password === "Hello") {
  console.log("Hello There");
} else if (password === "Hii") {
  console.log("Hii There");
} else {
  console.log("Access Denied");
}
