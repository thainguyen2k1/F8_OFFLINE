var x = 10;
var sum;
if (x <= 1) {
  document.write("15000");
} else {
  if (x <= 5) {
    sum = 15000 + (x - 1) * 13500;
  } else {
    if (x < 120) {
      sum = 15000 + 13500 * 4 + (x - 5) * 11000;
    } else sum = (15000 + 13500 * 4 + (x - 5) * 11000) * 0.9;
  }
  document.write(`${sum}`);
}
