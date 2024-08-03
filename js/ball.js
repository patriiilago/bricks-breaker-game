class Ball {
    constructor(gameScreen, gameSize, bar, brick) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.gameEndScreen = document.querySelector("#game-over")
        this.reStartButton = document.querySelector("#restart-button")
        this.music = document.querySelector("#music")
        // music2 = document.querySelector("#gameovermusic")

        this.ballSize = {
            width: 40,
            height: 40
        }

        this.ballPosition = {
            left: (this.gameSize.width / 2) - (this.ballSize.width / 2),
            top: (this.gameSize.height - (this.ballSize.height * 2))
        }

        this.ballSpecs = {
            background: 'white',
            borderRadius: '50%'
        }

        this.ballDirection = {
            left: 1,
            top: 2,

        }

        this.element = document.createElement("div")
        this.element.style.position = 'absolute'
        this.element.style.width = `${this.ballSize.width}px`
        this.element.style.height = `${this.ballSize.height}px`
        this.element.style.top = `${this.ballPosition.top}px`
        this.element.style.left = `${this.ballPosition.left}px`
        this.element.style.backgroundColor = this.ballSpecs.background
        this.element.style.borderRadius = this.ballSpecs.borderRadius

        this.gameScreen.appendChild(this.element)

        this.bar = bar
        this.brick = brick
    }

    moveBall() {
        this.ballPosition.top += this.ballDirection.top
        this.ballPosition.left += this.ballDirection.left

        if (this.ballPosition.top < 0) {
            this.ballPosition.top = 0
            this.ballDirection.top = 1
        }

        if (this.ballPosition.top > this.gameSize.height - this.ballSize.height - 10) {
            if (this.isCollidingWithBar()) {
                this.ballDirection.top = -this.ballDirection.top
            } else {
                console.log("game over")
                this.gameScreen.style.display = "none"
                this.gameEndScreen.style.display = "block"
                this.reStartButton.style.display = "block"
                this.music.pause()
                clearInterval(this.gameInterval)
            }
        }

        if (this.ballPosition.left < 10) {
            this.ballPosition.left = 10
            this.ballDirection.left = 1
        }

        if (this.ballPosition.left > this.gameSize.width - this.ballSize.width) {
            this.ballPosition.left = this.gameSize.width - this.ballSize.width
            this.ballDirection.left = -this.ballDirection.left
        }

        this.updateBallPosition()
    }

    isCollidingWithBar() {
        return (
            this.ballPosition.left + this.ballSize.width > this.bar.barPosition.left &&
            this.ballPosition.left < this.bar.barPosition.left + this.bar.barSize.width
        )
    }

    updateBallPosition() {
        this.element.style.top = `${this.ballPosition.top}px`
        this.element.style.left = `${this.ballPosition.left}px`
    }

    hasCollided(brick) {
        const ballRect = this.element.getBoundingClientRect()
        const brickRect = brick.element.getBoundingClientRect()

        if (
            ballRect.left < brickRect.right &&
            ballRect.right > brickRect.left &&
            ballRect.top < brickRect.bottom &&
            ballRect.bottom > brickRect.top
        ) {
            return true
        } else {
            return false
        }
    }

}

