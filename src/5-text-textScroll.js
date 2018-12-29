// Laya.init(Laya.Browser.width,Laya.Browser.height,Laya.WebGL)

// createText()

// function createText(){
//     this.txt =new Laya.Text()
//     this.txt.overflow = Laya.Text.SCROLL
//     this.txt.text ="Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//     "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！"
//     this.txt.size(400,200)
//     this.txt.x =Laya.stage.width - this.txt.width>>1
//     this.txt.y =Laya.stage.height -this.txt.height>>1
//     this.txt.borderColor ='#ffff00'
//     this.txt.fontSize =20
//     this.txt.color = '#ffffff'
//     Laya.stage.addChild(this.txt)
//     this.txt.on(Laya.Event.MOUSE_DOWN,this,startScrollText)
// }
// // 开始滚动文本
// function startScrollText(){
//     this.prevX =this.txt.mouseX
//     this.prevY =this.txt.mouseY
//     Laya.stage.on(Laya.Event.MOUSE_MOVE,this,scrollText)
//     Laya.stage.on(Laya.Event.MOUSE_UP,this,finishScrollText)
// }

// // 停止滚动文本
// function finishScrollText(){
//     Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText)
//     Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText)
// }

// // 鼠标滚动文本
// function scrollText(){
//     var nowX =this.txt.mouseX
//     var nowY =this.txt.mouseY
//     this.txt.scrollX += this.prevX - nowX
//     this.txt.scrollY += this.prevY -nowY
//     this.prevX = nowX
//     this.prevY = nowY
// }