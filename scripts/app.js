function saveTask(){ //5th
    console.log("Saving...")
    //get the values
    const title = $("#inputTitle").val();
    const description = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const budget = $("#inputBudget").val();
    const status = $("#inputStatus").val();
    const date = $("#inputDate").val();

    console.log(title,description,color,budget,status,date);

    //build the obj
    let x = new Task(title,description,color,budget,status,date)
    console.log(x)

    //save to server
    
    //display the task
}


function init(){ //Loads 2nd
    console.log("this is a task manager") //3rd
    //load date into form

    //hook some events
    $("#btnSave").click(saveTask) //4th
    //document.getElementById("btnSave")

}

window.onload = init; //loads 1st.This can but put on line 1 also.
