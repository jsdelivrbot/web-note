/*
	* @name touchDraw 触摸画图
	* @param {string} box_id 画图容器
	* @param {string} log_id 画图log
*/

var touchDraw = function (box_id, log_id) {
	this.container = document.getElementById(box_id);
	this.log_box = document.getElementById(log_id);

	this.ongoingTouches = []
}

touchDraw.prototype = {
	init: function() {
		var clientWidth = document.documentElement.clientWidth
		var cav = document.createElement('canvas');
		var canvasWidth = Math.floor(clientWidth*.6);
		cav.setAttribute('width',canvasWidth);
		cav.setAttribute('height',canvasWidth);
		cav.setAttribute('id', 'canvas');
		cav.textContent = 'Your browser does not support canvas element.'
		this.container.appendChild(cav);
		this.cav = cav
		
		this.posObj = this.cav.getBoundingClientRect()

		this.startup()
	},
	startup: function() {
		var _this = this;
		// var el = document.getElementById("canvas");
	  _this.cav.addEventListener("touchstart", _this.handleStart.bind(this), false);
	  _this.cav.addEventListener("touchend", _this.handleEnd.bind(this), false);
	  _this.cav.addEventListener("touchmove", _this.handleMove.bind(this), false);
	  _this.cav.addEventListener("touchcancel", _this.handleCancel.bind(this), false);
	},
	
	handleStart: function(evt) {
		evt.preventDefault();
	  // var el = document.getElementsByTagName("canvas")[0];
	  var ctx = this.cav.getContext("2d");
	  var touches = evt.changedTouches; //触摸点列表
	        
	  for (var i=0; i<touches.length; i++) {
	    this.ongoingTouches.push(touches[i]);
	    var color = this.colorForTouch(touches[i]);

	    ctx.fillStyle = color;
	    ctx.fillRect(touches[i].pageX - 1 - this.posObj.left, touches[i].pageY - 1 - this.posObj.top, 2, 2);
	  }
	},

	handleMove: function(evt) {
		evt.preventDefault();
	  // var el = document.getElementsByTagName("canvas")[0];  
	  var ctx = this.cav.getContext("2d");
	  var touches = evt.changedTouches;
	  
	  ctx.lineWidth = 2;
	        
	  for (var i=0; i<touches.length; i++) {
	    var color = this.colorForTouch(touches[i]);
	    var idx = this.ongoingTouchIndexById(touches[i].identifier);

	    ctx.fillStyle = color;
	    ctx.beginPath();
	    ctx.moveTo(this.ongoingTouches[idx].pageX - this.posObj.left, this.ongoingTouches[idx].pageY- this.posObj.top);
	    ctx.lineTo(touches[i].pageX - this.posObj.left, touches[i].pageY- this.posObj.top);
	    ctx.closePath();
	    ctx.stroke();
	    this.ongoingTouches.splice(idx, 1, touches[i]);  // swap in the new touch record
	  }
	},
	
	handleEnd: function(evt) {
		evt.preventDefault();
	  // var el = document.getElementsByTagName("canvas")[0];  
	  var ctx = this.cav.getContext("2d");
	  var touches = evt.changedTouches[0];
	  
	  ctx.lineWidth = 2;
	        
	  for (var i=0; i<touches.length; i++) {
	    var color = this.colorForTouch(touches[i]);
	    var idx = this.ongoingTouchIndexById(touches[i].identifier);
	    
	    ctx.fillStyle = color;
	    ctx.beginPath();
	    ctx.moveTo(this.ongoingTouches[i].pageX- this.posObj.left, this.ongoingTouches[i].pageY- this.posObj.top);
	    ctx.lineTo(touches[i].pageX- this.posObj.left, touches[i].pageY- this.posObj.top);

	    this.ongoingTouches.splice(i, 1);  // remove it; we're done
	  }
	},

	handleCancel: function(evt) {
		evt.preventDefault();
	  var touches = evt.changedTouches;
	  
	  for (var i=0; i<touches.length; i++) {
	    ongoingTouches.splice(i, 1);  // remove it; we're done
	  }
	},

	ongoingTouchIndexById: function(idToFind) {
		for (var i=0; i < this.ongoingTouches.length; i++) {
	    var id = this.ongoingTouches[i].identifier;
	    
	    if (id == idToFind) {
	      return i;
	    }
	  }
	  return -1;    // not found
	},
	colorForTouch: function(touch) {
		var id = touch.identifier; //Touch 对象的唯一标识符.
	  id = id.toString(16); // make it a hex digit
	  return "#" + id + id + id;
	}
}