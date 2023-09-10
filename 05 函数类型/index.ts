// 1.函数定义类型和返回值 ｜ 箭头函数定义类型和返回值
// function add(a: number, b: number): number {
//   return a + b
// }
// console.log(add(2, 2))

const add2 = (a: number, b: number): number => a + b
// console.log(add2(2, 3))

// 2.函数的默认参数 ｜ 函数可选参数
function add(a: number = 10, b?: number): number {
  return a + (b || 0)
}
console.log(add())

// 3.函数是一个对象如何定义
interface User {
  name: string
  age: number
}
function ret(user: User) {
  return user
}
console.log(ret({ name: 'lisi', age: 20 }))

// 4.函数 this 类型
// ts 可以定义 this 的类型，在 js 中无法使用，必须是第一个参数定义 this 的类型
interface Obj {
  user: number[]
  sum: (this: Obj, num: number) => void
}
let obj: Obj = {
  user: [1, 2, 3],
  sum(this: Obj, num: number) {
    this.user.push(num)
  },
}
obj.sum(22)
console.log(obj.user)

// 5.函数重载
let user: number[] = [1, 2, 3]
function findNum(num: number[]): number[] // 如果传入的是一个number类型的数组，添加操作
function findNum(id: number): number[] // 如果传入了id，单个查询操作
function findNum(): number[] // 如果没有传入，查询全部操作
function findNum(ids?: number | number[]) {
  if (typeof ids === 'number') {
    return user.filter((item) => item === ids)
  } else if (Array.isArray(ids)) {
    return user.push(...ids)
  } else {
    return user
  }
}
console.log('*****')

console.log(findNum([5, 6, 7]))
console.log(findNum(2))
console.log(findNum())
