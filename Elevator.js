const readline = require('readline-sync')

let top = 10 //電梯頂層
let bottom = 1 //電梯底層
let floor = 5 //電梯目前樓層
let targetFloor //目標樓層

while (true) { //無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' + floor + '樓，請問要去幾樓呢？')

    //判斷樓層是否合理
    targetFloor = parseInt(targetFloor) //轉成整數
    if (isNaN(targetFloor) || targetFloor < bottom || targetFloor > top) {
        console.log('請輸入介於' + bottom + '到' + top + '之間的樓層')
        continue
    }
    if (targetFloor == floor) {
        console.log('離開電梯');
        break
    } else {
        //移動電梯至欲達樓層
        //floor 移至 targetfloor
        console.log('請稍等');
    }



}

//保留字
//break 中斷
//continue 忽略後面的程式碼，回到迴圈開頭

