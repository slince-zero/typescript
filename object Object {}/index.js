"use strict";
// Object是JavaScript中的内置对象类型，也是TypeScript中的内置类型。它表示任意非原始类型的值，包括数组、函数和对象。在TypeScript中，可以使用Object类型来定义可以包含任意属性的对象。
let num = 123;
let num2 = '123';
let num3 = [123];
let num4 = {};
let num5 = () => 1;
let num6 = (a, b) => a + b;
// object是TypeScript中的一种类型注解，表示非原始类型的值。与Object不同，object表示一个普通的对象类型，不能表示其他非对象类型（如数组或函数）。在使用object类型注解时，不能访问对象的具体属性或方法。
// 可以使用 object 将引用类型筛选出来
// let size: object = 123 // 错误 原始类型
// let size2: object = '1111' // 错误 原始类型
// let size3: object = false // 错误 原始类型
let size4 = []; // 正确
let size5 = {}; // 正确
let size6 = () => 12; // 正确
// {}表示一个空对象字面量，即没有任何属性或方法的对象。它是一种特殊的对象类型，在TypeScript中常用于表示空对象或占位符对象。
// 可以理解成 new Object() 的语法糖
let size7 = {};
let size8 = new Object();
// let a: {} = { name: '11' }
// a.name = '222' 无法进行一个赋值的操作
