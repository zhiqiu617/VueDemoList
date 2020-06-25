/**
 * 导入{}中的变量
 */
import {flag, mul} from "./aaaES6.js";

if(flag) {
    console.log('导入aaaES6.js中的属性和方法');
    console.log(mul(9, 8)); 
}

/**
 * 直接导入export定义的变量
 */
import {user, age} from "./aaaES6.js";

console.log(user,age);

/**
 * 导入export的函数和类
 */
import {sub, Person} from "./aaaES6.js";

console.log(sub(23, 9));
const p = new Person();
p.run();

/**
 * 导入default部分
 * import后面跟的就是为导入内容命名的名称
 */
// import addr from "./aaaES6.js";
// console.log(addr);

// 此时func指代export的函数，通过func()调用
import func from "./aaaES6.js";
func('Hello');

/**
 * 一次性导入，使用通配符 * ，后面跟上“as name”，name中包含文件内所有导出的变量和函数
 */
import * as aaa from "./aaaES6.js";
console.log(aaa);
