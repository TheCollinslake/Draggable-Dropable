$( init );

    function init() {
        $("#draggable").draggable();
        $("#droppable").droppable({
            drop: handleDropEvent
        });
    }

    function handleDropEvent(event, ui){

    }


    $(document).ready(function () {


        $("#createX").click(function(){
            $('<p>X</p>')
                .appendTo("#Xwell")
                .draggable({
                    cursor:'move'
                });
        });

        $("#crrateO").click(function () {
            $('<p>O</p>')
                .appendTo("#Owell")
                .draggable({
                   cursor:'move'
                });

        });
    });