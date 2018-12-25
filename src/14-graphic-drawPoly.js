// (function(){
//     var Sprite = Laya.Sprite
//     var WebGL = Laya.WebGL
//     var Stage = Laya.Stage
//     var sp

//     (function(){
//         //消除矢量绘制的锯齿，但会增加性能消耗
//         Laya.Config.isAntialias=true;

//         Laya.init(500,300,WebGL)
//         drawSomething()
//     })()

//     function drawSomething(){
//         sp =new Sprite
//         Laya.stage.addChild(sp)
//         sp.graphics.drawPoly(150,30,[0,100,50,0,100,100],'#ffff00')
//     }
// })()