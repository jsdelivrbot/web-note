/**
 * Created by BFD_707 on 2016/1/20.
 */
//�����Ա����
function Hello(){
    var name;
    this.setName = function(thyName){
        name=thyName;
    };
    this.sayHello = function(){
        console.log('Hello'+name);
    };
}
//�����ⲿ���ʽӿ�,���exports������exports����ĳ�Ա����
exports.world=function(){
    console.log('Hello World!');
};
//����ģ��ӿڣ�ģ��ӿڵ�Ψһ�仯��ʹ�� module.exports = Hello ������exports.world = function(){}��
// ���ⲿ���ø�ģ��ʱ����ӿڶ������Ҫ����� Hello ������������ԭ�ȵ� exports��
module.exports=Hello;