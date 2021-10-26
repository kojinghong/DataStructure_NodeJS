const readline = require("readline-sync");

var row = 6, col = 6;
// var aryBox=[[0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0]];
var aryBox = [];
var aryVisited = []
for (let r = 0; r < row; r++) { // 把陣列的數字打亂
    aryBox.push([]);
    aryVisited.push([]);
    for (let c = 0; c < col; c++) {
        aryBox[r][c] = Math.floor(Math.random() * row) + "," + Math.floor(Math.random() * col); //"r,c"
        aryVisited[r][c] = 0;
    }
}


for (r = 0; r < 6; r++) {
    for (c = 0; c < 6; c++) {
        var startR = r
        var startC = c
        if (isNaN(startR) || isNaN(startC) || startR < 0 || startR >= row || startC < 0 || startC >= col) { //如果使用者亂打會顯示錯誤
            console.log("Input error! ");
            continue;
        }
        var idx = aryBox[startR][startC].split(",");//idx[0]=>row idx[1]=>col
        aryVisited[startR][startC] = 1;
        console.log("Visit:" + startR + ", " + startC);
        //loop
        while (true) {
            var nextR = parseInt(idx[0]);
            var nextC = parseInt(idx[1]);
            if (aryVisited[nextR][nextC] == 1) {
                console.log("Game over!");
                continue;
            } {
                var idx = aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col
                aryVisited[nextR][nextC] = 1;
                console.log("Visit:" + nextR + ", " + nextC);
            }
        }
        
    }

}