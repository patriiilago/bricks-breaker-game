let gameScreenWidth = window.innerWidth * 0.9; // Ancho del contenedor del juego dinámico
let gameScreenHeight = window.innerHeight * 0.9; // Alto del contenedor del juego

let bricksData = [
    {
        posLeft: 100 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 220 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 340 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 460 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 580 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 700 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 820 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 940 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 1060 / gameScreenWidth * 100,
        posTop: 50 / gameScreenHeight * 100,
        color: "red"
    },
    {
        posLeft: 100 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 220 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 340 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 460 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 580 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 700 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 820 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 940 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 1060 / gameScreenWidth * 100,
        posTop: 100 / gameScreenHeight * 100,
        color: "orange"
    },
    {
        posLeft: 100 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 220 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 340 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 460 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 580 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 700 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 820 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 940 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"
    },
    {
        posLeft: 1060 / gameScreenWidth * 100,
        posTop: 150 / gameScreenHeight * 100,
        color: "yellow"

    },
    {
        posLeft: 100 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 220 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 340 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 460 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 580 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 700 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 820 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 940 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 1060 / gameScreenWidth * 100,
        posTop: 200 / gameScreenHeight * 100,
        color: "green"
    },
    {
        posLeft: 100 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 220 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 340 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 460 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 580 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 700 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 820 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 940 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 1060 / gameScreenWidth * 100,
        posTop: 250 / gameScreenHeight * 100,
        color: "blue"
    },
    {
        posLeft: 1060 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 100 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 220 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 340 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 460 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 580 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 700 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 820 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 940 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    },
    {
        posLeft: 1060 / gameScreenWidth * 100,
        posTop: 300 / gameScreenHeight * 100,
        color: "violet"
    }

]

