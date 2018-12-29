// //初始化舞台
// Laya.init(Laya.Browser.width,Laya.Browser.height);
// //需要切换的图片资源路径
// this.monkey1 = "../bin/h5/logo.png";
// this.monkey2 = "../bin/h5/bg.jpg";

// //切换状态
// this.flag = false;

// //设置舞台背景色
// Laya.stage.bgColor = "#ffffff";
// //加载多张图片，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
// Laya.loader.load([this.monkey1,this.monkey2],Laya.Handler.create(this,graphicsImg));
// function graphicsImg(){
//     //创建一个实例
//     this.img = new Laya.Sprite();
//     //添加到舞台
//     Laya.stage.addChild(this.img);
//     //显示初始化绘制的图片
//     switchImg();
//     //侦听switchImg中图片区域的点击事件，触发后执行switchImg切换纹理绘制
//     this.img.on(Laya.Event.CLICK,this,switchImg);            
//     //设置图片坐标s
//     this.img.pos(100,50);
// }
// function switchImg(){
//     //清空绘制
//     this.img.graphics.clear();
//     //获得要切换的图片资源路径
//     var imgUrl = (this.flag = !this.flag)? this.monkey2:this.monkey1;
//     //获取图片资源
//     var texture = Laya.loader.getRes(imgUrl);
//     //绘制纹理
//     this.img.graphics.drawTexture(texture);                        
//     //设置纹理宽高
//     this.img.size(texture.width, texture.height);   
// }