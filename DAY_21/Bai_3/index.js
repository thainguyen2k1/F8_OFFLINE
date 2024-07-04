var arr = [1, 2, 3, 4, 5, 8, 6, 4, 3, 2, 7, 8, 2, 1];

var arrIndex = [];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[[j]]) {
      arrIndex[arrIndex.length] = j;
    }
  }
}
for (i = 0; i < arr.length; i++) {
  if (arrIndex.includes(i)) {
    continue;
  }
  newArr[newArr.length] = arr[i];
}
console.log(newArr);
