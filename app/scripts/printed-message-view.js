var PrintedMessage = Backbone.View.extend({
    tagName: 'div',
    className: 'printed-message'

    createTemplate: _.template($('#printed-message-template').text()),

    events: {

    },

    initialize: function(){
        $('.printed-messages-container').append( this.el ); //get the empty tag into the DOM

        this.render();

        this.listenTo(this.model, 'change', this.render) //if the model itself changes, this will be updated
    },

    render: function(){
        var renderedTemplate = this.createTemplate( this.model.attributes );

        this.$el.html( renderedTemplate );
    }
})





