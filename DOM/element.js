// 文档本身是文档节点
// 所有 HTML 元素是元素节点
// 所有 HTML 属性是属性节点
// HTML 元素内的文本是文本节点
// 注释是注释节点
var bodyEle = document.getElementsByTagName("body")[0];
bodyEle.nodeName;
bodyEle.innerHTML; //包括标签
bodyEle.innerText; // 不包括标签的所有内容
bodyEle.appendChild(Element)// 添加节点
bodyEle.removeChild(Element)//删除节点
bodyEle.childNodes;//子节点