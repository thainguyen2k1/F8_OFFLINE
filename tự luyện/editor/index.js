const textData = document.querySelector(".text");
const word = document.querySelector(".word");
const character = document.querySelector(".character");
const btn = document.querySelector(".file");
const nav = document.querySelector(".nav");
var boldBtn = document.querySelector(".boldBtn");
var underlightBtn = document.querySelector(".underlightBtn");
var italicBtn = document.querySelector(".italicBtn");
var colorBtn = document.querySelector(".choose-color");
const newBtn = document.querySelector(".new");
const txtBtn = document.querySelector(".txt");
const pdfBtn = document.querySelector(".pdf");
const input = document.querySelector("input");
input.value = "Thái";
boldBtn.addEventListener("click", function() {
  document.execCommand("bold");
});
underlightBtn.addEventListener("click", function() {
  document.execCommand("underline");
});
italicBtn.addEventListener("click", function() {
  document.execCommand("italic");
});
btn.onclick = function(event) {
  event.stopPropagation();
  nav.classList.toggle("hidden");
};
colorBtn.addEventListener("input", function(e) {
  var target = e.target.value;
  document.execCommand("forecolor", false, target);
});
document.onclick = () => {
  nav.classList.add("hidden");
};
textData.addEventListener("click", () => {
  document.addEventListener("keyup", () => {
    function countWords(a) {
      const words = a.trim().split(/\s+/);
      return words[0] === "" ? 0 : words.length;
    }
    word.innerText = countWords(textData.innerText);
    function countCharacters(text) {
      return text.trim().length;
    }
    character.innerText = countCharacters(textData.innerText);
  });
});
newBtn.addEventListener("click", e => {
  textData.innerText = "";
});
txtBtn.addEventListener("click", () => {
  var link = document.createElement("a");
  var blob = new Blob([textData.innerText]);
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = input.value + ".txt";
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
});
pdfBtn.addEventListener("click", () => {
  html2pdf().from(textData.innerHTML).save(input.value);
});
