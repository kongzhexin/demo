//add(2)(3) =>5

function add(a) {
    var fn = function(b) {
         return a + b
    }
    return fn; 
}
var a = add(2)(3); 
//---------------------------------------------------------------------------------------------------
//bind函数的ployfill
if(!Function.prototype.bind){
    Function.prototype.bind = function(o,args) {
        var self = this;
        var boundArgs = arguments;
        return function(){
            var args =[];
            for(var i=1;i<boundArgs.length;i++)args.push(boundArgs[i])
            for(var i=0;i<arguments.length;i++)args.push(arguments[i])
            return self.apply(o,args);     //返回一个新函数
        }
    }
}
var o ={ x:4 }
function sub (a,b){
    var c=this.x-b-a;
    console.log(a)
    console.log(b);
}
sub.bind(o,5,4)(); //sub.bind(o)(5,4);
//---------------------------------------------------------------------------------------------------
//经典闭包 返回函数
var createAssigner = function(func,args){
    return function(obj){
        return obj
    }
}
