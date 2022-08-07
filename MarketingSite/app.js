// "use strict";
// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  console.log("plusdiv n:", n);
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  console.log("current div n:", n);
  showDivs((slideIndex = n));
}

function showDivs(n) {
  console.log("showDivs:", n);
  var i;
  var x = document.getElementsByClassName("mySlides");
  // console.log("mySlides:", x);

  var dots = document.getElementsByClassName("demodots");
  // console.log("dots:", dots);

  // got to first slide
  if (n > x.length) {
    slideIndex = 1;
  }

  // got to last slide
  if (n < 1) {
    slideIndex = x.length;
  }

  // hide all slides
  for (i = 0; i < x.length; i++) {
    // console.log(x[i]);
    x[i].style.display = "none";
  }

  // remove white color from all blocks
  for (i = 0; i < dots.length; i++) {
    // console.log(dots[i].className);
    dots[i].className = dots[i].className.replace(" white", "");
  }

  // make block avalible
  x[slideIndex - 1].style.display = "block";
  // make white block avalible
  dots[slideIndex - 1].className += " white";
}

// function myFunction() {
//   let carName = "Volvo";
//   console.log("outside:", carName);

//   insideFun();

//   function insideFun() {
//     let hero = "Ruchir";
//     console.log("inside:", carName);
//     carName = "Alto";

//     inception();

//     function inception() {
//       console.log("hero: ", hero);
//       console.log("inception: ", carName);
//       carName = "incepted";
//     }
//   }

//   console.log("hero: ", hero);
//   console.log("outt:", carName);
// }

// console.log(r(10, 10));

// const r = (x, y) => {
//   return x * y;
// };

// const arr = [1, 2, 3, 4, 5, 6, 2, 3, 2];

// const nums = new Set(arr);
// console.log([...nums]);

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
  get lang() {
    return this.language;
  },
  set lang(value) {
    if (typeof value !== "string") {
      alert("Enter a String value");
      return;
    }
    this.language = value.toUpperCase();
  },
};

person.lang = "ENN";

console.log(person.lang);
