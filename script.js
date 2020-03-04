webix.ui({
    rows:[
        { 
            view:"toolbar",
            css:"webix_dark tool_flex",
            cols:[
                { view:"label", label:"My app", autowidth:true},
                {},
                { id:"profile_btn", height: 40, type:"icon", icon:"wxi-user",  view:"button", label:"Profile", width:100, css:"webix_transparent tool_rigth"}
            ]
        },
        {cols:[
            {
                rows:[
                    { 
                    view: "list",
                    id:"mylist",
                    scroll:false,
                    select:true,
                    width:200,
                    css:"list_color",
                    data:[
                        {value:"Dashboard", id:"dashboard"},
                        {value:"Users", id:"users"},
                        {value:"Products", id:"products"}
                    ]
                },
                    {css:"list_color", type:"icon", icon:"wxi-check",width:150, view:"button", label:"Connected"},
                ]

                },
            {view: "resizer"},
            {
                view:"datatable", id:"film_list",
                scroll:"y",
                autoConfig: true,
                data:small_film_set
            },
            {
                view:"form", id:"film_form", width: 350,

                elements:[
                    { type:"section", template:"EDIT FILMS"},
                    { view:"text", name:"title", label:"Title", invalidMessage:"Must be filled in"},
                    { view:"text", name:"year", label:"Year", invalidMessage:"Should be between 1970 and current" },
                    { view:"text", name:"rating", label:"Rating", invalidMessage:"Cannot be empty or 0" },
                    { view:"text", name:"votes", label:"Votes", invalidMessage:"Must be less than 100000" }, 
                    {
                        margin:10, cols:[
                            { view:"button", id:"btn_add", value:"Add new", css:"webix_primary", click:addItem},
                            { view:"button", id:"btn_clear", value:"Clear", click:clearForm}
                        ]
                    },

                    {}
                ],
                rules:{
                    title: webix.rules.isNotEmpty,
                    rating(value){
                        if(webix.rules.isNumber(value)){
                            return true;
                        }
                    },
                    votes(value){
                       return value < 1000000 && value >= 1;
                    },
                    year(value){
                        return value>=1970 && value <= new Date().getFullYear();
                    }
                }
            }
        ]},
        
        {
            height: 30, 
            template:"The software is provided by <a href='#'>webix.com</a>. All rights reserved (c)", 
            css:"bottom-link"
        }
    ]
});

