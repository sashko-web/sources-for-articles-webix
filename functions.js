
let clearForm = () => {
    webix.confirm({
        title:"All data will be lost!",
        text:"Are you sure?"
    }).then( () => {
            $$("film_form").clear();
            $$("film_form").clearValidation();
        }
)};

let saveItem = () => {
    let form = $$( "film_form" );  
    let list = $$( "film_list" );  
    let item_data = $$("film_form").getValues();    
    if(form.validate()){                                               
        list.add(item_data);
    }
}