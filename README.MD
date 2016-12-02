# Introduce
>学习Javascript、css等demo

>关于underscore.js更多学习 [underscore源码解析](https://github.com/hanzichi/underscore-analysis)

----
## 节流与抖动

* 抖动：操作完成之后执行回调函数
    >1. DOM 元素的拖拽功能实现（mousemove）
    >2. window的resize事件会经常用到
    >3. 计算鼠标移动的距离（mousemove）
    >4. 搜索联想（keyup）
* 节流：一定时间执行一次回调函数，scroll事件等
    >1. 每次 resize/scroll 触发统计事件
    >2. 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好
### 总结

了解两种函数的思想，并且理解了return function(){}的用法

------



