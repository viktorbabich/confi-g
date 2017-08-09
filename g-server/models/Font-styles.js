const mongoose = require('mongoose'),
		  Schema = mongoose.Schema,
		  async = require('async');

const schema = new Schema({
	font-family: {
		type: String,
		default: 'Arial'
	},
	font-size: {
		type: String,
		default: '16px'
	},
	font-weight: {
		type: Number,
		default: 600
	},
  line-height: {
    type: Number,
    default: '1.4'
  },
	letter-spacing: {
	  type: String,
	  default: '0'
	}
});

exports.Font-styles = Font-styles = mongoose.model('Font-styles', schema);
	