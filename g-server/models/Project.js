const mongoose = require('mongoose'),
		  Schema = mongoose.Schema;

const FontType = {
  fontFamily: {
    type: String
  },
  fontSize: {
    type: String
  },
  fontWeight: {
    type: Number
  },
  lineHeight: {
    type: Number
  },
  letterSpacing: {
    type: String,
  }
}

const schema = new Schema({
	name: {
		type: String,
	},
  owner: { 
    type: mongoose.Schema.ObjectId, 
    ref: 'User' 
  },
  created: {
    type: Date,
    default: Date.now
  },
  update: {
    type: Date,
  },
  user: { 
    type: mongoose.Schema.ObjectId, 
    ref: 'User' 
  },
  baseFont: {
    type: FontType
  },
  h1: {
    type: FontType
  },
  h2: {
    type: FontType
  },
  h3: {
    type: FontType
  },
  h4: {
    type: FontType
  },
  h5: {
    type: FontType
  },
  h6: {
    type: FontType
  }
});

schema.pre('save', function(next) {
	if(this.update !== this.created ) {
		this.update = Date.now();
	}
  next();
});

exports.Project = Project = mongoose.model('Project', schema);
