
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

// 数组对象去重
const uniqueArrayObj = (songs) =>{
  let result = {};
  let finalResult=[];
  for(let i=0;i<songs.length;i++){
      result[songs[i].name]=songs[i];
      //因为songs[i].name不能重复,达到去重效果,且这里必须知晓"name"或是其他键名
  }
  //console.log(result);{"羽根":{name:"羽根",artist:"air"},"晴天":{name:"晴天",artist:"周杰伦"}}
  //现在result内部都是不重复的对象了，只需要将其键值取出来转为数组即可
  for(const item in result){
    finalResult.push(result[item]);
  }
  //console.log(finalResult);[{name:"羽根",artist:"air"},{name:"晴天",artist:"周杰伦"}]
  return finalResult;
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
/**
 * JSON 克隆不支持函数、引用、undefined 等
 * 递归克隆要考虑环
 * 要考虑 Date、RegExp、Function 等特殊对象的克隆方式
 * 要不要克隆 __proto__，如果要克隆，就非常浪费内存；如果不克隆，就不是深克隆。
 */
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


// 汉字转为Unicode字符码表示，汉字一般采用16进制的unicode
function toUnicode(s){ 
  return s.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,function(){
    return "\\u" + RegExp["$1"].charCodeAt(0).toString(16);
  });
}

//url数据获取
function urlData(url) {
	var u = url.split("?");
	if (typeof(u[1]) == "string") {
		u = u[1].split("&");
		var get = {};
		for (var i in u) {
			var j = u[i].split("=");
			get[j[0]] = j[1];
		}
		return get;
	} else {
		return {};
	}
}
//获取url指定name参数
function GetQueryStringRegExp(name,url) {
var reg = new RegExp("(^|\?|&)" + name + "=([^&]*)(\s|&|$)", "i");
if (reg.test(url)) return decodeURIComponent(RegExp.$2.replace(/+/g, " ")); return "";
}　
