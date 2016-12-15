//reduce的原生实现  
//param
//fn 函数 (preValue,currentValue,index,array)
//initValue初始值
Array.prototype.reduce = function(fn,initValue){
    var index,value,
        length = this.length >>>0;
        isValueSet =false;
    if(arguments.length >1){
        value = initValue;
        isValueSet =true;
    }
    for(index=0;index<length;index++){
        if(isValueSet){
            value = fn(value,this[index],index,this)
        }else{
            value =this[index];
            isValueSet =true;
        }
    }
    return value;
}
// var a=[1,2,3],
//     b =a.reduce(function(pre,cur){
//     return pre+cur;
// },1)
//---------------------------------------------------------------------------------
//ES6 数组去重的方法 Set 与Array.from
function unique(a){
    return Array.from(new Set(a))
}
var a =[1,23,4,5,6,'23','6',5]
var ans =unique(a);
console.log(ans)
//---------------------------------------------------------------------------------
//


_.chunk = function(array, count){
    var result =[];
    var length = array.length;
    while(i<length){
        result.push( Array.prototype.slice.call(array,i,i+=count))
    }
    return result;
}

_.range = function (start,stop,step){
    if(stop == null){
        stop =start ||0 ;
        start =0;
    }
    if(!step){
        step = stop <start? -1: 1;
    }
    var length = Math.max()
    var range =Array(length);
    for(var idx=0;idx <length;idx++){
        range[idex] = start+step*idx;
    }
    return range;
}