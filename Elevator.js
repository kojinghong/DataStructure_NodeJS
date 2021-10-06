const readline = require('readline-sync')

let top = 10 //電梯頂層
let bottom = 1 //電梯底層
let floor = 5 //目前樓層
let targetFloor //到達樓層

while (true) { //無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' + floor + '樓，請問要去幾樓？')

    //判斷輸入樓層是否合理
    targetFloor = parseInt(targetFloor) //parseInt轉成整數
    if (isNaN(targetFloor) || targetFloor < bottom || targetFloor > top) {
        console.log('請輸入介於' + bottom + '至' + top + '之間的整數')
        continue
    }
    if (targetFloor == floor) {
        console.log('到達樓層');
        break
    } else {
        //蝘餃����餅０��單炬���璅�撅�
        //floor 蝘餃�� targetfloor
        if (floor > targetFloor) { //Down
            console.log('��餅０敺�銝�......');
            //��寧�� for(���憪���潭��隞嗅�斗��:蝝臬��皜�)
            //while(targetFloor <currentFloor)f
            //for(var i=currentFloor; i>targetFloor;i--)f
            for (; targetFloor < currentFloor; currentFloor--)
                floor = floor - 1
            // currentFloor-=1
            // currentFloor--
            console.log("電梯在" + currentFloor + "樓")
        } else { //up
            console.log('��餅０敺�銝�......')
            while (targetFloor > floor) {
                floor = floor + 1
                console.log('電梯在' + floor + '樓')
            }
        }
    }



}

//��踝蕭嚙踝蕭嚙賣�殷蕭
//break ������嚙踝蕭
//continue ��寡��嚙賭��嚙踝蕭嚙踝蕭嚗對蕭嚙質��嚙賣��嚙質��瞏�嚙踝蕭嚙踝蕭嚙踝蕭嚙賢�����嚙踝蕭嚙踝蕭嚙踝蕭嚙踝蕭嚙�

