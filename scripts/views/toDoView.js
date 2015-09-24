'use strict';

var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var toDoModel = require('../models/toDoModel.js');

var DocumentRow = Backbone.View.extend({
//no idea what to do here! trying to add in a li element
  tagName: "li",



  //whenever i try to put in: 
  template: _.template($('#list-row').html()),
  //it keeps giving me an error of "cannot replace". I dont even know what the error means!
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {

  }

});