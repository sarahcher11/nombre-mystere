let message1=document.querySelector('#message1');

message1.innerText="Un petit text";

console.log(input_element.value);


function show(element){
    element.style.display='';
}

function hide(element){
    element.style.display='none';
}

function new_game() { // fonction qui montre l’´ecran de s´election du mode de jeu
    show(game_selection);
    hide(game1);
    hide(game2);
    }


