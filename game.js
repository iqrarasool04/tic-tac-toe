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
            document.getElementById('block1').style.fontSize='25px';
            document.getElementById('block1').innerHTML='0';
        }
        else{
            document.getElementById('block1').style.fontSize='25px';
            document.getElementById('block1').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt2(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block2').style.fontSize='25px';
            document.getElementById('block2').innerHTML='0';
        }
        else{
            document.getElementById('block2').style.fontSize='25px';
            document.getElementById('block2').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt3(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block3').style.fontSize='25px';
            document.getElementById('block3').innerHTML='0';
        }
        else{
            document.getElementById('block3').style.fontSize='25px';
            document.getElementById('block3').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt4(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block4').style.fontSize='25px';
            document.getElementById('block4').innerHTML='0';
        }
        else{
            document.getElementById('block4').style.fontSize='25px';
            document.getElementById('block4').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt5(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block5').style.fontSize='25px';
            document.getElementById('block5').innerHTML='0';
        }
        else{
            document.getElementById('block5').style.fontSize='25px';
            document.getElementById('block5').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt6(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block6').style.fontSize='25px';
            document.getElementById('block6').innerHTML='0';
        }
        else{
            document.getElementById('block6').style.fontSize='25px';
            document.getElementById('block6').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt7(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block7').style.fontSize='25px';
            document.getElementById('block7').innerHTML='0';
        }
        else{
            document.getElementById('block7').style.fontSize='25px';
            document.getElementById('block7').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt8(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block8').style.fontSize='25px';
            document.getElementById('block8').innerHTML='0';
        }
        else{
            document.getElementById('block8').style.fontSize='25px';
            document.getElementById('block8').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
    function change_txt9(){
        if (document.getElementById('turn').innerHTML === 'Turn = Player1'){
            document.getElementById('block9').style.fontSize='25px';
            document.getElementById('block9').innerHTML='0';
        }
        else{
            document.getElementById('block9').style.fontSize='25px';
            document.getElementById('block9').innerHTML='1';
        }
        change_turn();
        setTimeout(function(){
            if (checkWin()){
                return;
            }
            else{
                checkDraw();
            }
        },0);
    }
function checkDraw(){
    if(!checkWin){
        alert('It\'s a Draw');
    }
}
function checkWin(){
    if ((document.getElementById('block1').innerHTML==='0' &&
        document.getElementById('block4').innerHTML==='0' &&
        document.getElementById('block7').innerHTML==='0') ||
        (document.getElementById('block2').innerHTML==='0' &&
        document.getElementById('block5').innerHTML==='0' &&
        document.getElementById('block8').innerHTML==='0') ||
        (document.getElementById('block3').innerHTML==='0' &&
        document.getElementById('block6').innerHTML==='0' &&
        document.getElementById('block9').innerHTML==='0') ||
        (document.getElementById('block1').innerHTML==='0' &&
        document.getElementById('block2').innerHTML==='0' &&
        document.getElementById('block3').innerHTML==='0') ||
        (document.getElementById('block4').innerHTML==='0' &&
        document.getElementById('block5').innerHTML==='0' &&
        document.getElementById('block6').innerHTML==='0') ||
        (document.getElementById('block7').innerHTML==='0' &&
        document.getElementById('block8').innerHTML==='0' &&
        document.getElementById('block9').innerHTML==='0') ||
        (document.getElementById('block1').innerHTML==='0' &&
        document.getElementById('block5').innerHTML==='0' &&
        document.getElementById('block9').innerHTML==='0') ||
        (document.getElementById('block3').innerHTML==='0' &&
        document.getElementById('block5').innerHTML==='0' &&
        document.getElementById('block7').innerHTML==='0')){
            setTimeout(function(){
                alert('Player1 WINS!!');
                window.location.reload();
            },0);
            return true;
        }
    else if ((document.getElementById('block1').innerHTML==='1' &&
            document.getElementById('block4').innerHTML==='1' &&
            document.getElementById('block7').innerHTML==='1') ||
            (document.getElementById('block2').innerHTML==='1' &&
            document.getElementById('block5').innerHTML==='1' &&
            document.getElementById('block8').innerHTML==='1') ||
            (document.getElementById('block3').innerHTML==='1' &&
            document.getElementById('block6').innerHTML==='1' &&
            document.getElementById('block9').innerHTML==='1') ||
            (document.getElementById('block1').innerHTML==='1' &&
            document.getElementById('block2').innerHTML==='1' &&
            document.getElementById('block3').innerHTML==='1') ||
            (document.getElementById('block4').innerHTML==='1' &&
            document.getElementById('block5').innerHTML==='1' &&
            document.getElementById('block6').innerHTML==='1') ||
            (document.getElementById('block7').innerHTML==='1' &&
            document.getElementById('block8').innerHTML==='1' &&
            document.getElementById('block9').innerHTML==='1') ||
            (document.getElementById('block1').innerHTML==='1' &&
            document.getElementById('block5').innerHTML==='1' &&
            document.getElementById('block9').innerHTML==='1') ||
            (document.getElementById('block3').innerHTML==='1' &&
            document.getElementById('block5').innerHTML==='1' &&
            document.getElementById('block7').innerHTML==='1')){
                setTimeout(function(){
                    alert('Player2 WINS!!');
                    window.location.reload();
                },0);
                return true;
            }
}
function restart(){
    window.location.reload();
    return false;
}

