let cards= ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"]
let valores= [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
let order= [];
let try1 = null
let try2 = null
let turn = "player1"



function random(){
                for (i = 0; i < cards.length; i++) {
                        document.getElementById(cards[i]).innerHTML= ""}
                order = valores.sort(a => Math.random() <= 0.5 ? 1 : -1)
                for(i=0; i<cards.length; i++){
                        document.getElementById(cards[i]).setAttribute("value", `${order[i]}`)
                        
        }}


function clicking(a,b){
        document.getElementById(b).innerHTML = `${a}`;
        try1 == null ? try1 = a : try2 = a;
        if (try2 != null && try1 == try2){
                document.getElementById(turn).setAttribute("value", +1),
                try1 = null
                try2 = null
        }
        if(try2 != null){
                try1 = null
                try2 = null
        }
        
}
function changeTurn() {
        turn = turn == "player1" ? "player2" : "player1";
}