const mongoose = require('mongoose'),
		  Schema = mongoose.Schema;
// const fonttmpl = {
//   fm: 'Arial',
//   fz:'16px',
//   ls: '0'
// }

const FontType = {
  fm: {
    type: String,
  },
  fz: {
    type: String,
  },
  ls: {
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
  font: {
    type: mongoose.Schema.ObjectId,
    ref: 'Font'
  },
  // grid: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'Grid'
  // }
});

schema.pre('save', function(next) {
	if(this.update !== this.created ) {
		this.update = Date.now();
	}
  next();
});

exports.Project = Project = mongoose.model('Project', schema);
