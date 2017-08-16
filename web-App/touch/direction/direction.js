/*
* @name : slider  
* @description: touch direction
*/

var slider = {
 //判断设备是否支持touch事件
  touch:('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
  //事件
  events:{
    slider:document,
    showElem: null,
    handleEvent:function(event){
     if(event.type == 'touchstart'){
      this.start(event);
     }else if(event.type == 'touchmove'){
      this.move(event);
     }else if(event.type == 'touchend'){
      this.end(event);
     }
    },
    
    //滑动开始
    start:function(event){
     //touches数组对象获得屏幕上所有的touch，取第一个touch
     var touch = event.targetTouches[0];
     //取第一个touch的坐标值
     this.startPos = {x:touch.pageX,y:touch.pageY,time:+new Date};
     //这个参数判断是垂直滚动还是水平滚动
     this.isScrolling = 0;

     this.slider.addEventListener('touchmove',this,false);
     this.slider.addEventListener('touchend',this,false);
    },
    
    //移动
    move:function(event){
     //当屏幕有多个touch或者页面被缩放过，就不执行move操作
     if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
     var touch = event.targetTouches[0];
     endPos = {x:touch.pageX - this.startPos.x, y:touch.pageY - this.startPos.y};
     //isScrolling为1时，表示纵向滑动，0为横向滑动
     this.isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0;
     if(this.isScrolling === 1){
      //阻止触摸事件的默认行为，即阻止滚屏
      event.preventDefault();
     }
    },
    
    //滑动释放
    end:function(event){
     //滑动的持续时间
      var duration = +new Date - this.startPos.time;
      var i = 0;

      var touch = event.changedTouches[0];
      endPos = {x:touch.pageX - this.startPos.x, y:touch.pageY - this.startPos.y, time: +new Date};
      if(Number(duration) > 10){
        if(this.isScrolling === 1){
         //判断是上移还是下移，当偏移量大于10时执行
         if(endPos.y < -10){
          i = 1;
         }else if(endPos.y > 10){
          i = 3;
         }
        }else if(this.isScrolling === 0){
         //判断是左移还是右移，当偏移量大于10时执行
         if(endPos.x > 10){
          i = 2;
         }else if(endPos.x < -10){
          i = 4;
         }
        }
        this.callback(i);
        this.startPos = endPos = null;
        return false;
      }
       
       //解绑事件
      this.slider.removeEventListener('touchmove',this,false);
      this.slider.removeEventListener('touchend',this,false);
    },
    
    //要执行函数
    callback:function(direction){
     //上右下左1234
     switch(direction){
      case 1:
      this.showElem.textContent = 'top'
       break;
      case 2:
       this.showElem.textContent = 'right'
       break;
      case 3:
       this.showElem.textContent = 'bottom'
       break;
      case 4:
       this.showElem.textContent = 'left'
       break;
      default:
       break;
     };
    }
  },
   
 //初始化
  init:function(){
    this.events.showElem = document.getElementById('direction');
    if(!!this.touch) this.events.slider.addEventListener('touchstart',this.events,false);
    //addEventListener第二个参数可以传一个对象，会调用该对象的handleEvent属性
  }
};
