

initialPosition = []
finalPostion = []

minNumSteps = 20000

function isInsideBoard(position) {
    x = position[0]
    y = position[1]

    return (x>=0 && x<8 && y>=0 && y<8);

}

function posToString(position) {
    return position[0]+","+position[1];
}

function nextPositions(position) {
    x = position[0]
    y = position[1]
    return[ [x-2,y+1],[x-2, y-1],[x+2,y+1],[x+2,y-1],[x-1,y+2],[x-1,y-2],[x+1,y+2],[x+1,y-2]]
}

function func(startPosition, finalPosition, numSteps) {
    if(posToString(startPosition) == posToString(finalPosition)) {
        minNumSteps = Math.min(minNumSteps,numSteps)
        return;
    }
    if(isInsideBoard(startPosition)) {
        nextPositionsList = nextPositions(startPosition);
        for(let pos of nextPositionsList) {
            func(pos, finalPosition, numSteps+1)
        }
    }
}