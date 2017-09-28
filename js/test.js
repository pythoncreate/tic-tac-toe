function isWinner(playerNumbers, winningCombinations) {
    var combLength = 0;
    for (var i in winningCombinations) {
        combLength = winningCombinations.length;
        for (var j in winningCombinations[i]) {
            if (-1 == playerNumbers.indexOf(winningCombinations[i][j]) {
                break;
            }
        }

        if (combLength - 1 == j) {
            return true;
        }
    }

    return false;
}

var test = [2,4,5,8]
var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

if (isWinner(test, winningCombinations)) {
    alert("Win!");
} else {
    alert ("No win.");
}