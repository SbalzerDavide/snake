$(document).ready(function(){
    var lunghezza = 4;
    var warmPosition = [];
    var contenitor = $('.contenitor');
    var box = $('.box');
    var start = $('#1');
    var time = 100;
    
    
    //popolare i box con id creascenti 
    var nextBox = start;
    for(var i = 2; i <= 400; i++){
        nextBox = nextBox.next();
        nextBox.attr('id', i);
    };

    var goDown;
    var goRight;
    var goLeft;
    var goUp;


    var warmPos = start;
    console.log(start);
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
        }
        
        function stopOther(direction) {
            clearInterval(direction);
            console.log();
            console.log('partita la funzione di clear');
        };
        
    });
    


    //funzioni 
    /**
     * dato un id come parametro ne torna il riferimento al dom
     * @param {*} id id dell'elemento 
     */
    function returnAttual(id){
        return $("#" + id);
    };

    /**
     * clear interval
     */    
    // function stopOther() {
    //     clearInterval(goRight);
    // };


    function goToDown() {
        // console.log(goDown);
        var idAttual = warmPos.attr('id');  // salvo la posizione in cui mi trovato quando premo una freccia 

        var attual = returnAttual(idAttual); //riferimento del dom
        // console.log('oggetto riferito ad attual:');
        // console.log(attual);


        var newId = parseInt(idAttual) + 20; //incremento della posizione tramite id
        // console.log('new', newId);

        var newPosition = returnAttual(newId);
        if (warmPos.attr('id') >= 381){
            console.log('fine in basso');
            console.log('primo:' + warmPos.attr('id'));

            newId = parseInt(warmPos.attr('id')) - 380;
            console.log('new id:' + newId);
            
            newPosition = returnAttual(newId);

            console.log('new id:' + newPosition);

        };

        warmPos.removeClass('warm');
        warmPos = newPosition;
        warmPos.addClass('warm');

    };

    function goToLeft() {
        var idAttual = warmPos.attr('id');

        var attual = returnAttual(idAttual); 

        var newId = parseInt(idAttual) - 1;

        var newPosition = returnAttual(newId);
        warmPos.removeClass('warm');
        if ((parseInt(warmPos.attr('id')) -1) % 20 == 0  || parseInt(warmPos.attr('id')) == 1){

            console.log('attr:',warmPos.attr('id'));
            newId = parseInt(idAttual) + 19;

            console.log('new:', newId);

            newPosition = returnAttual(newId);

            // warmPos.removeClass('warm');
            // warmPos = newPosition;
            // warmPos.addClass('warm');
    



            // warmPos.removeClass('warm');
            // warmPos = start.addClass('warm');
        };
        warmPos = newPosition;
        warmPos.addClass('warm');

    };

    function goToUp() {
        // console.log(goDown);
        var idAttual = warmPos.attr('id');  // salvo la posizione in cui mi trovato quando premo una freccia 

        var attual = returnAttual(idAttual); //riferimento del dom
        // console.log('oggetto riferito ad attual:');
        // console.log(attual);


        var newId = parseInt(idAttual) - 20; //incremento della posizione tramite id
        // console.log('new', newId);

        var newPosition = returnAttual(newId);
        if (parseInt(warmPos.attr('id')) <= 20){

            console.log('fine in alto');
            newId = parseInt(warmPos.attr('id')) + 380;
            console.log('new id:' + newId);
            
            newPosition = returnAttual(newId);

            console.log('new position:' + newPosition);



            // warmPos.removeClass('warm');
            // warmPos = newPosition;
            // warmPos.addClass('warm');
        };
        warmPos.removeClass('warm');
        warmPos = newPosition;
        warmPos.addClass('warm');

    };



    function goToRight() {
        var idAttual = warmPos.attr('id');

        var attual = returnAttual(idAttual); 

        var newId = parseInt(idAttual) + 1;

        var newPosition = returnAttual(newId);

        if ((parseInt(warmPos.attr('id'))) % 20 == 0){
    
            newId = parseInt(idAttual) - 19; //incremento della posizione tramite id
            
            console.log('secondo: ' + newId);

            var newPosition = returnAttual(newId);
        };

        warmPos.removeClass('warm');
        warmPos = newPosition;
        warmPos.addClass('warm');

    };


    





})//<--end jQuery