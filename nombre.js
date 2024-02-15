let message1 = document.getElementById('message1');
let restart_button1 = document.getElementById("restart_button1");
let game1 = document.getElementById("game1");
let game2 = document.getElementById('game2');
let try_button = document.getElementById("try_button");
let game_selection=document.getElementById('game_selection');
message1.innerText = "Un petit texte";

console.log(player_input.value); // Utilisez player_input au lieu de input_element

function show(element) {
    element.style.display = '';
}

function hide(element) {
    element.style.display = 'none';
}

function new_game() { 
    show(game_selection);
    hide(game1);
    hide(game2);
}

function start_player_guess_game() {
    let computer_number = Math.floor(Math.random() * 100) + 1;

    show(game1);
    hide(game_selection);
    hide(restart_button1);

    try_button.addEventListener("click", function() {
        let player_input = document.getElementById("player_input");
        let player_guess = parseInt(player_input.value);

        if (player_guess < computer_number) {
            message1.innerText = 'Choisissez un nombre plus grand';  
        } else if (player_guess > computer_number) {
            message1.innerText = "Choisissez un nombre plus petit";
        } else {
            message1.innerText = "Bravo, vous l'avez trouvé";
            show(restart_button1);
        }
      
        player_input.value = "";
    });
    
    restart_button1.addEventListener("click", new_game);
}

let start_game1 = document.getElementById('start_game1');
start_game1.addEventListener("click", start_player_guess_game);
