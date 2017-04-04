var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var inquirer = require("inquirer");
var fs = require("fs");

var startString = [
  {
    type: "list",
    name: "userSelection",
    message: "",
    choices: ["View", "Create"]
  }
];

var flashCardOpt = [
  {
    type: "list",
    message: "What type of flash card do you want?",
    choices: ["Basic", "Cloze"]
  }
]

function startUp(){
  console.log("startUp function loaded");
}

startUp()
