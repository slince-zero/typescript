// symbol 类型是通过Symbol构造函数创建的
// 可以传递参数作为唯一标识，但只支持 string 和 number 类型

let sym1 = Symbol()
let sym2 = Symbol('name')
let sym3 = Symbol(123)
// let sym4 = Symbol(false) // 错误

// symbol 的值是唯一的
const s1 = Symbol()
const s2 = Symbol()
// s1 === s2 => false

// 用作对象属性的键
let sym = Symbol()
let objj = {
  [sym]: 'value',
}
console.log(objj[sym]) // value

// 使用symbol定义的属性，是不能通过如下方式便遍历拿到的
const symbol1 = Symbol('1111')
const symbol2 = Symbol('2222')
const objj2 = {
  [symbol1]: '小白',
  [symbol2]: '小黑',
  age: 12,
  sex: 'male',
}
// for in
for (let key in objj2) {
  // 没有遍历到 symbol1 和 symbol2
  console.log(key)
}
console.log('1222@@@')

// Object.keys
Object.keys(objj2)
console.log(Object.keys(objj2))

// getOwnPropertyNames
console.log(Object.getOwnPropertyNames(objj2))

// JSON.stringfy
console.log(JSON.stringify(objj2))

// 如何拿到
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(objj2)
console.log(Object.getOwnPropertySymbols(objj2))
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(objj2)
console.log(Reflect.ownKeys(objj2))
