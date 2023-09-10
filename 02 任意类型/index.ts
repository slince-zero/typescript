// any 任意类型 unkonwn 不知道的类型
// 1.top type 定制类型 any unknown
// 2.Object
// 3.Number String Boolean
// 4.number string boolean
// 5.never

let num: any = []
num = 1
num = '122'
num = true
num = {}
num = []

let num1: unknown = 1
let num2: number = 2
num1 = num2
// num2 = num1 // unkonwn 类型只能赋值给自身，或者是any

let arr: any = { name: 'lisi' }
console.log(arr.name) // lisi

let arr2: unknown = { name: 'wangwu' }
// console.log(arr2.name) // 没有办法读任何属性

// unknown 类型比 any 类型更加安全
