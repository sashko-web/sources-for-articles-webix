webix.ui({
    rows:[
        header,
        {
            cols:[
            aside, {view: "resizer"}, multi
            ]
        },
        footer
    ]
});


$$("mylist").select("dashboard");

$$("chart").sync($$("user_list"));

$$("list_input").attachEvent("onTimedKeyPress",function(){
    var value = this.getValue().toLowerCase();
    $$("user_list").filter(function(obj){
      return obj.name.toLowerCase().indexOf(value) !== -1;
    })
});

let dp = webix.dp($$("film_list"));
dp.attachEvent('onAfterSync', () => {
    webix.message({
        text:"Saved!",
        type:"success"
    })
});

dp.attachEvent("onAfterSaveError", function(id, status, response, details){
    webix.message('onAfterSaveError');
});

$$("datatable").attachEvent("onLoadError", function(xhr){
    webix.message(xhr);
});

