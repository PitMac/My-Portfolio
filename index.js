let menuOpened = false;
let isDarkMode = false;

const $ = (selector) => document.querySelector(selector);

$(".hiddeMenu").addEventListener("click", () => {
  if (!menuOpened) {
    $(".menu").classList.toggle("show");
    $(".fa-solid.fa-bars").classList.toggle("fa-xmark");
    $(".fa-solid.fa-xmark").classList.remove("fa-bars");
    menuOpened = true;
  } else {
    $(".menu").classList.toggle("show");
    $(".fa-solid.fa-xmark").classList.toggle("fa-bars");
    $(".fa-solid.fa-bars").classList.remove("fa-xmark");
    menuOpened = false;
  }
});

$(".iconSection").addEventListener("click", () => {
  if (!isDarkMode) {
    document.body.classList.toggle("darkMode");
    $(".fa-solid.fa-moon").classList.toggle("fa-sun");
    $(".fa-solid.fa-sun").classList.remove("fa-moon");
    isDarkMode = true;
  } else {
    $(".fa-solid.fa-sun").classList.toggle("fa-moon");
    $(".fa-solid.fa-moon").classList.remove("fa-sun");
    document.body.classList.remove("darkMode");
    isDarkMode = false;
  }
});

document.getElementById("emailButton").addEventListener("click", () => {
  var copyText = "jhondavidpitapita@hotmail.com";
  $(".alert").classList.toggle("showAlert");
  navigator.clipboard.writeText(copyText);
  setTimeout(() => {
    $(".alert").classList.remove("showAlert");
  }, 3000);
});
