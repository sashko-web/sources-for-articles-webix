
const table = {
    view:"datatable", 
    id:"film_list",
    scroll:"y",
    select:true,
    url:"data/data.js",
    hover:"myhover",
    columns:[
        { id:"rank", header:"", width:50, css:"rank"},
        { id:"title", header:"Film title", fillspace:true},
        { id:"year",  header:"Released", width:100},
        { id:"votes", header:"Votes", width:100},
        { id:"rating", header:"Rating", width:100}
    ]
}
