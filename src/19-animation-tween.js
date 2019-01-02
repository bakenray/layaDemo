// Laya.init(Laya.Browser.width,Laya.Browser.height,Laya.WebGL)
// Laya.stage.bgColor = "#aaa"

// createTween()

// function createTween(){
//     var w = 800
//     var offsetX = Laya.stage.width - w>>1
//     var domeString = 'LayaBox'
//     var letterText 
//     for( var i=0,len = domeString.length;i<len;++i){
//         letterText =createLetter(domeString.charAt(i))
//         letterText.x = w/len*i + offsetX
//         letterText.y = -200
//         // Laya.Tween.from(letterText,{y:-200},1000,Laya.Ease.elasticInOut,null,i*1000)
//         Laya.Tween.to(letterText,{y:300},1000,Laya.Ease.elasticInOut,null,i*1000);
//     }
// }

// function createLetter(char){
//     var letter = new Laya.Text()
//     letter.text = char
//     letter.color = '#fff'
//     letter.font = 'Impact'
//     letter.fontSize = 180
//     Laya.stage.addChild(letter)
//     return letter
// }
