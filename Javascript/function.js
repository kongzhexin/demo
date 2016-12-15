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
var createAssigner = function(func,defaults){
    return function(obj){
        var length =arguments.length;
        if (defaults) obj = Object(obj);
        if(length <2||obj ==null) return obj;
        for(var index= 0;index <length; index++){
            var source = arguments[index],
                keys = func(source),
                l = keys.length;
            for(var i =0 ;i<l ;i++){
                 var key = keys[i];
                obj[key] = source[key];
                if (!defaults || obj[key] === void 0) obj[key] = source[key];
            }
        }
        return obj;
    }
}
//递归
var flatten = function(input,shallow,strict,startIndex){
    var  output =[] ,idx =0, value;
    for(var i=startIndex||0,length =input &&input.length;i<length;i++){
        value= input[i];
        if(value&&value.length >0 &&(_.isArray(value) ||_.isArguments(value))){
            if(!shallow) value =flatten(value,shallow,strict);
            var j=0,len =value.length;
            output.length  += len;
            while(j <len){
                output[idex ++] = value[j++];
            }
        }else if(!strict){
            output[idex++] = value;
        }
        return output;
    }
}

_.compose = function (){
    var args = arguments;
    var start = args.length -1;
    var result ;
    return function(){    
        var result = args[start].call(this,arguments)    //需要传参
         for(var i= start;i>0;i--){
            result = args[i].call(this,result)
        }
        return result
    }
}

_.after =function(times , func){
    return function(){
        if(--times<1){
            return func.call(this,arguments)
        }
    }
}

_.before = function (times , func){
    return function (){
        if(--times >1){
            return func.call(this,arguments)
        }
        if(times <=1) func =null;
    }
}