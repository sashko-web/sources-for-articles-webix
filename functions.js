const addItem = () =>{        
    if($$("film_form").validate()){                                               
        var item_data = $$("film_form").getValues();
        $$("film_list").add(item_data);    
        webix.message("Validation is successful!");
    }
}

let clearForm = () => {
    webix.confirm({
        title:"All data will be lost!",
        text:"Are you sure?"
    }).then( () => {
            $$("film_form").clear();
            $$("film_form").clearValidation();
        }
)};

