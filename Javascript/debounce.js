//抖动 
//理解：即合并多次事件触发(等无时间触发)再处理执行handler
function debounce(fn,time){
    var timeout;
    //返回一个匿名函数，并不是直接执行的
    return function(){
        clearTimeout(timeout);
        timeout =setTimeout(fn,time);
    }
}

function cb(argments){
    console.log('succ');
}
window.addEventListener('scroll',debounce(cb,500))