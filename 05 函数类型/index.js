"use strict";
// 1.函数定义类型和返回值 ｜ 箭头函数定义类型和返回值
// function add(a: number, b: number): number {
//   return a + b
// }
// console.log(add(2, 2))
const add2 = (a, b) => a + b;
// console.log(add2(2, 3))
// 2.函数的默认参数 ｜ 函数可选参数
function add(a = 10, b) {
    return a + (b || 0);
}
console.log(add());
function ret(user) {
    return user;
}
console.log(ret({ name: 'lisi', age: 20 }));
let obj = {
    user: [1, 2, 3],
    sum(num) {
        this.user.push(num);
    },
};
obj.sum(22);
console.log(obj.user);
// 5.函数重载
let user = [1, 2, 3];
function findNum(ids) {
    if (typeof ids === 'number') {
        return user.filter((item) => item === ids);
    }
    else if (Array.isArray(ids)) {
        return user.push(...ids);
    }
    else {
        return user;
    }
}
console.log('*****');
console.log(findNum([5, 6, 7]));
console.log(findNum(2));
console.log(findNum());
