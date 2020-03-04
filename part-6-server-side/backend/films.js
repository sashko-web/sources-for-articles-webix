const Datastore = require("nedb");
const bluebird = require("bluebird");

// packages DB
const films = new Datastore();
films.insert(require("./data/films.json"));

// promisify DB API
bluebird.promisifyAll(Datastore.prototype);
bluebird.promisifyAll(films.find().constructor.prototype);

// client side expects obj.id while DB provides obj._id
function fixID(a){
	a.id = a._id;
	delete a._id;
	return a;
}

module.exports = function(app, root){

	app.get(root + "/films",async (req, res, next)=>{
		try {
			const docs = await films.findAsync({});
			res.send(docs.map(fixID));
		} catch(e){
			next(e);
		}
	});

	app.post(root + "/films", async (req, res, next) => {
		try {
			const doc = await films.insertAsync({
				title: req.body.title,
				year: req.body.year,
				votes: req.body.votes,
				rating: req.body.rating,
				rank: req.body.rank
			});
			res.send({ id: doc._id });
		} catch(e){
			next(e);
		}
	});

	app.put(root + "/films/:id", async (req, res, next) => {
		try {
			await films.updateAsync({ _id: req.params.id }, {
				$set:req.body
			});
			res.send({ status: "updated" }); // status is optional, used by one of samples
		} catch(e){
			next(e);
		}
	});

	app.delete(root + "/films/:id", async (req, res, next) => {
		try {
			await films.removeAsync({ _id: req.params.id });
			res.send({});
		} catch(e){
			next(e);
		}
	});

};