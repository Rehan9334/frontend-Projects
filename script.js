// script.js

function addNewWEField() {
  // Get the container where you want to add a new work experience field
  var weContainer = document.getElementById("weAddButton");

  // Create a new textarea element for work experience
  var weField = document.createElement("textarea");
  weField.setAttribute("placeholder", "Enter here");
  weField.classList.add("form-control", "weField");

  // Append the new work experience field to the container
  weContainer.appendChild(weField);
}

function addNewAQField() {
 let newNode = document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("eqField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 3);
 newNode.setAttribute("placeholder", "Enter here");

 let aqOb = getElementById("aq");
 let aqAddButtonOb = document.getElementById("aqAddButton");

 aqOb.insertBefore(newNode, aqAddButtonOb);

}