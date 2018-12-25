// (function(){
//     var Stage = Laya.Stage
//     var WebGL = Laya.WebGL
//     var Sprite =Laya.Sprite
//     var sp
//     (function(){
//                 Laya.Config.isAntialias=true;
//         Laya.init(1136,640,WebGL)
//         drawSomething()

//     })()

//     function drawSomething(){
//         sp =new Sprite
//         Laya.stage.addChild(sp)
//         var path =[
//             ["moveTo", 30, 0],             //画笔移到A点
//             ["arcTo", 500, 0, 500, 30, 30], //p1（500,0）为夹角B，（500,30）为端点p2
//             ["arcTo", 500, 300, 470, 300, 30],//p1（500,300）为夹角C，（470,300）为端点p2
//             ["arcTo", 0, 300, 0, 270, 30], //p1(0,300)为夹角D，（0,270）为端点p2
//             ["arcTo", 0, 0, 30, 0, 30],//p1(0,0)为夹角A，（30,0）为端点p2
//         ]
//         // sp.graphics.drawRect(30,30,100,50,'#ff00ff')  //画方形
//         sp.graphics.drawPath(20,20,path,{fillStyle:'#ff0000'})
//     }
// }
// )()