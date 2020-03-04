
const products = {
    id:"trtable",
    view:"treetable",
    scrollX:false,
    columns:[
        { id:"title", header:"Title", fillspace:true, template:"{common.treetable()} #title#" },
        { id:"price", header:"Price", width:200 }
    ],
    select:"row",
    url:"/samples/server/products",
    save:"rest->/samples/server/products",
    scheme:{
        $group:{
            by:"category",
            map:{
                title:["category"]
            }
        },
        $sort:{ by:"value", dir:"asc" }
    }
}
