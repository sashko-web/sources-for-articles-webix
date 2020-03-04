
const products = {
    view:"treetable",
    scrollX:false,
    columns:[
        { id:"id", header:"", width:50 },
        { id:"title", header:"Title", fillspace:true, template:"{common.treetable()} #title#"},
        { id:"price", header:"Price", width:200 }
    ],
    select:"row",
    url:"data/products.js"
}

