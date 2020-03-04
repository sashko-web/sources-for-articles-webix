const Datastore = require("nedb");
const bluebird = require("bluebird");

// packages DB
const users = new Datastore();
users.insert(require("./data/users.json"));

// promisify DB API
bluebird.promisifyAll(Datastore.prototype);
bluebird.promisifyAll(users.find().constructor.prototype);

// client side expects obj.id while DB provides obj._id
function fixID(a){
	a.id = a._id;
	delete a._id;
	return a;
}

module.exports = function(app, root){

	app.get(root + "/users",async (req, res, next)=>{
		try {
			// initial sorting by rank
			const docs = await users.findAsync({});
			res.send(docs.map(fixID));
		} catch(e){
			next(e);
		}
	});

	app.post(root + "/users", async (req, res, next) => {
		try {
			const doc = await users.insertAsync({
				name: req.body.name,
				age: req.body.age,
				country: req.body.country
			});
			res.send({ id: doc._id });
		} catch(e){
			next(e);
		}
	});

	app.put(root + "/users/:id", async (req, res, next) => {
		try {
			await users.updateAsync({ _id: req.params.id }, {
				$set:req.body
			});
			res.send({ status: "updated" }); // status is optional, used by one of samples
		} catch(e){
			next(e);
		}
	});

	app.delete(root + "/users/:id", async (req, res, next) => {
		try {
			await users.removeAsync({ _id: req.params.id });
			res.send({});
		} catch(e){
			next(e);
		}
	});

};