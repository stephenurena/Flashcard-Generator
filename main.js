//load initial packages to main.js
var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var inquirer = require("inquirer");
var fs = require("fs");

//
var startOptions = [
  {
    type: "list",
    name: "userSelection",
    message: "Would you like to study or create a new flashcard?",
    choices: ["Study", "Create"]
  }
];

var flashCardOption = [
  {
    type: "list",
    message: "What type of flash card do you want?",
    choices: ["Basic", "Cloze"]
  }
]

//Initial user prompt to initilize app, to either study cards or create new ones
function startUp(){
  console.log("startUp function loaded");
  inquirer.prompt(startOptions).then(function(response) {
    switch (response.userSelection) {
      case ("Study"):
        studyCards();
        break;
      case ("Create"):
        createCards();
        break;
      // default: //don't think i need a default because it is prompting user with a list
    }
  });
}

function studyCards(){
  console.log("studyCards is loaded");
}

function createCards(){
  console.log("CreateCards is loaded");
}
startUp()
