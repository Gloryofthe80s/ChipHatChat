//objects being sent to the server
var Message = Backbone.Model.extend({
    idAttribute: "_id",

    defaults: {
    username: '-default name-',
    messageText: '-default message-',
    messageDate: '-unknown-',
    appId: 'ChipHatApp',
    options: { } //optional additional parameters

    }
});

var MessagesCollection = Backbone.Collection.extend({
    model: Message,

    url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'
    // /collections/messages is the directory on server

    // to see all messages on the server, you can run the following in console:
    // $.get('/collections/contacts', function(result){
    //    console.table(result);
    // })
});

