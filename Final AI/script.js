function initializePuzzle(puzzleId, shuffleButtonId, solveButtonId, statusId, timerId) {
    const puzzleContainer = document.getElementById(puzzleId);
    const shuffleButton = document.getElementById(shuffleButtonId);
    const solveButton = document.getElementById(solveButtonId);
    const statusText = document.getElementById(statusId);
    const timerElement = document.getElementById(timerId);

    let board = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // Initial goal state
    const goalState = [...board];
    let timer;
    let startTime;

    function initPuzzle() {
        renderPuzzle();
        statusText.textContent = "Arrange the tiles to match the goal!";
        resetTimer();
    }

    function renderPuzzle() {
        puzzleContainer.innerHTML = "";
        board.forEach((value, index) => {
            const tile = document.createElement("div");
            tile.className = "tile";
            if (value === 0) {
                tile.classList.add("blank");
            } else {
                tile.textContent = value;
                tile.addEventListener("click", () => moveTile(index));
            }
            puzzleContainer.appendChild(tile);
        });
    }

    function moveTile(index) {
        const blankIndex = board.indexOf(0);
        const validMoves = [index - 1, index + 1, index - 3, index + 3];

        if (validMoves.includes(blankIndex) && isValidMove(index, blankIndex)) {
            [board[index], board[blankIndex]] = [board[blankIndex], board[index]];
            renderPuzzle();
            checkWin();
        }
    }

    function isValidMove(index, blankIndex) {
        const row = Math.floor(index / 3);
        const blankRow = Math.floor(blankIndex / 3);
        return row === blankRow || Math.abs(index - blankIndex) === 3;
    }


    function shufflePuzzle() {
        for (let i = 0; i < 100; i++) {
            const blankIndex = board.indexOf(0);
            const possibleMoves = [blankIndex - 1, blankIndex + 1, blankIndex - 3, blankIndex + 3]
                .filter((move) => move >= 0 && move < 9 && isValidMove(blankIndex, move));
            const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            [board[blankIndex], board[randomMove]] = [board[randomMove], board[blankIndex]];
        }
        renderPuzzle();
        statusText.textContent = "Puzzle shuffled! Start playing.";
        startTimer();
    }

    function solvePuzzle() {
        fetch("/solve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ board, goal: goalState }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.solution) {
                    statusText.textContent = "Solution: " + data.solution.join(", ");
                } else {
                    statusText.textContent = "No solution found!";
                }
            });
    }

    function checkWin() {
        if (board.join() === goalState.join()) {
            statusText.textContent = "Congratulations! You solved the puzzle!";
            clearInterval(timer);
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            statusText.textContent += ` Time taken: ${elapsedTime} seconds.`;
        }
    }

    function startTimer() {
        resetTimer();
        startTime = Date.now();
        timer = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            timerElement.textContent = `Time: ${elapsedTime}s`;
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timerElement.textContent = 'Time: 0s';
    }

    shuffleButton.addEventListener("click", shufflePuzzle);
    solveButton.addEventListener("click", solvePuzzle);

    initPuzzle();
}

// Initialize two separate puzzles
initializePuzzle("puzzle1", "shuffle1", "solve1", "status1", "timer1");
initializePuzzle("puzzle2", "shuffle2", "solve2", "status2", "timer2");
