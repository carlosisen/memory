
let cards = []
let valores = []
let cartasLevantadas = [];
let try1 = []
let try2 = null
let puntuacion1 = 0
let puntuacion2 = 0
let turn = "Jugador1"
let time
let tiempo = 15


function genera_buttons(a) {
        let tablero = document.getElementById("tablero");
        for (let i = 0; i < a; i++) {
                let botones = document.createElement("button");
                botones.id = i;
                let atributo = document.createAttribute("onclick");
                atributo.value = ("clicking(this.value,this.id)");
                botones.setAttributeNode(atributo);
                tablero.appendChild(botones)
                cards.push(i);
                if (i < a / 2) {
                        valores.push(i);
                        valores.push(i);
                }
        }

}

function random(a) {
        removeTable()
        genera_buttons(a)
        for (i = 0; i < cards.length; i++) {
                document.getElementById(cards[i]).innerHTML = ""
                document.getElementById(cards[i]).disabled = false;
        }

        valores = valores.sort(() => Math.random() - 0.5)
        for (i = 0; i < cards.length; i++) {
                document.getElementById(cards[i]).setAttribute("value", `${valores[i]}`)
        }
        turn = "Jugador1"
        document.getElementById("turno").value = turn
        puntuacion1 = 0
        puntuacion2 = 0
        actPunt()
        cartasLevantadas = []
        tiempo = 15
        try1 = []
        temp();
}

function actPunt() {
        document.getElementById("player1").setAttribute("value", `${puntuacion1}`);
        document.getElementById("player2").setAttribute("value", `${puntuacion2}`);
}
function ganador() {
        reTemp();

        puntuacion1 == cards.length / 4 ?
                document.getElementById("x").innerHTML = " ENHORABUENA! Ganador: Jugador1"
                : document.getElementById("x").innerHTML = " ENHORABUENA! Ganador: Jugador2";
        removeTable()
        document.getElementById("ganador").style.display = "block"

};
function clicking(a, b) {
        if (time) {
                document.getElementById(b).innerHTML = a;
                (try1[0] == undefined ? (try1.push(a), try1.push(b)) : try2 = a);
                document.getElementById(try1[1]).disabled = true
                if (try2 != null && try1[0] == try2) {
                        (turn == "Jugador1" ? puntuacion1++ : puntuacion2++);
                        document.getElementById(b).disabled = true
                        cartasLevantadas.push(b)
                        cartasLevantadas.push(try1[1]);
                        actPunt();
                        try1 = [];
                        try2 = null
                        tiempo = 15
                }
                if (try2 != null) {
                        setTimeout(changeTurn, 50)
                }
                if (puntuacion1 >= cards.length / 4 || puntuacion2 >= cards.length / 4) {
                        setTimeout(ganador, 50);

                }

        }}
function changeTurn() {
        try1 = [];
        try2 = null;
        document.getElementById("cambio-turno").style.display = "block"
        turn = (turn == "Jugador1") ? "Jugador2" : "Jugador1";
        document.getElementById("turno").value = turn
        cards2 = cards.filter(cardsDown)
        for (i = 0; i < cards2.length; i++) {
                document.getElementById(cards2[i]).innerHTML = ""
        }
        for (i = 0; i < cards.length; i++) {
                document.getElementById(i).disabled = true
        }
        reTemp()
}


function cardsDown(element) {
        return cartasLevantadas.includes(element) == false
}
function temp() {
        if (!time) {
                time = setInterval(() => {
                        tiempo--;
                        if (tiempo == 0) { changeTurn() };
                        document.getElementById("t-restante").innerHTML = `Tiempo restante: ${tiempo} segundos`
                }, 1000);
        }
}
function removeTable() {
        let tablero = document.getElementById("tablero");
        while (tablero.firstElementChild) {
                tablero.removeChild(tablero.firstElementChild)
        }
        cards = []
        valores = []

}
function reTemp() {
        clearInterval(time)
        time = null
        tiempo = 15
}
function newStart() {
        document.getElementById("ganador").style.display = "none"
}
function newTurn() {
        document.getElementById("cambio-turno").style.display = "none"
        temp()
        for (i = 0; i < cards.length; i++) {
                document.getElementById(cards2[i]).disabled = false;
        } for (i = 0; i < cartasLevantadas.length; i++) {
                document.getElementById(cartasLevantadas[i]).disabled = true;
        }
}
