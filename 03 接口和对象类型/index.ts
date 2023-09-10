// interface 重名 重合
// interface 任意 key
// interface ? readonly
// interface 接口继承
// interface 定义函数类型

// 不能多属性也不能少属性
// 命名规范，首字母大写
interface User {
  name: string
  age?: number
}

// 在TypeScript中，"重合"（Intersection）是一种类型操作符，用于将多个类型合并为一个新的类型。通过使用交叉类型，可以创建一个新类型，它包含了多个类型的属性和方法。
interface User {
  score: number
}

let user: User = {
  name: 'lisi',
  age: 12,
  // sex: '男',// 错误
  score: 12, // 如果没有这行的话会出错
}

//[propName: string]: any表示User2接口可以包含任意数量和类型的额外属性，并且这些额外属性的键名是字符串类型，值可以是任意类型。
interface User2 {
  name: string
  age?: number
  [propName: string]: any
}

let user2: User2 = {
  name: 'xiaoming',
  a: 1,
  b: '22',
  c: false,
}

// readonly
// 在TypeScript中，readonly是一个修饰符，用于将属性或索引签名设置为只读（read-only），即不允许修改其值。
// readonly可以用于以下两种情况：
// 修饰属性： 可以将类的属性声明为只读，这意味着在类的实例化后，无法修改该属性的值。只读属性必须在声明时或构造函数内初始化。
class Person {
  readonly name: string
  readonly age: number = 20

  constructor(name: string) {
    this.name = name
  }
}

const person = new Person('Alice')
console.log(person.name) // 输出: "Alice"
// person.name = 'Bob' // 报错，无法修改只读属性
// person.age = 12 // 报错，无法修改只读属性

// 继承
interface A extends B {
  name: string
}

interface B {
  age: number
}

let Axx: A = {
  name: 'xiaoming ',
  age: 12,
}

// interface 定义函数类型
interface Fn {
  (name: string): number[]
}

let fn: Fn = (name: string) => {
  return [1, 2, 3]
}
