var text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque animi, ipsa amet eaque fugit";
var wordStart = 0;
var newText = "";

function ChangeColor() {
  if (wordStart >= text.length) {
    wordStart = 0;
  }

  while (wordStart < text.length && text.charAt(wordStart) === " ") {
    wordStart++;
  }

  var wordEnd = wordStart;
  while (wordEnd < text.length && text.charAt(wordEnd) !== " ") {
    wordEnd++;
  }

  var word = text.slice(wordStart, wordEnd);
  var before = text.slice(0, wordStart);
  var after = text.slice(wordEnd);
  newText = `${before}<span>${word}</span>${after}<br>`;
  document.body.innerHTML = newText;
  wordStart = wordEnd + 1;
  setTimeout(ChangeColor, 1000);
}

ChangeColor();
