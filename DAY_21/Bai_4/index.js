var arr = [1, 2, 3, 4, 9, 8, 7, 6];
var number = 0;
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}
for (i = 0; i < arr.length; i++) {
  if (arr[i] > number) {
    break;
  }
}
for (j = 0; j < arr.length; j++) {
  if (j == i) newArr[newArr.length] = number;
  newArr[newArr.length] = arr[j];
}
if (i == arr.length) {
  newArr[newArr.length] = number;
}
console.log(newArr);
