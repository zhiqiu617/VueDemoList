// 使用CommonJS的模块化规范
const {add, sub, mul, div} = require('./js/mathUtil.js');

console.log(add(20, 4));
console.log(sub(20, 4));
console.log(mul(20, 4));
console.log(div(20, 4));

// 使用ES6的模块化规范
import {name, age, height} from './js/info.js';

console.log(name);
console.log(age);
console.log(height);

/**
 * 导入css文件
 * 将css文件同样当成一个模块引用
 */
require('./css/normal.css');

// 导入less文件依赖
require('./css/special.less');



// 使用Vue
import Vue from 'vue';
// import App from './vue/app';
import App from './vue/App.vue';

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})


