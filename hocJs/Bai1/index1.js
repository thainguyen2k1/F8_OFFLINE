// Bai 1
var a = -3;
var b = 5;
a = a + b;
b = a - b;
a = a - b;
document.write(`<h1>${a}</h1>`);
document.write(`<h1>${b}</h1>`);
// Bai 2
var S = 10 + 20 + (5**10) / 2;
document.write(`<h1>${S}</h1>`);
// Bai 3
var c=2;
var max=a;
if(max<b){
    max=b;
}
if(max<c){
    max=c;
}
document.write(`<h1>${max}</h1>`);
// Bai 4
if(a*b > 0) {
    document.write("<h1>Cung Dau</h1>");
}
else {
    document.write("<h1>Trai Dau</h1>");
}
// Bai 5 
var d;
if(a>b){
    d=a;
    a=b;
    b=d;
}
if(b>c){
    d=b;
    b=c;
    c=d;
}
if(a>b){
    d=a;
    a=b;
    b=d;
}
document.write(`${a},${b},${c}`);




