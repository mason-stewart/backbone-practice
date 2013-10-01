AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.items = new ItemsCollection()
  },

  routes: {
    "items"     : "showItems",
    "items/:id" : "showItem"
  },

  showItems: function(){
    console.log('gonna show ALLLL the items.')
    $('.container').html('')

    this.items.fetch({
      success: function(items){
        items.each(function(item){
          new GridItemView({model: item})
        })
      }
    })

  },

  showItem: function(id) {
    $('.container').html('')
    this.items.fetch({
      success: function(items){
        var itemToShow = items.get(id)
        new FullItemView({model: itemToShow})
        console.log('we should show an item with the id ', id)
      }
    })
  }

})

var router = new AppRouter()
Backbone.history.start()


