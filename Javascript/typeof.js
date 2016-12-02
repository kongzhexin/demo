//是否是数组
_.isArray = function (obj) {
    return Array.prototype.isArray ? Array.prototype.isArray(obj) : Object.prototype.toString.call(obj) === "object Array"
}

//是否是对象
_.isObject = function (obj) {
    var type = typeof obj
    return type === 'function' || type === 'object' &&  ! ! obj
}


_.isNumber =function (obj){
    return Object.prototype.toString.call(obj).slice(8,-1) ==='Number'
}

_.each =function(obj,iteratee,context){
    
}
