$(document).ready(function() {

    //app kickoff!
    window.messages = new MessagesCollection(); //make the messages collection

    messages.fetch({
        success: function(){

        },
        error: function(){
            console.log('Error with messages.fetch!')
        }
    })

    //------ the 'every second' fetch loop ------
    // no idea how to implement that :D


    // ------- WHEN A CHAT MESSAGE IS SUBMITTED ------
    $('#type-message-input').on('keypress', function(event) {
        //on enter keypress, so long as the input isn't empty
        if(event.which == 13 && $(this).val() != '') {

        var newChatMessage = new Message({
            messageText: $('').val(),
            //everything else is determined by default model values
        })

        //add it to the collection
        messages.add(newChatMessage);

        //render the new obj
        new PrintedMessage({model: newChatMessage});

        //save it
        newChatMessage.save();

        }
    });



}) // ------- end $(document).ready ------
