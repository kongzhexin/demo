//add(2)(3) =>5

function add(a){
    console.log(arguments)
    var fn=function(b){
         return a+b
    }
    return fn;
}
var a =add(2)(3);
console.log(a)