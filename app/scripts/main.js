$(document).ready(function() {

    function standardFetch() {
        messages.fetch({
            success: function(){
                console.log('standardFetch has run!')

            },
            error: function(){
                console.log('Error with messages.fetch!')
            }
        })
    }

    //app kickoff!
    window.messages = new MessagesCollection(); //make the messages collection

    messages.on('add',function(newMessage){
        console.log('ADD EVENT!')
        new PrintedMessage({model: newMessage})
    })

    //page load get all previous chats loaded into page
    standardFetch();

    //fetch repeatedly every second for new messages
    var timeoutID = window.setInterval(standardFetch, 1000);

    // ------- WHEN A CHAT MESSAGE IS SUBMITTED ------
    $('.enter-message').on('keypress', function(event) {
        //on enter keypress, so long as the input isn't empty
        if(event.which == 13 && $(this).val() != '') {

        var newChatMessage = new Message({
            messageText: $('.enter-message').val(),
            username: $('.hidden-welcome').text(),
            messageDate: $.now()
            //everything else is determined by default model values
        })

        //add it to the collection
        messages.add(newChatMessage);

        //render the new obj
        new PrintedMessage({model: newChatMessage});

        //save it
        newChatMessage.save();
        $('.enter-message').val('')

        standardFetch();

        }
    });

    $('.submit-username').click(function(){
        var username = $('.username-input').val();
        $('.username-input').val('');
        $('.hidden-welcome').html(username);
    })




}) // ------- end $(document).ready ------










