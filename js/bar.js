class Bar {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.barSize = {
            width: 300,
            height: 10
        }

        this.barPosition = {
            left: (this.gameSize.width / 2) - (this.barSize.width / 2),
            top: (this.gameSize.height) - (this.barSize.height * 2),
        }

        this.barSpecs = {
            background: 'white'
        }

        this.barDirection = {
            left: 0
        }

        this.element = document.createElement("img")
        this.element.style.position = 'absolute'
        this.element.style.width = `${this.barSize.width}px`
        this.element.style.height = `${this.barSize.height}px`
        this.element.style.top = `${this.barPosition.top}px`
        this.element.style.left = `${this.barPosition.left}px`
        this.element.style.backgroundColor = this.barSpecs.background

        this.gameScreen.appendChild(this.element)

    }

    moveBar() {
        this.left += this.barDirection
        this.updateBarPosition()
    }

    updateBarPosition() {
        this.element.style.left = `${this.barPosition.left}px`
    }
}



