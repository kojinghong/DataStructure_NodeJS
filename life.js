const LIVE = 1,
    DEAD = 0;

class Life { //類別
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.grid = new Array(); //陣列
        //create 2d array
        for (let r = 0; r < this.row; r++) {
            this.grid.push(new Array());
            for (let c = 0; c < this.col; c++) {
                this.grid[r].push(DEAD);
            }
        }

    }

    // Initinalize(){

    // }

};

Life.prototype.Initialize = function() {
    this.grid[3][4] = LIVE;
    this.grid[3][5] = LIVE;
    this.grid[3][6] = LIVE;
    //this.grid[3][7] = LIVE;
}

Life.prototype.getStatusAt = function(row, col) {
    if (row < 0 || col < 0)
        return DEAD;
    if (row >= this.row || col >= this.col)
        return DEAD;
    return this.grid[row][col];
}
Life.prototype.setStatusAt = function(row, col, status) {
    if (row < 0 || col < 0)
        return false;
    if (row >= this.row || col >= this.col)
        return false;
    this.grid[row][col] = status;
    return true;
}
Life.prototype.neighborCount = function(row, col) {
    var count = 0;
    count += this.getStatusAt(row - 1, col - 1);
    count += this.getStatusAt(row - 1, col);
    count += this.getStatusAt(row - 1, col + 1);
    count += this.getStatusAt(row, col - 1);
    count += this.getStatusAt(row, col + 1);
    count += this.getStatusAt(row + 1, col - 1);
    count += this.getStatusAt(row + 1, col);
    count += this.getStatusAt(row + 1, col + 1);
    return count;
}

Life.prototype.update = function() {
    // var nextGrid = new Array();
    // for (let r = 0; r < this.row; r++) {
    //      nextGrid.push([]);
    //      for (let c = 0; c < this.col; c++) {
    //          nextGrid[r].push( this.grid[r][c] );
    //      }
    // }
    // this.grid; //no duplicate /copy
    var nextGrid = JSON.parse(JSON.stringify(this.grid));

    for (let r = 0; r < this.row; r++) {
        for (let c = 0; c < this.col; c++) {
            var nCount = this.neighborCount(r, c);
            if (nCount == 3 && this.getStatusAt(r, c) == DEAD) //DEAD => LIVE
                nextGrid[r][c] = LIVE;
            if ((nCount < 2 || nCount > 3)) //LIFE=>DEAD 
                nextGrid[r][c] = DEAD;
        }
    }
    this.grid = nextGrid; //OK?

}

class Board {
    constructor(_life) {
        this.game = _life;
        this.size = Math.floor(600 / this.game.row);
        this.ctx2d = document.getElementById("gameBorad").getContext("2d");
        this.ctx2d.fillStyle = "#ff0000";
        this.ctx2d.lineWidth = 0.5;

    }

    draw() {
        this.ctx2d.clearRect(0, 0, 600, 600);
        for (let r = 0; r < this.game.row; r++) {
            for (let c = 0; c < this.game.col; c++) {

                if (this.game.getStatusAt(r, c) == LIVE) {
                    //fill
                    this.ctx2d.fillRect(c * this.size, r * this.size, this.size, this.size);
                    //        this.ctx2d.strokeRect(c*this.size, r*this.size, this.size, this.size);
                    //    }else{
                    //        //stroke
                    //        this.ctx2d.strokeRect(c*this.size, r*this.size, this.size, this.size);
                }
                this.ctx2d.strokeRect(c * this.size, r * this.size, this.size, this.size);
            }

        }
    }
}



//unit test
var game = new Life(30, 30);
//console.log(JSON.stringify(game))
game.Initialize();
// console.log("3,4: "+game.neighborCount(3,4));
// console.log("3,5: "+game.neighborCount(3,5));
// console.log("2,5: "+game.neighborCount(2,5));
var gameBorad = new Board(game);
gameBorad.draw();

function next() {
    game.update();
    gameBorad.draw();
}

function clickHandler(event) {
    var col = Math.floor(event.offsetX / gameBorad.size);
    var row = Math.floor(event.offsetY / gameBorad.size);
    if (game.getStatusAt(row, col) == LIVE)
        game.setStatusAt(row, col, DEAD);
    else
        game.setStatusAt(row, col, LIVE);
    gameBorad.draw();
}
