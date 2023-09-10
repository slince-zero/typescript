"use strict";
// 联合类型
let phone = '123';
phone = '232300jhlk';
phone = 100;
// 交叉类型
const person = (man) => {
    console.log(man);
};
person({ name: 'lisi', age: 12, sex: 1 });
// 类型断言
let fn = (num) => {
    console.log(num.length);
};
fn('2234454');
