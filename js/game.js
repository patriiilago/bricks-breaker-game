class Game {
    constructor() {

        this.startScreen = document.querySelector("#game-start")
        this.gameScreen = document.querySelector("#game-screen")
        this.gameEndScreen = document.querySelector("#game-over")
        this.gameWonScreen = document.querySelector("#game-won")
        this.restartButtons = document.querySelectorAll(".restart-button")
        this.countPointsElements = document.querySelector("#score")
        this.music = document.querySelector("#music")
        this.countPoints = 0

        this.gameSize = {
            width: 1260,
            height: window.innerHeight
        }

        this.bar = undefined
        this.bricks = []
        this.lives = 1
        this.gameOver = false
        this.gameInterval
        this.gameLoopFrequency = Math.round(1000 / 0)
        this.restartButtons.forEach(button => {
            button.addEventListener("click", () => this.resetGame())
        })


    }

    start() {
        this.setGameDimensions()
        this.createElements()
        this.setEventListeners()
        this.startGameLoop()
    }

    setGameDimensions() {
        this.gameScreen.style.width = `${this.gameSize.width}px`
        this.gameScreen.style.height = `${this.gameSize.height}px`
    }

    createElements() {
        this.bar = new Bar(this.gameScreen, this.gameSize)
        this.ball = new Ball(this.gameScreen, this.gameSize, this.bar, this.bricks)
        this.createBricks()
    }

    setEventListeners() {
        document.onkeydown = event => {
            const key = event.key
            if (key === 'ArrowLeft') this.bar.moveLeft()
            if (key === 'ArrowRight') this.bar.moveRight()
        }
    }


    createBricks() {

        bricksData.forEach((eachBrick) => {
            const newBrick = new Brick(this.gameScreen, this.gameSize, eachBrick.posLeft, eachBrick.posTop, eachBrick.color)
            this.bricks.push(newBrick)
        })
    }

    startGameLoop() {
        this.gameInterval = setInterval(() => {
            this.updateAll()
            this.checkCollision()
            this.checkGameOver()
            this.checkGameWon()
        }, this.gameLoopFrequency)
    }

    updateAll() {
        this.bar.moveBar()
        this.ball.moveBall()
        this.displayPoints()
    }

    checkCollision() {
        for (let i = 0; i < this.bricks.length; i++) {
            if (this.ball.hasCollided(this.bricks[i])) {
                this.bricks[i].element.remove()
                this.bricks.splice(i, 1)
                this.ball.ballDirection.top = -this.ball.ballDirection.top
                this.pointCount()
            }
        }
        if (this.ball.hasCollidedBottom()) {
            this.lives--;
            if (this.lives <= 0) {
                this.gameOver = true;
                this.checkGameOver();
            }
        }
    }

    checkGameOver() {
        if (this.gameOver || this.lives <= 0) {
            clearInterval(this.gameInterval);
            this.gameScreen.style.display = "none";
            this.gameEndScreen.style.display = "block";
            this.music.pause();
        }
    }

    checkGameWon() {
        if (this.bricks.length === 0) {
            clearInterval(this.gameInterval)
            this.gameScreen.style.display = "none"
            this.gameWonScreen.style.display = "block"
            this.music.pause()
        }
    }

    displayPoints() {
        this.countPointsElements.innerHTML = `${this.countPoints} points`

    }
    pointCount() {
        this.countPoints += 10
        this.displayPoints()
    }

    resetGame() {
        location.reload()
    }
}