(function (layer) {
    window.dialog = function(opts){

        //只考虑 界面有两个按钮【确定】【取消】的情况
        var defaults ={
            id:opts.id||'',                         //
            type: opts.type||1,                     //页面层
            shade:opts.shade||0,
            shadeClose:opts.shadeClose||false,
            maxmin :opts.maxmin||false,
            fixed:opts.fixed||true,
            scrollbar :opts.scrollbar||true,
            btnAlign:opts.btnAlign||'c',            //与文档默认值不同 改为居中
            closeBtn:opts.closeBtn||1,
            resize :opts.resize||false,
            area: [opts.width? opts.width+'px':'',opts.height?opts.height+'px':''],
            title:opts.title,
            skin:opts.skin||'',
            content: opts.content,
            success:opts.onshow||null,
            btn: [opts.okValue,opts.cancelValue] ,
            yes: function(index){
                var returnVal = opts.ok();
                returnVal !==false&& layer.close(index);
            },
          //  cancel:opts.cancel||null,         //右上角关闭按钮
            cancel: function(){                 //取消按钮 
                opts.cancel();
                opts.onclose&&opts.onclose();
            },
            end:opts.end||null,
        }
        return layer.open(defaults);
    }

    dialog.info = function (msg, time) {
        var content = '<div class="tipbox-atte">' + msg + '</div>';
        //提示框公用部分
        dialogInfo(content, time);
    }
    dialog.warn = function (msg, time) {
        var content = '<div class="tipbox-warn">' + msg + '</div>';
        //提示框公用部分
        dialogInfo(content, time);
    }
    dialog.succ = function (msg, time) {
        var content = '<div class="tipbox-succ">' + msg + '</div>';
        //提示框公用部分
        dialogInfo(content, time);
    }
    dialog.fail = function (msg, time) {
        var content = '<div class="tipbox-fail">' + msg + '</div>';
        //提示框公用部分
        dialogInfo(content, time);
    }
  
    function dialogInfo(content, time) {
        content = content || '无提示信息';
        var d = layer.msg(content,{time:time});
    }
    
})(layer);