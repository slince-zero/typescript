interface Options {
  el: string | HTMLElement
}
interface VueCls {
  options: Options
  init(): void
}

interface Vnode {
  tag: string // div section header
  text?: string
  children?: Vnode[]
}
// 简易版虚拟Dom
class Dom {
  // 创建节点的方法
  createElement(el: string) {
    return document.createElement(el)
  }
  // 创建填充文本的方法
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  // 渲染函数
  render(data: Vnode) {
    let root = this.createElement(data.tag)
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item: Vnode) => {
        let child = this.render(item)
        root.appendChild(child)
      })
    } else {
      this.setText(root, data.text as string)
    }
    return root
  }
}

// 这里的 implements 是用来约束类的
class Vue extends Dom implements VueCls {
  options: Options
  constructor(options: Options) {
    super()
    this.options = options
    this.init()
  }
  init(): void {
    let data: Vnode = {
      tag: 'div',
      children: [
        {
          tag: 'header',
          text: '我是子节点1',
        },
        {
          tag: 'header',
          text: '我是子节点2',
        },
      ],
    }
    let app =
      typeof this.options.el == 'string'
        ? document.querySelector(this.options.el)
        : this.options.el
    app?.appendChild(this.render(data))
  }
}

new Vue({
  el: '#app',
})
