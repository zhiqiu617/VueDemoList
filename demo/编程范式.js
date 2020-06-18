// 编程范式：命令式编程(Imperative)/声明式编程(Declarative)
// 编程范式：面向对象编程（第一公民：对象）/函数式编程(Functional)（第一公民：函数）

const numbers = [12, 34, 178, 90, 230, 99, 10];

// 需求1. 取出所有小于100的数
let newNum = [];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 100) {
        newNum.push(numbers[i])
    }
}
console.log(newNum);

// 需求2. 将得到的新数组进行转换：每个元素*2
let newNum2 = [];
for(let n of newNum) {
    newNum2.push(n * 2)
}
console.log(newNum2);

// 需求3. 将所有newNum2中的所有元素相加，得到最终结果
let total = 0;
for(let n of newNum2) {
    total += n
}
console.log(total);

// 使用过滤器filter实现需求1
// filter中的回调函数必须返回一个boolean值
// 当返回true时，函数内部自动将这次回调的n加入到新数组中
// 当返回false时，函数内部自动过滤这次的n
let new2Num = numbers.filter(function(n) {
    return n < 100
})
console.log('filter---' + new2Num);

// 使用映射map实现需求2
// map相当于把数组中的每个元素进行加工后放入新数组
let new2Num2 = new2Num.map(function(n) {
    return n * 2
})
console.log('map---' + new2Num2);

// 使用reduce实现需求3
// reduce将数组中的元素进行汇总
// 回调函数中的preValue为上一个值，即上一次回调返回的值，function后面的0为preValue的初始值
// 每次回调函数都将数组中的元素叠加在preValue，从而算出总数
let total2 = new2Num2.reduce(function(preValue,n) {
    return preValue + n
},0);
console.log('reduce---' + total2);

// 将filter、map、reduce连起来使用，即形成链式函数
let total3 = numbers.filter(function(x) {
    return x < 100
}).map(function(y) {
    return y * 2
}).reduce(function(preValue,z) {
    return preValue + z
})
console.log(total3);

// 链式函数简化(箭头函数的使用)
let total4 = numbers.filter(m => m < 100).map(n => n * 2).reduce((preValue,l) => preValue + l);
console.log(total4);

