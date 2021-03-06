//objects being sent to the server
var Message = Backbone.Model.extend({
    idAttribute: "_id",

    defaults: {
    username: '-default name-',
    messageText: '-default message-',
    appId: 'ChipHatApp',
    options: { }, //optional additional parameters
    messageDate: 0
    }
});

var MessagesCollection = Backbone.Collection.extend({
    model: Message,

    comparator: 'messageDate',

    url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'

    // to see all messages on the server, you can run the following in console:
    // $.get('/collections/contacts', function(result){
    //    console.table(result);
    // })
});

