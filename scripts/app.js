function saveTask() {
  //5th
  console.log("Saving...");
  //get the values
  const title = $("#inputTitle").val();
  const description = $("#inputDescription").val();
  const color = $("#inputColor").val();
  const budget = $("#inputBudget").val();
  const status = $("#inputStatus").val();
  const date = $("#inputDate").val();

  console.log(title, description, color, budget, status, date);

  //build the obj
  let task = new Task(title, description, color, budget, status, date);
  console.log(task);

  //save to server
  $.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    },
  });
  //display the task
}
function testRequest() {
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net/",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function init() {
  //Loads 2nd
  console.log("this is a task manager"); //3rd
  //load date into form

  //hook some events
  $("#btnSave").click(saveTask); //4th
  //document.getElementById("btnSave")
}

window.onload = init; //loads 1st.This can but put on line 1 also.
