function isPrime(n) {
  if (n < 2) return false;
  if (n == 2 || n == 3) return true;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

var arr = [1, 2, 6, 8, 54, 34, 10, 45, 32];
var sum = 0,
  i = 0;
for (var value of arr) {
  if (isPrime(value)) {
    sum += value;
    i++;
  }
}
if (sum === 0) {
  console.log("Khong co so nguyen to");
} else {
  console.log(`${sum / i}`);
}
