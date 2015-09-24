var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		item: ''
		
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/Backbone-todo1',
	idAttribute: '_id'

});



