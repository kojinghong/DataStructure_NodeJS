const readline = require('readline-sync')

var top = 10; //電梯頂層
var bottom = 1; //電梯底層
var currentFloor = 5; //目前樓層
var targetFloor; //到達樓層

while (true) { //無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' + floor + '樓，請問要去幾樓？'); //例如輸入3，3傳入targetFloor

    //判斷輸入樓層是否合理，如果不合理，*再讓你輸入一次*
    targetFloor = parseInt(targetFloor) //parseInt轉成整數
    if (isNaN(targetFloor) || targetFloor < bottom || targetFloor > top) { //isNaN沒輸入值，回傳true
        console.log('請輸入介於' + bottom + '至' + top + '之間的整數');
        continue; //continue（繼續）= 跳出迴圈，回到*第10行*。 再問一次你要到幾樓
    }
    
    if (targetFloor == currentFloor) { //到達樓層 = 目前樓層
        console.log('到達樓層'); //顯示到達樓層
        break; //break跳出迴圈，執行迴圈之後的程式
    } else {
        //移動電梯至欲達樓層
     if(targetFloor<currentFloor){ //down 到達樓層小於目前樓層
        console.log("電梯往下..."); 
        while(targetFloor < currentFloor){ 
            currentFloor = currentFloor - 1; //目前樓層-1
            // *第二種方法* currentFloor -= 1; 
            // *第三種方法* currentFloor--; 
            console.log("電梯在"+currentFloor+"樓");
        }
        
     }else{//up
        console.log("電梯往上...");
        while(targetFloor > currentFloor){ //up 到達樓層大於目前樓層
            currentFloor = currentFloor + 1; //目前樓層+1
            // *第二種方法* currentFloor += 1;
            // *第三種方法* currentFloor++;
            console.log("電梯在"+currentFloor+"樓");
        }
     }
    }
}

