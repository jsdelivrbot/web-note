/*
 
 * web の Big Data test
 * 
 * */

// 简单创建
var a = new Array(1e6).fill(0);

var b = a.map((val, ix) => ({id: ix}));

var c = a.map((val, ix) => ({id: ix, shape: 'square', size: 10.5, color: 'green'}))


//利用class ES6

class Shape {
  constructor (id, shape = 'square', size = 10.5, color = 'green') {
    this.x = x; //  坐标x轴
    this.y = y; //  坐标y轴
    Object.assign(this, {id, shape, size, color})
  }
}

let a = new Array(1e6).fill(0);
let b = a.map((val, ix) => new Shape(ix));

//添加一层数据层，原型链 
// b中属性方法的成为共享，初始
let proto = new Shape(0);
function newTwoHeaded (ix) {
    const obj = Object.create(proto);
    obj.id = ix;
    return obj
}
let c = a.map((val, ix) => newTwoHeaded(ix));


//实例

class ShapeMaker {
    constructor () {
        Object.assign(this, ShapeMaker.defaults())
    }
    static defaults () {
        return {
            id: null,
            x: 0,
            y: 0,
            shape: 'square',
            size: 0.5,
            color: 'red',
            strokeColor: 'yellow',
            hidden: false,
            label: null,
            labelOffset: [0, 0],
            labelFont: '10px sans-serif',
            labelColor: 'black'
        }
    }
    newShape (id, x, y) {
        const obj = Object.create(this);
        return Object.assign(obj, {id, x, y})
    }
    setDefault (name, value) { //改写默认
        this[name] = value;
    }
    getDefault (name) {
        return this[name]
    }
}

let shapeProto = new ShapreMaker();
let d = a.map((val, ix) => shapeProto.newShape(ix, ix/10, -ix/10))

//所有属性无法共享，而是各自拷贝了一份
function fatShape (id, x, y) {
    const a = new shapeMaker();
    return Object.assign(a, {id, x, y})
}

let e = a.map((val, ix) => fatShape(ix, ix/10, -ix/10))


shapeProto.setDefault('shape', 'circle');
d.every((item) => item.shape === 'square'); // false