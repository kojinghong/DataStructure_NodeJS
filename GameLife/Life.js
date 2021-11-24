const LIVE=1, DEAD=0; 

class Life {
    constructor(_row,_col){
        this.row = _row;
        this.col = _col;
        this.grid = new Array();
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

Life.prototype.Initialize = function(){
    this.grid[3][4] = LIVE;
    this.grid[3][5] = LIVE;
    this.grid[3][6] = LIVE;
    this.grid[3][7] = LIVE;
}

Life.prototype.getStatusAt = function(row, col){
    if(row<0 || col <0)
       return DEAD;
    if(row >= this.row || col >= this.col)  
       return DEAD;
    return this.grid[row][col];
}

Life.prototype.neighborCount = function(row, col){
    var count=0;
    count += this.getStatusAt(row-1, col-1);
    count += this.getStatusAt(row-1, col);
    count += this.getStatusAt(row-1, col+1);
    count += this.getStatusAt(row, col-1);
    count += this.getStatusAt(row, col+1);
    count += this.getStatusAt(row+1, col-1);
    count += this.getStatusAt(row+1, col);
    count += this.getStatusAt(row+1, col+1);
    return count;
}

var game = new Life(100,100);
game.Initialize();
console.log("3,4: "+game.neighborCount(3,4));
console.log("3,5: "+game.neighborCount(3,5));
console.log("2,5: "+game.neighborCount(2,5));