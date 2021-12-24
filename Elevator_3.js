const readline = require('readline-sync')

var top = 100 //電梯頂層
var bottom = 0 //電梯底層
var floorName = ['B3', 'B2', 'B1', '1', '2', '2M', '3', '5', '6', '7', '8']
var floor = 5 //目前樓層
var targetFloor //到達樓層 //B2 -> [1]

while (true) { //無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' + floorName[floor] + '樓，請問要去幾樓？')

    //判斷輸入樓層是否合理
    //從floorName.indexOf()取出索引值，若為-1代表無此樓
    targetFloor = targetFloor.toUpperCase() //把輸入的小寫轉成大寫
    targetFloor = floorName.indexOf(targetFloor) //索引陣列樓層
    // targetFloor = parseInt(targetFloor) //parseInt轉成整數
    if (targetFloor < 0) {
        console.log('請輸入介於' + floorName.toString() + '之間的整數') //toString 輸出所有陣列內容
        continue
    }
    //2 用程式建立FloorName 樓層名稱 homework #2 pash() ,pop()s, unshift(),shift()
    //3 讓JS　暫停一段時間後續行　  
    if (targetFloor == floor) {
        setTimeout(() => console.log('到達樓層'), 3000)
        // console.log('到達樓層');
        break
    } else {
        //蝘餃����餅０��單炬���璅�撅�
        //floor 蝘餃�� targetfloor
        if (floor > targetFloor) { //Down
            //��寧�� for(���憪���潭��隞嗅�斗��:蝝臬��皜�)
            //while(targetFloor <currentFloor)
            //for(var i=currentFloor; i>targetFloor;i--)
            for (; targetFloor < floor; floor--)
                floor = floor - 1
            // currentFloor-=1
            // currentFloor--
            setTimeout(() => console.log("電梯在" + floorName[floor] + "樓"), 2000)

        } else { //up
            while (targetFloor > floor) {
                floor = floor + 1
                // setTimeout(console.log("電梯在" + floorName[floor] + "樓"), 2000)
                console.log('電梯在' + floorName[floor] + '樓')
            }
        }
    }



}
