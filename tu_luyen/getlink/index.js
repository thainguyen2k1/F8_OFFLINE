var number = document.querySelector(".number");
var btn = document.querySelector("button");
window.addEventListener("load", () => {
  setInterval(() => {
    if (number.innerText > 0) {
      number.innerText--;
    } else {
      btn.disabled = false;
      btn.style.cursor = "pointer";

      btn.style.background = "transparent";
      btn.addEventListener("click", function() {
        window.open("https://www.facebook.com/");
      });
    }
  }, 1000);
});
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") {
    var a = number.innerText;
    setInterval(() => {
      if (document.visibilityState === "hidden" && number.innerText < a) {
        number.innerText++;
      }
    }, 1000);
  }
});
