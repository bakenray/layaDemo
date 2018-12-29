// Laya.init(Laya.Browser.width,Laya.Browser.height,Laya.WebGL)
// // 设置画布背景颜色
// Laya.stage.bgColor = '#efefef'

// Text_InputSingleline()
// Text_InputMultiline()

// function Text_InputSingleline(){
//     var textInput = new Laya.TextInput('单行输入')//创建一个 TextInput 类的实例对象 textInput 。
//     textInput.wordWrap = true;//设置 textInput 的文本自动换行。
//     textInput.fontSize = 30;//设置 textInput 的字体大小。
//     textInput.width = 300;//设置 textInput 的宽度。
//     textInput.height = 100;//设置 textInput 的高度。
//     textInput.x =Laya.Browser.width - textInput.width>>1//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
//     textInput.y = 0;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
//     textInput.bgColor = "#c30c30";
//     textInput.borderColor ="#fff"
//     Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
// }

// function Text_InputMultiline(){
//     var textInput = new Laya.TextInput("多行输入");//创建一个 TextInput 类的实例对象 textInput 。
//     textInput.fontSize = 30;//设置 textInput 的字体大小。
//     textInput.wordWrap = true;//设置 textInput 的文本自动换行。
//     textInput.multiline = true;//设置textInput的多行输入
//     textInput.x = 100;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
//     textInput.y = 300//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
//     textInput.width = 300;//设置 textInput 的宽度。
//     textInput.height = 200;//设置 textInput 的高度。
//     textInput.bgColor = "#c30c30";
//     Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
// }