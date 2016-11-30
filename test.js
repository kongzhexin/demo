
var b =function(){
    console.log('aaa');
}

var c={
    name:'xiaoxiao'
}

function d(){
    console.log('xiaxia');
}
(function a(){
    console.log(b);
    console.log(c);
    d();
    console.log('111');
})()