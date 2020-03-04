module.exports = function(app){

	const root = "/samples/server";

	// datatable
	require("./films")(app, root);

	// list and chart
	require("./users")(app, root);

	// ungrouped tree
	require("./products")(app, root);

};