// let a = 0;
// a++;
// console.log(a);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "is an even number");
//   } else {
//     console.log(i, "is an odd number");
//   }
// }

// function greeting(name) {
//   let word = "good Morning" + " " + name;
//   return word;
// }
// let answer = greeting("success");
// console.log(answer);

// // true == "true";
// true === "true";

// console.log("hello world");

// function getUsersAge(date) {
//   let currentTime = new Date();
//   let Year = currentTime.getFullYear() - date.getFullYear();
//   return Year;
// }
// let answer = getUsersAge(new Date("2002-09-20"));
// console.log(answer);

// let myName = prompt("please enter your name");
// let dateOfBirth = prompt("please enter your date of Birth");

// let myAge = getUsersAge(new Date(dateOfBirth));

// alert(myName + " " + "your Age is" + " " + myAge);

// let balance = 500;

// function withdrawal(Amount) {
//   if (balance < Amount) {
//     console.log("insufficient funds");
//   } else balance > Amount;
//   console.log("Successful Transaction");
//   balance = balance - Amount;
//   console.log(balance);
// }

// console.log(withdrawal(100));

// function depositMoney(Amount) {
//   balance = balance + Amount;
//   console.log(`" you have successfully received" ${balance}`);
// }

// console.log(depositMoney(300));

// function Transfer(accountName, AccountNo, BankName, Amount) {
//   if (AccountNo.length !== 10) {
//   }
// }

let myButton = document.querySelector(".button");

myButton.addEventListener("click", () => {
  let random = Math.Floor(Math.random() * 10);
  console.log(random);
});
