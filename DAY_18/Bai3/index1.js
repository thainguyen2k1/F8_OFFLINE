var n = 432;
var a = n;
var i = 0;
if (n <= 0 || n > 9999) {
  document.write("Khong Thoa Man");
} else {
  while (n > 1) {
    n /= 10;
    i++;
  }
  while (i > 0) {
    var y = a % 10 ** (i - 1);
    var t = (a - y) / 10 ** (i - 1);
    a = y;
    switch (t) {
      case 0:
        document.write(" Không ");
        break;
      case 1:
        document.write(" Một ");
        break;
      case 2:
        document.write(" Hai ");
        break;
      case 3:
        document.write(" Ba ");
        break;
      case 4:
        document.write(" Bốn ");
        break;
      case 5:
        document.write(" Năm ");
        break;
      case 6:
        document.write(" Sáu ");
        break;
      case 7:
        document.write(" Bảy ");
        break;
      case 8:
        document.write(" Tám ");
        break;
      case 9:
        document.write(" Chín ");
        break;
    }
    switch (i) {
      case 4:
        document.write("Ngàn");
        break;
      case 3:
        document.write("Trăm");
        break;
    }
    i--;
  }
}
