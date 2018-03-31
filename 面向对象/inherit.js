//js实现继承的方式
// 定义一个动物类
function Animal(name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉！');
    }
}
// 原型方法 将父类的实例作为子类的原型
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
};