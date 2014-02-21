$(document).ready(function() {

    //currentTime = new Date($.now());
    //var renderedTime = currentTime.toLocaleString();


    //app kickoff!
    window.messages = new MessagesCollection(); //make the messages collection

    messages.fetch({
        success: function(){
          messages.each(function(item){
            new PrintedMessage({model: item})
          })
        },
        error: function(){
            console.log('Error with messages.fetch!')
        }
    })

    //------ the 'every second' fetch loop ------
    // no idea how to implement that :D


    // ------- WHEN A CHAT MESSAGE IS SUBMITTED ------
    $('.enter-message').on('keypress', function(event) {
        //on enter keypress, so long as the input isn't empty
        if(event.which == 13 && $(this).val() != '') {

        currentTime = new Date($.now());
        var renderedTime = currentTime.toLocaleString();

        var newChatMessage = new Message({
            messageText: $('.enter-message').val(),
            username: $('.hidden-welcome').text(),
            messageDate: renderedTime, 

            //everything else is determined by default model values
        })

        //add it to the collection
        messages.add(newChatMessage);

        //render the new obj
        new PrintedMessage({model: newChatMessage});

        //save it
        newChatMessage.save();
        $('.enter-message').val('')

        }
    });

    $('.submit-username').click(function(){
        var username = $('.username-input').val();
        $('.username-input').val('');
        $('.hidden-welcome').html(username);
    })




}) // ------- end $(document).ready ------
