"use strict";
// 简易版虚拟Dom
class Dom {
    // 创建节点的方法
    createElement(el) {
        return document.createElement(el);
    }
    // 创建填充文本的方法
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach((item) => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
// 这里的 implements 是用来约束类的
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        let data = {
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
        };
        let app = typeof this.options.el == 'string'
            ? document.querySelector(this.options.el)
            : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    }
}
new Vue({
    el: '#app',
});
