class Game {
    constructor() {

        this.startScreen = document.querySelector("#game-start")
        this.gameScreen = document.querySelector("#game-screen")
        this.gameEndScreen = document.querySelector("#game-over")
        this.reStartButton = document.querySelector("#restart-button")
        this.countPointsElements = document.querySelector("#score")


        this.countPoints = 0

        this.gameSize = {
            width: 1260,
            height: window.innerHeight
        }

        this.bar = undefined

        this.bricks = []
        // this.score = 0;
        // this.rounds = 0;
        this.lives = 1;
        this.gameOver = false;
        this.gameInterval;
        this.gameLoopFrequency = Math.round(1000 / 50);
        // this.gameEndScreen.style.display = "none"
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
        }, 0)
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
                // this.ball.ballDirection.left = -this.ball.ballDirection.left
            }
        }
    }

    displayPoints() {
        this.countPointsElements.innerHTML = `${this.countPoints} points`

    }
    pointCount() {
        this.countPoints += 10
        this.displayPoints()
    }
}