
//千分符
const numPoints = (str) => {
	str = str+'';
	return str.replace(/(?=(?!\b)(\d{3})+$)/g,',');
};

//非空对象
const emptyObj = (obj) => { //json 判断属性
  for (var prop in obj){
    if(obj.hasOwnProperty(prop))
    {
      return false;
    }
  }
  return true;
}

//单位数变多位数
const toDouble = (num) => {
  let str = num.toString()
  str = str > 10 ? str : '0'+str;
  return str
}

// 数组去重
const uniqueArray = (array) => {
  var r = [];
  for(var i = 0, l = array.length; i < l; i++) {
    for(var j = i + 1; j < l; j++)
      if (array[i] === array[j]) j = ++i;
    r.push(array[i]);
  }
  return r;
}

//对象判等
const isEquivalent = (a, b) => {
    // 获取对象属性的所有的键
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // 如果键的数量不同，那么两个对象内容也不同
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0, len = aProps.length; i < len; i++) {
        var propName = aProps[i];

        // 如果对应的值不同，那么对象内容也不同
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}

//三角函数画直线中间的箭头
const drawLineArrow = (x1,y1,x2,y2) =>{  
      var path;  
      var slopy,cosy,siny;  
      var Par=10.0;  
      var x3,y3;  
      slopy=Math.atan2((y1-y2),(x1-x2));     
      cosy=Math.cos(slopy);     
      siny=Math.sin(slopy);   
       
      path="M"+x1+","+y1;  
           
      x3=(Number(x1)+Number(x2))/2;  
      y3=(Number(y1)+Number(y2))/2;  
  
  
      path +=" L"+x3+","+y3;  
    
      path +=" L"+(Number(x3)+Number(Par*cosy-(Par/2.0*siny)))+","+(Number(y3)+Number(Par*siny+(Par/2.0*cosy)));  
      path +=" L"+x3+","+y3; 
      path +=" L"+(Number(x3)+Number(Par*cosy+Par/2.0*siny)+","+ (Number(y3)-Number(Par/2.0*cosy-Par*siny)));  

      path +=" L"+x3+","+y3 + " L"+x2+","+y2;  
  
  
      return path;  
}  

//深拷贝
const deepCopy = (o) => {
  if (o instanceof Array) {
      var n = [];
      for (var i = 0; i < o.length; ++i) {
          n[i] = deepCopy(o[i]);
      }
      return n;

  } else if (o instanceof Object) {
      var n = {}
      for (var i in o) {
          n[i] = deepCopy(o[i]);
      }
      return n;
  } else {
      return o;
  }
}

//类似 ES6中的object.assign(obj1, obj2) ,对象合并
const extend = (obj1,obj2) =>{
  for(var key in obj2){
    if(obj1.hasOwnProperty(key)&&obj1[key])continue;//有相同的属性则略过
    obj1[key]=obj2[key];
  }
  return obj1;
}
//取最大
const maxNum = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
