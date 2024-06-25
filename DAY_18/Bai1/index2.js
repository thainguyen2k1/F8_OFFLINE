var n = 10;
function Fibo(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return Fibo(n - 1) + Fibo(n - 2);
}
for (var i = 1; i <= n; i++) {
  document.write(`${Fibo(i)} `);
}
