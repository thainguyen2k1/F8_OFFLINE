var arr = [1, 5, 7, 4, 0, 6, 8, 99];
var min, max, indexMin, indexMax;
min = arr[0];
max = arr[0];
indexMax = 0;
indexMin = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    indexMax = i;
  }
  if (arr[i] < min) {
    min = arr[i];
    indexMin = i;
  }
}
console.log(`Min = ${min} o vi tri ${indexMin + 1}`);
console.log(`Max = ${max} o vi tri ${indexMax + 1}`);
