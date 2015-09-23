'use strict';

var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var toDoModel = require('../models/toDoModel.js');

// module.exports = Backbone.View.extend({
// 	tagName: 'button',

// 	initialize: function(){
// 		_.bindAll (
// 			this,
// 			'onLikeButtonClick',
// 			'render'
// 		);
// 		console.log('the link button was just created');
// 		this.model = new LikeModel();
// 		this.$el.on('click', this.onLikeButtonClick);
// 		this.model.on('change', this.render);
// 		this.render();
// 	},
// 	render: function(){
// 		var numLikes = this.model.get('likes');
// 		if (numLikes === 1){
// 			this.$el.html('1 Like');
// 		}
// 		else{
// 			this.$el.html(numLikes+' Likes');
// 		}
// 	},
// 	onLikeButtonClick: function(){
// 		console.log('like button was clicked');
// 		var newNumberOfLikes = this.model.get('likes')+1;
// 		this.model.set({
// 			in: newNumberOfLikes
// 		});
// 	}

// });