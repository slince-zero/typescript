// abstract 所定义的抽象类无法被实例化
// abstract 所定义的方法，只能描述不能实现
abstract class Test {
  name: string
  constructor(name: string) {
    this.name = name
  }
  abstract fun(name: string): void
  getName(): string {
    return this.name
  }
}

class Test2 extends Test {
  fun(name: string): void {
    console.log(name)
  }
}
