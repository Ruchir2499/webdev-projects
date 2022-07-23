// navbar
const menu = document.querySelector("#mobile-menu");
console.log("mobile-menu", menu);

const menuLinks = document.querySelector(".nav-menu");
console.log("menuLinks", menuLinks);

function scrollClose() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

menu.addEventListener("click", () => {
  console.log("hello", menu.classList);
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
navLinks.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");

  // make both display none
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");

  // make dark-grey bacground to null
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", " ");
  }

  //   make the selected menu block
  document.getElementById(menuName).style.display = "block";

  // set dark-grey background
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}

// document.getElementById("myLink").click();
