class Ball {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize


        this.ballSize = {
            width: 30,
            height: 30
        }

        this.ballPosition = {
            left: (this.gameSize.width / 2) - (this.ballSize.width / 2),
            top: (this.gameSize.height - (this.ballSize.height * 2))
        }

        this.ballSpecs = {
            background: 'white',
            borderRadius: 1000
        }

        this.ballDirection = {
            left: 0
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

    }
}