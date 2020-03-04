
const table = {
    view:"datatable", 
    id:"film_list",
    scroll:"xy",
    select:true,
    url: "/samples/server/films",
    save:"rest->/samples/server/films",
    hover:"myhover",
    columns:[
        { id:"rank", header:"", width:50, css:"rank"},
        { id:"title", header:["Film title", { content:"textFilter"}], fillspace:true, minWidth:200, sort:"text"},
        { id:"year",  header:["Released", {content:"selectFilter" }], width:100, sort:"text"},
        { id:"votes", header:"Votes", width:100, sort:"text"},
        { id:"rating", header:"Rating", width:100, sort:"text"},
        { header:"", template:"<span class='webix_icon wxi-close'></span>", width:35}
    ],
    onClick:{
        webix_icon(e, id){
            this.remove(id);
            return false;
        }
    },
    on:{
        onAfterSelect(id){
            let values = $$("film_list").getItem(id);
            $$("film_form").setValues(values)
        }
    },
    scheme:{
        $sort:{
            by:"rank",
            dir:"asc",
            as:"sort_type"
        }
    },
    ready(){
        webix.message({
            text:`Loaded ${this.count()} records!`, 
            type:"success"
        });
    }
}
webix.DataStore.prototype.sorting.as.sort_type = function(a,b){
    return a > b ? 1 : -1;
}

