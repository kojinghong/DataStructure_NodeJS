var poker = [];

for(var i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            poker.push((parseInt(i%13)+1)+"H");
            break;
        case 1:
            poker.push((parseInt(i%13)+1)+"S");
            break;
        case 2:
            poker.push((parseInt(i%13)+1)+"C");
            break;
        case 3:
            poker.push((parseInt(i%13)+1)+"D");
    }
   
}

console.log(poker.toString());
var player1 = [], player2 = [], player3 = [], player4 = [];

for (let i = 0; i < poker.length;) {
    var rand = Math.floor(Math.random() * poker.length);

    player1.push(poker[rand]);
    poker.splice(rand, 1);

    var rand = Math.floor(Math.random() * poker.length);

    player2.push(poker[rand]);
    poker.splice(rand, 1);

    var rand = Math.floor(Math.random() * poker.length);

    player3.push(poker[rand]);
    poker.splice(rand, 1);

    var rand = Math.floor(Math.random() * poker.length);

    player4.push(poker[rand]);
    poker.splice(rand, 1);

}
function compare(a, b) {
    if (b.charCodeAt(0) == a.charCodeAt(0)) {
        //compare charAt(1), charAt(2)
    } else {
        return b.charCodeAt(0) - a.charCodeAt(0)
    }
}

console.log("Player1:" + player1)
player1.sort(compare);
console.log("Player1:" + player1)

console.log("Player2:" + player2)
player2.sort(compare)
console.log("Player2:" + player2)

console.log("Player3:" + player3)
player3.sort(compare)
console.log("Player3:" + player3)

console.log("Player4:" + player4)
player4.sort(compare)
console.log("Player4:" + player4)