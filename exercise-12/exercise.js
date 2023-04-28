// Get html elements

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

// call event listeners
eventListeners();

function eventListeners() {
  // submit event
  form.addEventListener("submit", function(){
    // Create element
  });

  // delete an item
  taskList.addEventListener("click", function(){
    console.log("click");
  });

  // delete all items
  btnDeleteAll.addEventListener("click", function(){
    console.log("click");
  });
}
