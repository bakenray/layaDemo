// Laya.init(550,400)
// // 自定义文件名称
// this.mFontName ='diyFont'
// this.mBitmapFont = new Laya.BitmapFont()
// //不需要扩展名,保证外部fnt与png文件同名

// this.mBitmapFont.loadFont("../bin/h5/weitu.fnt",new Laya.Handler(this,onLoaded))

// function onLoaded(){
//     init()
// }

// function init(){
//     // 如果没有位图字体居中，没放空格， 最好设置一个空格宽度
//     this.mBitmapFont.setSpaceWidth(30)
//     Laya.Text.registerBitmapFont(this.mFontName,this.mBitmapFont)
//     var txt =new Laya.Text()
//     txt.text ='测试文件的文字很长还有英文'
//     txt.width =500
//     txt.wordWrap =true
//     txt.align ='center'
//     txt.font =this.mFontName
//     txt.fontSize =50
//     txt.leading =5
//     Laya.stage.addChild(txt)
// }