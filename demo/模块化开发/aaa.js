// 模块化形成自己的作用域，变量方法的定义和使用互不干扰
var moduleA = (function() {
    var name = 'aaa';
    var age = 22;

    var obj = {};

    function sum(num1, num2) {
        return num1 + num2;        
    }

    var flag = true;

    if(flag) {
        console.log(sum(10,20));        
    }

    obj.flag = flag;
    obj.sum = sum;

    return obj;

})()