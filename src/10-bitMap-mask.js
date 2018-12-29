
//遮罩
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
//         img.graphics.drawTexture(Laya.loader.getRes(Res),150,150,200,200);
//         //添加到舞台
//         Laya.stage.addChild(img);
        
//         var cMask = new Sprite()
//         cMask.graphics.drawCircle(125,125,50,'#ccc')  //设置原点xy轴和半径
//         cMask.pos(125,125)                            //圆的位置
//         img.mask = cMask
//     }
// })();






// // 颜色滤镜

// Laya.init(1334,750,Laya.WebGL)
// Laya.stage.bgColor = "#ffffff"

// createImg(100,50)

// createRedFilter()
// createGrayFilter()

// // 创建位图

// function createImg(w,h){
//     var Img = new Laya.Sprite()
    
//     //添加到舞台
//     Laya.stage.addChild(Img)

//     // 加载显示图片
//     Img.loadImage('h5/logo.png',w,h)
    
//     return Img
// }

// // 创建红色滤镜位图

// function createRedFilter(){
//     //颜色滤镜矩阵 红色
//     var colorMatrix = 
//     [
//         1,0,0,0,0,  //R
//         0,0,0,0,0,  //G
//         0,0,0,0,0,  //B
//         0,0,0,1,0,  //A
//     ]
//     //创建红色颜色滤镜
//     var redFilter = new Laya.ColorFilter(colorMatrix)
//     var img = createImg(280,50)
//     img.filters = [redFilter]
// }
// //创建灰色滤镜矩阵，灰色

//     function createGrayFilter(){
//         var colorMatrix = 
//         [
//             0.3086,0.6094,0.0820,0,0,  //R
//             0.3086,.6094,0.0820,0,0,  //G
//             0.3086,.6094,0.0820,0,0,  //B
//             0,0,0,1,0,  //A   
//         ]
//         var GrayFilter = new Laya.ColorFilter(colorMatrix)

//         var img = createImg(460,50)
//         img.filters = [GrayFilter]
//     }


// 发光滤镜
// Laya.init(Laya.Browser.width,Laya.Browser.height,Laya.WebGL)
// Laya.stage.bgColor = '#ffffff'

// createImg(100,50)

// createGlowFilter()
// createShadeFilter()

// function createImg(w,h){
//     var Img = new Laya.Sprite()
//     Laya.stage.addChild(Img)
//     Img.loadImage('h5/logo.png',w,h)
//     return Img
// }

// //红色发光滤镜
// function createGlowFilter(){
//     var glowFilter = new Laya.GlowFilter('#ff0000',15,0,0)
//     var img = createImg(350,50)
//     img.filters = [glowFilter]
// }

// //黑色阴影滤镜
// function createShadeFilter(){
//     var glowFilter = new Laya.GlowFilter('#000000',8,8,8)
//     var img = createImg(600,50)
//     img.filters = [glowFilter]
// }


// 模糊滤镜


// Laya.init(1334,750,Laya.WebGL)
// Laya.stage.bgColor = '#ffffff'

// createImg(100,50)

// createBlurFilter()

// function createImg(w,h){
//     var Img = new Laya.Sprite();
//     //添加到舞台
//     Laya.stage.addChild(Img);
//     //加载显示图片，坐标位于100,50
//     Img.loadImage("h5/logo.png",w,h);
//     return Img;
// }

// function createBlurFilter(){
//     var blurFilter = new Laya.BlurFilter()
//     blurFilter.strength = 5
//     var img = createImg(350,50)
//     img.filters = [blurFilter]
// }
