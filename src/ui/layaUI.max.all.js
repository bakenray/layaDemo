var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var aniDemoUI=(function(_super){
		function aniDemoUI(){
			
		    this.ani1=null;

			aniDemoUI.__super.call(this);
		}

		CLASS$(aniDemoUI,'ui.aniDemoUI',_super);
		var __proto__=aniDemoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(aniDemoUI.uiView);

		}

		aniDemoUI.uiView={"type":"View","props":{"width":300,"height":300},"child":[{"type":"Image","props":{"y":1,"x":0,"width":66,"skin":"comp/image.png","height":102},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":86,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":82,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5},{"value":48,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":97,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15},{"value":121,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20},{"value":105,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":26}],"x":[{"value":97,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":94,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5},{"value":87,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":115,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":15},{"value":131,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":20},{"value":117,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":26}],"width":[{"value":66,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":86,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":5},{"value":122,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":10},{"value":68,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":15},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":20},{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":26}],"height":[{"value":102,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":134,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":5},{"value":191,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":10},{"value":107,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":15},{"value":57,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":20},{"value":101,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":26}]}}],"name":"ani1","id":1,"frameRate":60,"action":2}]};
		return aniDemoUI;
	})(View);