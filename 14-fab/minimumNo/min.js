console.log("hello geeks");

var a = prompt("enter the first value");
var b = prompt("enter the second value");
var c = prompt("enter the third value");
if (a < b & a<c) {
    alert(a + ",a is minimum");
}
else if(b<a & b<c) {
    alert(b + ",b is minimum");
}
else {
    alert(c + ", c is minimum");
}