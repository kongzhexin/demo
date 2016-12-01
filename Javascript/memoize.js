//斐波那契数列

const fibonacci = function(n) {
    return n < 2?n:fibonacci(n-2) + fibonacci(n-1); 
}; 
//-------------------------------------------------------------------------
//记忆版
let memoize = function(func) {
    let cache =  {}; 
    return function (key) {
        if ( ! cache[key]) {
            cache[key] = func.apply(this, arguments)
        }
        return cache[key]
    }
}
let _fibonacci = memoize(function (n) {
    return n < 2?n:_fibonacci(n-2) + _fibonacci(n-1); 
})
//---------------------------------------------------------------------------
//udersocre 实现
const _memoize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache; 
        var address = '' + (hasher?hasher.apply(this, arguments):key); 

        if ( ! cache[address]) {
            cache[address] = func.apply(this, arguments); 
        }
        return cache[address]; 
    }
    memoize.cache =  {}; 
    return memoize; 
}