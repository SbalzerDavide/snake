$(document).ready(function(){
    var lunghezza = 4;
    var warmPosition = [];
    var contenitor = $('.contenitor');
    var box = $('.box');
    var start = $('#1');
    
    
    //popolare i box con id creascenti 
    var nextBox = start;
    for(var i = 2; i < 400; i++){
        nextBox = nextBox.next();
        nextBox.attr('id', i);
    }


    var warmPos = start;
    console.log(start);
    setInterval(function(){
        warmPos.removeClass('warm');
        warmPos = warmPos.next();
        warmPos.addClass('warm');


        //rientro all'inizio della riga quando e alla fine 
        if (warmPos.attr('id') == 21){
            warmPos.removeClass('warm');
            warmPos = start.addClass('warm');
        }

        //navigation with keyboard
        $(document).keyup(function(event){
            var direction = event.keyCode;
            console.log('direction: ' + direction);
            if (direction == 40){
                // console.log('hai fatto 40');
                // console.log('pos:' ,warmPos);

                
                var idAttual = warmPos.attr('id');  // salvo la posizione in cui mi trovato quando premo una freccia 

                var attual = returnAttual(idAttual); //riferimento del dom
                // console.log('oggetto riferito ad attual:');
                // console.log(attual);


                var newId = parseInt(idAttual) + 20; //incremento della posizione tramite id
                // console.log('new', newId);

                var newPosition = returnAttual(newId);

                warmPos = newPosition;
                warmPos.addClass('warm');



                // warmPos.attr('id', newId );
                // start = $('#40');
                // warmPos = start.addClass('warm');

            }
            

        });



        
    },500)

    //funzioni 
    /**
     * dato un id come parametro ne torna il riferimento al dom
     * @param {*} id id dell'elemento 
     */
    function returnAttual(id){
        return $("#" + id);
    };


    





})//<--end jQuery