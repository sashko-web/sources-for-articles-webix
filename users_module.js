
const users = {
    rows:[
        {
            view: "list",
            id:"user_list",
            select:true,
            url:"data/users.js",
            template:"#name# from #country#"
        },
        {
            view:"chart",
            id:"chart",
            type:"bar",
            value:"#age#",
            url:"data/users.js",
            xAxis:{
                template:"#age#",
                title:"Countries"
            }
        }
    ]
}
