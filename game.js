//Tic-Tac-Toe
function change_turn(){
    const player_turn= document.getElementById('turn').innerHTML;
    if (player_turn === 'Turn = Player1') {
        document.getElementById('turn').innerHTML = 'Turn = Player2';
    }
    else{
        document.getElementById('turn').innerHTML = 'Turn = Player1';
    }
}
    function change_txt1(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block1').innerHTML='0';
        }
        else{
            document.getElementById('block1').innerHTML='1';
        }
        change_turn();
    }
    function change_txt2(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block2').innerHTML='0';
        }
        else{
            document.getElementById('block2').innerHTML='1';
        }
        change_turn();
    }
    function change_txt3(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block3').innerHTML='0';
        }
        else{
            document.getElementById('block3').innerHTML='1';
        }
        change_turn();
    }
    function change_txt4(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block4').innerHTML='0';
        }
        else{
            document.getElementById('block4').innerHTML='1';
        }
        change_turn();
    }
    function change_txt5(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block5').innerHTML='0';
        }
        else{
            document.getElementById('block5').innerHTML='1';
        }
        change_turn();
    }
    function change_txt6(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block6').innerHTML='0';
        }
        else{
            document.getElementById('block6').innerHTML='1';
        }
        change_turn();
    }
    function change_txt7(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block7').innerHTML='0';
        }
        else{
            document.getElementById('block7').innerHTML='1';
        }
        change_turn();
    }
    function change_txt8(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block8').innerHTML='0';
        }
        else{
            document.getElementById('block8').innerHTML='1';
        }
        change_turn();
    }
    function change_txt9(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block9').innerHTML='0';
        }
        else{
            document.getElementById('block9').innerHTML='1';
        }
        change_turn();
    }

