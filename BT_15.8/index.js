var btnSignEl = document.querySelector(".btn-sign");
var formUpEl = document.querySelector(".form-up");
var coverEL = document.querySelector(".cover");
var signInEl = document.querySelector(".sign-in");
var btnsignInEl = document.querySelector(".btn-sign-in");
var signUpEl = document.querySelector(".sign-up");
var btnsignUpEl = document.querySelector(".btn-sign-up");
var inputEl = document.querySelectorAll("input");
var errorEl = document.querySelectorAll(".error");
var btnExistEl = document.querySelector(".btn-existed");
var existedEl = document.querySelector(".existed");

btnSignEl.addEventListener("click", function() {
  formUpEl.classList.remove("hidden");
});
coverEL.addEventListener("click", function() {
  formUpEl.classList.add("hidden");
});

btnsignUpEl.addEventListener("click", function() {
  signInEl.classList.toggle("hidden");
  signUpEl.classList.toggle("hidden");
});
btnsignInEl.addEventListener("click", function() {
  signInEl.classList.toggle("hidden");
  signUpEl.classList.toggle("hidden");
});
inputEl.forEach(function(a) {
  a.addEventListener("blur", function() {
    for (var i = 0; i < inputEl.length; i++) {
      if (!inputEl[i].value) {
        errorEl[i].classList.remove("hidden");
        inputEl[i].classList.add("border-red");
        inputEl[i].classList.remove("border-black");
      } else {
        errorEl[i].classList.add("hidden");
        inputEl[i].classList.add("border-black");
        inputEl[i].classList.remove("border-red");
      }
    }
  });
});
btnExistEl.addEventListener("click", function() {
  for (var i = 0; i < inputEl.length; i++) {
    if (!inputEl[i].value) {
      errorEl[i].classList.remove("hidden");
      inputEl[i].classList.add("border-red");
      inputEl[i].classList.remove("border-black");
    } else {
      errorEl[i].classList.add("hidden");
      inputEl[i].classList.add("border-black");
      inputEl[i].classList.remove("border-red");
    }
  }
  existedEl.classList.remove("hidden");
});
