(function(window,undefined){
    var $ =function(selector,context){
        return new $.fn.init(selector,context) 
    }
    $.fn =$.prototype;
    $.fn.init =function (selector,context){
        context = context||document;
        var nodeList =context.querySelectorAll(selector);
        this.length = nodeList.length;
        return this;
    }
    $.fn.init.prototype =$.fn;
})(window)