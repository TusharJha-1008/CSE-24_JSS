console.log("Hello World!");
document.write("Hello World!");
/*some importent notes:
1 null is a value. 
2 undefined means a value is not assigned to a variable.
3 value names are case sensitive.*/
var num= 10;
console.log(num);
console.log(typeof(num));
nun= false;
//function
var say hello=function(){
    alert("hello world");
}
//arry
var numberArray = [1, 2, 3, 4, 5];
var animals = new Array["cat", "lion","panda"];

//symbol type 
const syml = Symbol(4);
console.log(syml);
const sym2 = Symbol(4);
console.log(sym2);
if(syml === sym2){
    console.log("True");
}else{
    console.log("False");
}   
//x=b means x is assigned the value of b.
//x==b means x is compared to b for equality of value.
//x===b means x is compared to b for equality of value and type.