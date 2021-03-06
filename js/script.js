{   const playGame = function(playerInput){
        clearMessages();
        
        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return "nożyce";
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
                }
        }
        
        //Indicate player move
        const playerMove = getMoveName(playerInput);

        // Generate computer move
        const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
        console.log('Ruch komputera to: ' + computerMove);


        const displayResult = function(argComputerMove, argPlayerMove){
            console.log('moves:', argComputerMove, argPlayerMove);
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                    printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                    printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                    printMessage('Ty wygrywasz!');
            } else if (argPlayerMove == 'nieznany ruch') {
                    printMessage('Dałeś mi wygrać! Następnym razem wybierz 1, 2 lub 3.');
            } else {
                    printMessage ('Przegranko :(');
            }
            
        }

        //Show who win
        displayResult(computerMove, playerMove);
    }

    document.getElementById('play-rock').addEventListener('click', function(){playGame(1);});
    document.getElementById('play-paper').addEventListener('click', function(){playGame(2);});
    document.getElementById('play-scissors').addEventListener('click', function(){playGame(3);}); 

}