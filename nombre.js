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

function start_player_guess_game(){
    computer_number=generateRandomNumber(1,100);


    show(game1);
    hide(game_selection);

    hide(restart_button1);

    try_button.button.addEventListener("click",function(){
        let player_guess=parseInt(player_input.value);


        if(player_guess<computer_number)
        {
            message1.innerText='Choisissez un nombre plus grand';  
        }else if(player_guess> computer_number) {
            message1.innerText="Choisissez un nombre plus petit";
        }else{
            message1.innerText="Bravo, vous l'avez trouvé";
             show(restart_button1);
        }
      
        player_input.value="";
        
    });
    restart_button1.addEventListener("click",new_game);
}


