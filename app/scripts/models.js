Item = Backbone.Model.extend({
  idAttribute: "_id" // hey btwz
})

ItemsCollection = Backbone.Collection.extend({
  model: Item,
  url: 'http://0.0.0.0:3000/collections/coolguys'
})