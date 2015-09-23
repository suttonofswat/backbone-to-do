'use strict';

//list item, incomplete
var $ = require('jquery');
var toDoModel = require('./models/toDoModel.js');
var toDoView= require('./views/toDoView.js');
var _ = require('backbone/node_modules/underscore');
var toDoCollection= require('./collections/toDoCollection.js');

$(document).ready(function(){


	
	// // WHO are the actors

	// // 1a. Target the element
	var $toDoForm = $('#toDoform');
	var $toDoInput = $('#toDoInput');
	var $toDoInput = $('#toDoInput');
	var listTemplate = _.template($('#list-row').html());
	var $toDoList = $('#toDoList');

	// // 1b. Instantiate (create) a new backbone model or  collections
	var toDos = new toDoCollection();


	// // WHAT is going to happen? (functions)

	// // 2a. create a function to run when a jquery event happens
	$toDoForm.on('submit', function(e){
		console.log('submit triggerd');
		e.preventDefault();
		toDos.add({
			item: $toDoInput.val()
		})
	
	});

	toDos.on('add', function(newToDo){
		console.log(toDos);
		newToDo.save();
		var newHtml = listTemplate(newToDo.toJSON());
		$toDoList.append(newHtml);

		console.log(newToDo);

	});

	toDos.fetch();

});