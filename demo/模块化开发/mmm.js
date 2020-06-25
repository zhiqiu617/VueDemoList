// 前面的分号可认为是防御性分号，避免因为JS的自动分号插入机制引发问题，导致前后代码自动连接
;(function() {
    if(moduleA.flag) {
        console.log('使用aaa.js文件中的flag变量');        
    }
    console.log(moduleA.sum(40, 40));
    
})()