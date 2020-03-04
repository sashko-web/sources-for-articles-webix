const Datastore = require("nedb");
const bluebird = require("bluebird");

// packages DB
const products = new Datastore();
products.insert(require("./data/products.json"));

// promisify DB API
bluebird.promisifyAll(Datastore.prototype);
bluebird.promisifyAll(products.find().constructor.prototype);

// client side expects obj.id while DB provides obj._id
function fixID(a){
	a.id = a._id;
	delete a._id;
	return a;
}

module.exports = function(app, root){

	app.get(root + "/products",async (req, res, next)=>{
		try {
			const docs = await products.findAsync({});
			res.send(docs.map(fixID));
		} catch(e){
			next(e);
		}
	});

	app.put(root + "/products/:id", async (req, res, next) => {
		try {
			await products.updateAsync({ _id: req.params.id }, {
				$set:req.body
			});
			res.send({ status: "updated" }); // status is optional, used by one of samples
		} catch(e){
			next(e);
		}
	});

};