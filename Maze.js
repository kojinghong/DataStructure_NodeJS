var  MAZE= [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
   ]; 

var currentRow=1, currentCol=1;//start point
var exitRow=8, exitCol=10;

class Point{
    constructor(_row, _col){
        this.row = _row;
        this.col = _col;
    }
    print(){
        return "("+this.row+", "+this.col+")";
    }
}
   
//Stack
var stack=[];
stack.push(new Point(currentRow, currentCol)); //push start point to stack
//try to find exit
//!(currentRow==exitRow && currentCol==exitCol)
while(currentRow != exitRow || currentCol!=exitCol){
    
    //right
    if(MAZE[currentRow][currentCol+1] == 0){
        MAZE[currentRow][currentCol+1] = 2;
        stack.push(new Point(currentRow, currentCol+1)) 
        currentCol+=1;
        continue;
    }
    //up

    //left

    //down


    //terminal


}