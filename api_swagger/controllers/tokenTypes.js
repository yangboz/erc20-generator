var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

router.get('/', (req, res, next) => {
	let _id = req.query._id ? ObjectId(req.query._id) : null;
	// var profile_id = req.query.profile_id;
	var name = req.query.name;
	var desc = req.query.desc;
	let where = {};
	if (_id) where._id = _id;
	// if (profile_id) where.profile_id = parseInt(profile_id);
	if (username) where.name = name;
	if (password) where.desc = desc;

	db.collection('tokenTypes')
		.find(where)
		.toArray((err, result) => {
			res.send(200, result);
		});
});

router.post('/', (req, res, next) => {
	db.collection('tokenTypes').save(req.body, (err, result) => {
		if (err) return console.log(err);
		let tokenType = result.ops[0];
		console.log('collection("tokenTypes").save => tokenType', tokenType);
		res.status(200).send(tokenType);
	});
});

router.put('/', (req, res, next) => {
	let vm = req.body;
	let _id = vm._id;
	delete vm['_id'];
	db.collection('tokenTypes').updateOne(
		{
			_id: ObjectId(_id)
		},
		{
			$set: vm
		},
		(err, result) => {
			if (err) return res.send(err);
			res.send(200);
		}
	);
});

router.delete('/', (req, res, next) => {
	let _id = req.query._id ? ObjectId(req.query._id) : null;
	console.log('_id', _id);
	if (!_id) {
		res.send(400, 'Inform the tokenType ID');
		return;
	}
	let filter = {_id: _id};
	db.collection('tokenTypes')
		.find(filter)
		.toArray((err, result) => {
			if (result.length === 0) {
				res.send(400, 'tokenType not found');
				return;
			}
			db.collection('tokenTypes').deleteOne(filter, (err, result) => {
				if (err) return res.send(500, err);
				res.send(200);
			});
		});
});

module.exports = router;
