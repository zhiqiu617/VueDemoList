// 一些数学工具函数
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if(num2 == 0) {
        console.log('除数不能为零');
    }
    else {
        return num1 / num2;
    }
}

module.exports = {
    add,
    sub,
    mul,
    div
}