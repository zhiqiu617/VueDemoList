var name = 'aaa';

var flag = true;

function mul(num1, num2) {
    return num1 * num2;
}

if(flag) {
    console.log(mul(20, 30));    
}

// 导出方式一
export {flag, mul};

// 导出方式二
export var user = 'userA';
export var age = 18;

// 导出函数、类
export function sub(num1, num2) {
    return num1 - num2;
}

export class Person {
    run() {
        console.log('running');
        
    }
}

/**
 * export default的使用
 * 若不希望导出时命名，让导入者根据需要来命名，可以使用export default实现
 * 注意：在同一个模块中，只能存在一个export default
 */
/**
 * const address = 'Beijing';
 * export {address};
 */
/**
 * export const address = 'Beijing';
 */

// 导出一个变量
// const address = 'Beijing';
// export default address;

// 导出一个函数
export default function (argument) {
    console.log(argument);
    
}
