var poker=[];
var color=[];
var player1=[], player2=[], player3=[],player4=[];
var color1=[], color2=[], color3=[],color4=[];
for (var i = 0; i < 52; i++) {
    switch (parseInt(i / 13)) {
        case 0:
            poker.push((parseInt(i % 13) + 1));
            color.push("紅心");
            break;
        case 1:
            poker.push((parseInt(i % 13) + 1));
            color.push("黑桃");
            break;
        case 2:
            poker.push((parseInt(i % 13) + 1));
            color.push("梅花");
            break;
        case 3:
            poker.push((parseInt(i % 13) + 1));
            color.push("菱形");
    }
}

for (let i = 0; i < poker.length; ) {
    var rand = Math.floor(Math.random() * poker.length);
    var rand2 = Math.floor(Math.random() * color.length);
    player1.push(poker[rand]);
    color1.push(color[rand2]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    player2.push(poker[rand]);
    color2.push(color[rand2]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    player3.push(poker[rand]);
    color3.push(color[rand2]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    player4.push(poker[rand]);
    color4.push(color[rand2]);
    poker.splice(rand,1);
    
}

player1.sort(function(a, b) {
    return b - a;
  });
console.log("Player1:"+player1+color1)

player2.sort(function(a, b) {
    return b - a;
  });
console.log("Player2:"+player2+color2)

player3.sort(function(a, b) {
    return b - a;
  });
console.log("Player3:"+player3+color3)

player4.sort(function(a, b) {
    return b - a;
  });
console.log("Player4:"+player4+color4)
