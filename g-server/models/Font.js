const mongoose = require('mongoose'),
		  Schema = mongoose.Schema,
		  async = require('async');

const schema = new Schema({
	base-font: {
		type: mongoose.Schema.ObjectId,
		ref: 'Font-styles'
	},
	h1: {
		type: mongoose.Schema.ObjectId,
		ref: 'Font-styles'
	},
	h2: {
		type: mongoose.Schema.ObjectId,
		ref: 'Font-styles'
	},
	h3: {
		type: mongoose.Schema.ObjectId,
		ref: 'Font-styles'
	},
	h4: {
		type: mongoose.Schema.ObjectId,
		ref: 'Font-styles'
	},
	h5: {
		type: mongoose.Schema.ObjectId,
		ref: 'Font-styles'
	},
	h6: {
		type: mongoose.Schema.ObjectId,
		ref: 'Font-styles'
	}, 
});

exports.Font = Font = mongoose.model('Font', schema);
	





