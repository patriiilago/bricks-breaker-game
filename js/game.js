class Game {
    constructor() {

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


    createBricks() {

        bricksData.forEach((eachBrick) => {

            const newBrick = new Brick(this.gameScreen, this.gameSize, eachBrick.posLeft, eachBrick.posTop, eachBrick.color)
            this.bricks.push(newBrick)
        })

    }


}


