var row = 8;
var col = 8;
for (var i = 1; i <= row; i++) {
  for (var j = 1; j <= col; j++) {
    if ((i + j) % 2 === 1) {
      document.write(`<span style="background-color: black;">${j}</span>`);
    } else {
      document.write(
        `<span style="background-color: white;color:white;">${j}</span>`
      );
    }
  }
  document.write(`<br>`);
}
