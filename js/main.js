$(document).ready(function(){
    var contenitor = $('.contenitor');
    var box = $('.box');
    var start = $('#1');
    var time = 100;
    var innerPoint = $('#point');
    var warmPos = start;
    var arrayPunteggio = [];
    var punteggio = arrayPunteggio.length;    

    var goDown;
    var goRight;
    var goLeft;
    var goUp;
    
    //popolare i box con id creascenti 
    var nextBox = start;
    for(var i = 2; i <= 400; i++){
        nextBox = nextBox.next();
        nextBox.attr('id', i);
    };

    // funzionamento gioco
    firstWarm();
    takeFlower();

    //**************************************funzioni*********************************
    /**
     * dato un id come parametro ne torna il riferimento al dom
     * @param {*} id id dell'elemento 
     */
    function returnAttual(id){
        return $("#" + id);
    };

    /**
     * spostamento verso il basso 
     */
    function goToDown() {
        var idAttual = warmPos.attr('id');  // salvo la posizione in cui mi trovato quando premo una freccia 
        var attual = returnAttual(idAttual); //riferimento del dom
        var newId = parseInt(idAttual) + 20; //incremento della posizione tramite id
        var newPosition = returnAttual(newId);
        if (warmPos.attr('id') >= 381){
            newId = parseInt(warmPos.attr('id')) - 380;
            newPosition = returnAttual(newId);
        };
        warmPos.removeClass('warm');
        warmPos = newPosition;
        games(warmPos);
        warmPos.addClass('warm');
    };

    /**
     * spostamento verso sinistra
     */
    function goToLeft() {
        var idAttual = warmPos.attr('id');
        var attual = returnAttual(idAttual); 
        var newId = parseInt(idAttual) - 1;
        var newPosition = returnAttual(newId);
        warmPos.removeClass('warm');
        if ((parseInt(warmPos.attr('id')) -1) % 20 == 0  || parseInt(warmPos.attr('id')) == 1){
            newId = parseInt(idAttual) + 19;
            newPosition = returnAttual(newId);
        };
        warmPos = newPosition;
        games(warmPos);
        warmPos.addClass('warm');
    };

    /**
     * spostamento verso l'alto
     */
    function goToUp() {
        var idAttual = warmPos.attr('id');  // salvo la posizione in cui mi trovato quando premo una freccia 
        var attual = returnAttual(idAttual); //riferimento del dom
        var newId = parseInt(idAttual) - 20; 
        var newPosition = returnAttual(newId);
        if (parseInt(warmPos.attr('id')) <= 20){
            newId = parseInt(warmPos.attr('id')) + 380;
            newPosition = returnAttual(newId);
        };
        warmPos.removeClass('warm');
        warmPos = newPosition;
        games(warmPos);
        warmPos.addClass('warm');
    };

    /**
     * spostamento verso destra
     */
    function goToRight() {
        var idAttual = warmPos.attr('id');
        var attual = returnAttual(idAttual); 
        var newId = parseInt(idAttual) + 1;
        var newPosition = returnAttual(newId);
        if ((parseInt(warmPos.attr('id'))) % 20 == 0){
            newId = parseInt(idAttual) - 19; 
            newPosition = returnAttual(newId);
        };
        warmPos.removeClass('warm');
        warmPos = newPosition;
        games(warmPos);
        warmPos.addClass('warm');
    };

    /**
     * spostamento del verme in base alle frecce da tastiera
     */
    function firstWarm(){
        $(document).keyup(function(event){
            var direction = event.keyCode;
            if (direction == 40){
                stopOther(goRight);
                stopOther(goLeft);
                stopOther(goUp);
                goDown = setInterval(goToDown,time);
            } else if (direction == 39){
                stopOther(goLeft);
                stopOther(goDown);
                stopOther(goUp);
                goRight = setInterval(goToRight,time);
            } else if (direction == 37){
                //stopOther();
                stopOther(goDown);
                stopOther(goRight);
                stopOther(goUp);
                goLeft = setInterval(goToLeft,time);
            } else if (direction == 38){
                stopOther(goLeft);
                stopOther(goRight);
                stopOther(goDown);
                goUp = setInterval(goToUp,time);
            };            
            function stopOther(direction) {
                clearInterval(direction);
            };            
        });
    };


    /**
     * generazione numeri random per posiszionare i fiori
     */
    function randomNumber(){
        return Math.floor(Math.random() * 400) +1;
    };

    /**
     * posizionamento fiori in una posizione casuale
     */
    function putFlower(){
        var flowerPosition = randomNumber();
        var oldFlower = $('.flower').removeClass('flower');
        var flower = document.getElementById(flowerPosition).className = 'box flower';
        console.log('flower')
    };
    
    /**
     * intervallo di tempo per il cambio della posizione dei fiori
     */
    function changeFlower(){
        insertFrower = setInterval(putFlower, 10000);

        console.log('restart');
    };

    /**
     * abbianamento delle funzioni di posizionamento e timer dei fiori. combinazione finale per fare in modo di non perdere il primo ciclo 
     */
    function takeFlower(){
        putFlower();
        changeFlower();
    };

    /**
     * aumento punteggio 
     * @param {*} position posizione attuale del verme
     */
    function games(position){
        if (position.hasClass('flower')){
            arrayPunteggio.push('a');
            innerPoint.html(arrayPunteggio.length);
            clearInterval(insertFrower);
            var oldFlower = $('.flower').removeClass('flower');
            takeFlower();
        };
    };
})//<--end jQuery