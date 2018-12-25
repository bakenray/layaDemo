// (function()
// {
//       var Sprite = Laya.Sprite;
//       var Texture = Laya.Texture;
//       var Handler = Laya.Handler;
//       var Res;
//       var img;
//     (function()
//     {
//         Laya.init(1136,640);
//         //设置舞台背景色
//         Laya.stage.bgColor = "#ffffff"      
//         //资源路径
//         Res = "../bin/h5/logo.png";        
//         //先加载图片资源，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
//         Laya.loader.load(Res,Handler.create(this,graphicsImg));   
//     })();

//     function graphicsImg()
//     {
//         img = new Sprite();
//         //获取图片资源，绘制到画布
//         img.graphics.drawTexture(Laya.loader.getRes(Res),150,50);
//         //添加到舞台
//         Laya.stage.addChild(img);
//     }
// })();