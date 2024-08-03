window.onload = function () {
    this.gameScreen = document.getElementById("game-screen")
    const startButton = document.querySelector("#start-button")
    const restartButtons = document.querySelector("#restart-button")
    const gameOver = document.querySelector("#game-over")
    const gameStart = document.querySelector("#game-start")
    const music = document.querySelector("#music")

    let game

    function startGame() {
        game = new Game()
        game.start()
    }

    startButton.onclick = () => {
        startGame()
        music.play()
        music.style.display = "none"
        this.gameScreen.style.display = "block"
        gameStart.style.display = "none"
        restartButtons.forEach(button => button.style.display = "none")
        gameOver.style.display = "none"
    }

    restartButtons.forEach(button => {
        button.onclick = () => {
            location.reload()
        };
    });
}