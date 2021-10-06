const readline = require('readline-sync')

let top = 10 //電梯頂層
let bottom = 0 //電梯底層
let floorName = ['B3', 'B2', 'B1', '1', '2', '2M', '3', '5', '6', '7', '8']
let floor = 5 //目前樓層
let targetFloor //到達樓層 //B2 -> [1]

while (true) { //無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' + floorName[floor] + '樓，請問要去幾樓？')

    //判斷輸入樓層是否合理
    //從floorName.indexOf()取出索引值，若為-1代表無此樓
    targetFloor = targetFloor.toUpperCase() //把輸入的小寫轉成大寫
    targetFloor = floorName.indexOf(targetFloor) //索引陣列樓層
    targetFloor = parseInt(targetFloor) //parseInt轉成整數
    if (targetFloor < 0) {
        console.log('請輸入介於' + floorName.toString() + '之間的整數') //toString 輸出所有陣列內容
        continue
    }
    if (targetFloor == floor) {
        console.log('到達樓層');
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
            console.log("電梯在" + floorName[floor] + "樓")
        } else { //up
            while (targetFloor > floor) {
                floor = floor + 1
                console.log('電梯在' + floorName[floor] + '樓')
            }
        }
    }



}

//��踝蕭嚙踝蕭嚙賣�殷蕭
//break ������嚙踝蕭
//continue ��寡��嚙賭��嚙踝蕭嚙踝蕭嚗對蕭嚙質��嚙賣��嚙質��瞏�嚙踝蕭嚙踝蕭嚙踝蕭嚙賢�����嚙踝蕭嚙踝蕭嚙踝蕭嚙踝蕭嚙�

