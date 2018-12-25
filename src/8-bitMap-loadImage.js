
// //初始化舞台
// Laya.init(1334, 750);
// //需要切换的图片资源路径
// this.monkey1= '../bin/h5/bg.jpg'
// this.monkey2= '../bin/h5/logo.png'

// //切换状态
// this.flag = false;
// //设置舞台背景色
// Laya.stage.bgColor = "#ffffff";
// this.img = new Laya.Sprite();
// //显示绘制的图片
// switchImg();
// //侦听switchImg中图片区域的点击事件，触发后执行switchImg切换图片
// this.img.on(Laya.Event.CLICK,this,switchImg);
// //添加到舞台
// Laya.stage.addChild(img);
// function switchImg(){
//     //清空图片
//     this.img.graphics.clear();
//     //获得要切换的图片资源路径
//     var imgUrl = (this.flag = !this.flag)? this.monkey1:this.monkey2;
//     //加载显示图片，坐标位于100,50
//     this.img.loadImage(imgUrl, 100, 50);
// }