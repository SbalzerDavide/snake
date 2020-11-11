$(document).ready(function(){
    var lunghezza = 4;
    var warmPosition = [];
    var contenitor = $('.contenitor');
    var box = $('.box');
    var start = $('#1');
    var time = 300;
    
    
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
        warmPos.addClass('warm');

    };

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
        warmPos.addClass('warm');

    };

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
        warmPos.addClass('warm');

    };



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
        warmPos.addClass('warm');
        // addBox(newPosition, 1);

    };


    function addBox(newPosition, lunghezza) {
        var idAttualBox = newPosition.attr('id');
        for (var i = 0; i <= lunghezza; i++){
            var newId = parseInt(idAttualBox) - i;

            var tail = returnAttual(newId);
            tailPos = tail;
            tailPos.addClass('warm');
            console.log('ciaoneeee');
            console.log(i);
        };
    };


    //dall'ultimo aggioramento aggiunta solo la funzione addBox che però non funziona



    // potrei provare ad aggiungere il cibo per far aumentare il livello senza allungare il verme per adesso


    

})//<--end jQuery