"use strict";
// interface 重名 重合
// interface 任意 key
// interface ? readonly
// interface 接口继承
// interface 定义函数类型
let user = {
    name: 'lisi',
    age: 12,
    // sex: '男',// 错误
    score: 12, // 如果没有这行的话会出错
};
let user2 = {
    name: 'xiaoming',
    a: 1,
    b: '22',
    c: false,
};
// readonly
// 在TypeScript中，readonly是一个修饰符，用于将属性或索引签名设置为只读（read-only），即不允许修改其值。
// readonly可以用于以下两种情况：
// 修饰属性： 可以将类的属性声明为只读，这意味着在类的实例化后，无法修改该属性的值。只读属性必须在声明时或构造函数内初始化。
class Person {
    constructor(name) {
        this.age = 20;
        this.name = name;
    }
}
const person = new Person('Alice');
console.log(person.name); // 输出: "Alice"
let Axx = {
    name: 'xiaoming ',
    age: 12,
};
let fn = (name) => {
    return [1, 2, 3];
};
