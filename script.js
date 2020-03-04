
webix.ui({
    rows:[
        {
            view:"toolbar",
            css:"webix_dark",
            cols:[
                { view:"label", label:"My app"},
                {},
                {height: 40, type:"icon", icon:"wxi-user",  view:"button", label:"Profile", width:100, css:"webix_transparent"}
            ]
        },
        {cols:[
            {
                view: "list",
                id:"mylist",
                scroll:false,
                select:true,
                width:200,
                css:"list_color",
                data:[
                    {value:"Dashboard"},
                    {value:"Users"},
                    {value:"Products"},
                    {value:"Location"}
                ]
            },
            {view: "resizer"},
            {
                view:"datatable",
                id:"film_list",
                scroll:"y",
                autoConfig: true,
                data:small_film_set
            },
            {
                view:"form", id:"film_form", width: 350,
                elements:[
                    { type:"section", template:"EDIT FILMS"},
                    { view:"text", name:"title", label:"Title" },
                    { view:"text", name:"year", label:"Year" },
                    { view:"text", name:"rating", label:"Rating" },
                    { view:"text", name:"votes", label:"Votes" },
                    {
                        margin:10, cols:[
                            { view:"button", id:"btn_add", value:"Add new", css:"webix_primary"},
                            { view:"button", id:"btn_clear", value:"Clear"}
                        ]
                    },
                    {} // spacer to fill the available space
                ]
            }
        ]},
        {
            cols:[
                {height: 30, template:"The software is provided by <a href='#'>webix.com</a>. All rights reserved (c)", css:"center_text"}
            ]
        }
    ]
});
