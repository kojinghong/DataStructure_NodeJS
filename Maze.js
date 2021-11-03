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
MAZE[currentRow][currentCol]=2;

//try to find exit
//!(currentRow==exitRow && currentCol==exitCol)
while(currentRow != exitRow || currentCol!=exitCol){
    
    //left
    if(MAZE[currentRow][currentCol-1] == 0){
        MAZE[currentRow][currentCol-1] = 2;
        stack.push(new Point(currentRow, currentCol-1));
        currentCol-=1;
        continue;
    }
    
    //down
    if(MAZE[currentRow+1][currentCol] == 0){
        MAZE[currentRow+1][currentCol] = 2;
        stack.push(new Point(currentRow+1, currentCol));
        currentRow++;
        continue;
    }
    //right
    if( MAZE[currentRow][currentCol+1] == 0){
        MAZE[currentRow][currentCol+1] = 2;
        stack.push(new Point(currentRow, currentCol+1));
        currentCol+=1;
        continue;
    }
    //up
    if(MAZE[currentRow-1][currentCol] == 0){
        MAZE[currentRow-1][currentCol] = 2;
        stack.push(new Point(currentRow-1, currentCol));
        currentRow--;
        continue;
    }
   

    //terminal
    if(stack.length>0){
       //pop previous point
       var prev= stack.pop();
       //current point set to previous point
       currentRow = prev.row;
       currentCol = prev.col;
    }
    else{
        console.log("No solution!");
        break;
    }

}