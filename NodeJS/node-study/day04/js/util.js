/**
 * Created by BFD_707 on 2016/2/3.
 */
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

//������һ����������Base ��һ���̳���Base ��Sub��Base �������ڹ��캯��
// �ڶ�������Ժ�һ��ԭ���ж���ĺ�����ͨ��util.inherits ʵ�ּ̳�