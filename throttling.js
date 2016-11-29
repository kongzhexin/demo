//函数节流
//throttling函数只在addEventListener执行了一次
function throttling(fn, wait) {
    var timeout; 
    var startTime = new Date(); 
    var context = this; 
    var args = arguments;
    return function () {
        var curTime = new Date(); 
        clearTimeout(timeout); 
        if (curTime - startTime > 500) {
            fn.apply(context); 
            startTime = curTime; 
        }else {
            timeout = setTimeout(fn, wait); 
        }
    }
}

function cb(param) {
    
    console.log('throttling succ!'+new Date().getTime()+param)
}

window.addEventListener('scroll', throttling(cb, 500))