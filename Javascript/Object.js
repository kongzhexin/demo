//是否是数组
var _ = function(obj) {}; 

_.isArray = function (obj) {
    return Array.prototype.isArray?Array.prototype.isArray(obj):Object.prototype.toString.call(obj) === "object Array"
}

//是否是对象
_.isObject = function (obj) {
    var type = typeof obj
    return type === 'function' || type === 'object' &&  !  ! obj
}
//对象（自身） 数组 string 是否空
_.isEmpty = function (obj) {
    if(obj ==null) return true;
    if(_.isArray(obj)||_.isString(obj)||_.isObject(obj)) 
    return _.keys(obj).length === 0;
}

_.isNumber = function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Number'
}

_.each = function(obj, iteratee, context) {
    if(obj == null) return obj;
    var i ,length
}

 _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });


_.has = function (obj, key) {
    return obj != null && obj.hasOwnProperty(key)
}

_.keys = function(obj) {
    if ( ! _.isObject(obj))renturn []; 
    var keys = []; 
    for (var key in obj)keys.push(key); 

    return keys; //未考虑IE 9以下bug
}

//keys 返回数组键值
_.values = function(obj) {
    var keys = _.keys(obj); 
    var len = keys.length; 
    var values = Array(len)
    for (var i = 0; i < len; i ++ ) {
        values[i] = keys[keys[i]]; 
    }
    return  values; 
}

_.sortedIndex = function(array, value) {
    var length = array.length; 
    var low = 0, mid
    high = length-1; 
    while (low < high) {
        mid = Math.floor((low + high)/2); 
        if (array[mid] < value) {
            low = mid + 1; 
        }else {
            high = mid; 
        }
    }
    return low
}

_.indexOf = function(array, item, isSorted) {
    var i = 0, length = array && array.length
    if (typeof isSorted === number) {
        i = isSorted < 0?Math.max(0, length + isSorted):isSorted; 
    }else {
        i = _.sortedIndex(array, item); 
        return array[i] === item?i:-1; 
    }
    for (; i < length; i ++ ) {
        if (array[i] === item)return i
    }
    return-1; 
}

_.contains =function(obj,target,fromIndex){
    if(obj == null) return false;
    if(obj.length !== +obj.length) obj =_.values(obj);
    return _.indexOf(obj,target,typeof fromIndex =='number' &&fromIndex)>0
}

_.pairs =function(obj){
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs =Array(length);
    for(var i=0 ;i<length;i++){
        pairs[i] =[keys[i],obj[keys[i]]];
    }
    return pairs;
}

_.random =function(min,max){
    if(max == null){
        max =min;
        min =0;
    }
    return  Math.floor(min +Math.random()*(max-min+1))
}

