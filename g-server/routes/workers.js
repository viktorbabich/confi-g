const fs = require('fs');
const path = require('path');
const projectsDir = path.join(__dirname, '../public/downloads'); 
const _ = require('lodash');
const async = require('async');
const Project = require('../models/Project').Project

function initProjects() {
	let arr = [];
	let regex = /[^\D]+[^.]/;
	let ids = fs.readdirSync(projectsDir);
	_.each(ids, n => { 
		let str = regex.exec(n);
		arr.push(str[0]);
	});
	return arr;
}

function getRandomId () {
	return Math.random(16).toString().slice(2)
} 

module.exports =  {
	getProjectByID(req, res, next) {
		Project
			.findOne({_id: req.query._id}, '-_id -update -owner -created -__v')
			.lean()
			.exec((error, project) => {
				if(error) {}
				res.json(project)
			})
	},
	getProjects (req, res, next) {
	 	Project
	 		.find({}, 'owner created name')
	 		.populate('owner', 'email avatar')
	 		.lean()
	 		.exec((error, result) => {
	 			res.json(result)
	 		});
	},
	deleteProject (req, res, next) {
		Project.remove({_id: req.query._id}).exec((error) => {
			if(error) { res.json({ error: error }) }
			else { res.json({status: 'ok'}); }
		});
	},
	saveConfig (req, res, next) {
		if(!req.body._id) {
			const project = new Project({name: req.query.name, owner: req.user._id});
			project.save((error, saved) => {
				if(error) {
					res.json({error})
				} else {
					let data = JSON.parse(req.body.config);
					Project.findOneAndUpdate(saved._id, data, {}, function(err, doc){
				    if (err) return res.send(500, { error: err });
				    return res.send("succesfully saved");
					});
				}
			})
		} else {
			let data = JSON.parse(req.body.config);
			Project.findOneAndUpdate(req.body._id, data, {}, function(err, doc){
		    if (err) return res.send(500, { error: err });
		    return res.send("succesfully saved");
			});
		}
	}
};
