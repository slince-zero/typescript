// enum Types {
//   Red,
//   Green,
//   Blue,
// }
// enum Types {
//   Red = 0,
//   Green = 1,
//   Blue = 2,
// }

// 增长枚举
// Red使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Type.Red的值为 1， Green为 2， Blue为 3。
// enum Types {
//   Red = 1,
//   Green,
//   Blue,
// }

// 字符串枚举
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
// enum Types {
//   Red = 'red',
//   Green = 'green',
//   Blue = 'blue',
// }

// 异构枚举
// 枚举可以混合字符串和数字成员
enum types {
  No = 'No',
  yes = 1,
}
