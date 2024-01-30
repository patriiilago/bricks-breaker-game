window.onload = function () {
    this.gameScreen = document.getElementById("game-screen");

    let game

    function startGame() {
        game = new Game()
        game.start()

    }


    startGame()

}