// const promise = new Promise(function (resolve, reject) {
//   let x = 1;
//   setTimeout(() => {
//     if (x == 0) {
//       resolve("X is resolved!");
//     } else {
//       reject("X is not resolved");
//     }
//   }, 1000);
// })
//   .finally(() => alert("Promise Loaded"))
//   .then((result) => {
//     console.log(result);
//     alert(result);
//   })
//   .catch((error) => {
//     console.log(error);
//     alert(error);
//   });

// fetch("https://javascript.info/article/promise-chaining/user.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((response) => response.json())
//   .then((githubUser) => console.log(githubUser));

// async function myFunction() {
//   //   return "Hello";

//   let x = 1;

//   if (x == 0) {
//     return "Resolved";
//   } else {
//     return "Error";
//   }
// }

// myFunction().then(
//   function (value) {
//     alert(value);
//   },
//   function (error) {
//     alert(error);
//   }
// );

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("I love You !!");
//     }, 2000);
//   });
//   //   document.getElementById("demo").innerHTML = await myPromise;
//   console.log(await myPromise);
// }

// myDisplay();

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   //   xhttp.onload = function () {
//   //     console.log(this);
//   //   };

//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//     }
//   };

//   xhttp.open(
//     "GET",
//     "https://fantasy.premierleague.com/api/bootstrap-static/",
//     true
//   );

//   xhttp.send();
//   console.log("hello");
// }

// loadDoc();

// const text =
//   '{"name":"John", "birth":"1986-12-14", "city":"New York", "phone": 99922291}';
// const obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });

// console.log(obj);

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1
