class Game {
    constructor() {

        // vamos a liarla

        this.startScreen = document.querySelector("#game-start")
        this.gameScreen = document.querySelector("#game-screen")
        this.gameEndScreen = document.querySelector("#game-over")

        this.gameSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.bar = undefined

        this.bricks = []
        // this.score = 0;
        // this.rounds = 0;
        this.lives = 1;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = Math.round(1000 / 100);
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
        this.ball = new Ball(this.gameScreen, this.gameSize)
        this.createBricks()
    }

    setEventListeners() {
        // new comment
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
        }, 60)
    }

    updateAll() {
        this.bar.moveBar()
    }


}


