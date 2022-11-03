let cards= ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"]
let valores= [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
let cartasLevantadas= [];
let try1 = []
let try2 = null
let puntuacion1= 0
let puntuacion2= 0
let turn = "Jugador1"
let time 
let tiempo = 15



function random(){
                for (i = 0; i < cards.length; i++) {
                        document.getElementById(cards[i]).innerHTML= ""
                        document.getElementById(cards[i]).disabled = false;}
                valores = valores.sort(() => Math.random()-0.5)
                for(i=0; i<cards.length; i++){
                        document.getElementById(cards[i]).setAttribute("value", `${valores[i]}`)
                        }
                temp();
                }

function actPunt(){
        document.getElementById("player1").setAttribute("value", `${puntuacion1}`);
        document.getElementById("player2").setAttribute("value", `${puntuacion2}`);
}
function clicking(a,b){        
        document.getElementById(b).innerHTML = a;
        (try1[0] == undefined ? (try1.push(a), try1.push(b)) : try2 = a);
        document.getElementById(try1[1]).disabled = true
        if (try2 != null && try1[0] == try2){               
                (turn== "Jugador1" ? puntuacion1++ :  puntuacion2++);
                document.getElementById(b).disabled = true
                cartasLevantadas.push(b)
                cartasLevantadas.push(try1[1]);
                actPunt();
                try1 = [];
                try2 = null
                tiempo= 15
        }
        if(try2 != null){
                setTimeout(changeTurn ,50)
                }
        
}       
function changeTurn(){
        if(try1[1]){document.getElementById(try1[1]).disabled = false;}
        try1 = [];
        try2 = null;
        alert("Cambio de turno");
        turn = (turn == "Jugador1") ? "Jugador2" : "Jugador1";
        document.getElementById("turno").value = turn
        cards2= cards.filter(cardsDown)
        for (i = 0; i < cards2.length; i++) { 
                document.getElementById(cards2[i]).innerHTML = ""
                }
        tiempo= 15
        }
function cardsDown(element){
        return cartasLevantadas.includes(element)==false
}
function temp(){
        if(!time){
        time = setInterval(() => {
                tiempo--;
                if (tiempo == 0) {changeTurn() };
                document.getElementById("temp").value = tiempo
        }, 1000);
        }
}
// function reTemp(){
//         clearInterval(time)
//         time = null
//         time=15
//         }
