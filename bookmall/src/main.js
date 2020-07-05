// 使用CommonJS的模块化规范
const {add, sub, mul, div} = require('./js/mathUtil.js');

// 使用ES6的模块化规范
import {name, age, height} from './js/info.js';


/**
 * 导入css文件
 * 将css文件同样当成一个模块引用
 */
require('./css/normal.css');



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


