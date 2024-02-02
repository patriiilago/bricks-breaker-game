window.onload = function () {
    this.gameScreen = document.getElementById("game-screen")
    const startButton = document.querySelector("#start-button")
    const restartButton = document.querySelector("#restart-button")
    const gameOver = document.querySelector("#game-over")
    const gameStart = document.querySelector("#game-start")
    const music = document.querySelector("#music")
    // const music2 = document.querySelector("#gameovermusic")

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
        restartButton.style.display = "none"
        gameOver.style.display = "none"
        // music2.pause()
    }

    restartButton.onclick = () => {
        location.reload()
    }
}