//load initial packages to main.js
var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var inquirer = require("inquirer");
var fs = require("fs");

//================global arr to push basic or cloze cards=======================
var basicFlashArr = [];
var clozeStringArr =[];

//===========object for prompts of the CLI application for inquirer=============
var prompt = {
  start: 
            [
              {
                type: "list",
                name: "userSelection",
                message: "What type of Flashcard would you like to make?",
                choices: ["Basic", "Cloze"]
              }
            ],

  basicCard: 
            [
              {
                name: "front",
                message: "Please type your question",
                validate: function(value) {
                            if (value.length) {
                              return true;
                            } else{
                                return 'Please type your question';
                              }
                          }
              },
              {
                name: "back",
                message: "Please type your answer",
                validate: function(value) {
                            if (value.length) {
                              return true;
                            } else{
                                return 'Please type your answer';
                              }
                          }
              }
            ],
  clozeCard:
            [
              {
                name: "text",
                message: "Please enter full text",
                validate: function(value) {
                            if (value.length) {
                              return true;
                            } else{
                                return 'Please enter full text';
                              }
                          }
              },
              {
                name: "cloze",
                message: "Please enter cloze text",
                validate: function(value) {
                            if (value.length) {
                              return true;
                            } else{
                                return 'Please enter cloze text';
                              }
                          }
              }
            ],
  anotherEntry:
            [
              {
                type: "list",
                name: "userSelection",
                message: "Do you want to enter another card?",
                choices: ["YES! entry another card", "NO! I'm done"]
              }
            ]
}
//-----------------------end of prompt object----------------------------------

//======================object to run methods of our flashcard app===================
var cli = {
        //Initial user prompt to initilize app, to either study cards or create new ones
        startUp: function() {
                  console.log("startUp function loaded");
                  inquirer.prompt(prompt.start).then(function(res) {
                    switch (res.userSelection) {
                      case ("Basic"):
                        cli.basicCard();
                        break;
                      case ("Cloze"):
                        cli.clozeCard();
                        break;
                    }
                  });
      },
      //============================================================================

      //==================method to hold basic flash card content===================
      basicCard: function(){
                  // console.log("basicCard is loaded");
                  inquirer.prompt(prompt.basicCard).then(function(basicContent) {
                    //create new var basicCardEntry to store input using constructor BasicCard
                    var basicCardEntry = new BasicCard(basicContent.front, basicContent.back)
                    console.log(basicCardEntry);
                    basicFlashArr.push("Q: " + basicCardEntry.front, "A: " + basicCardEntry.back);
                    //reinitialize CLI application for new entry
                    console.log("Here are your current flash cards: " + basicFlashArr)
                    cli.anotherEntry();
                  });
      },
      //==================method to hold cloze card content=========================
      clozeCard: function(){
                  // console.log("clozeCard is loaded");
                  inquirer.prompt(prompt.clozeCard).then(function(clozeContent) {
                    //create new ar clozeCardEntry to store input using constructor ClozeCard
                    var clozeCardEntry = new ClozeCard(clozeContent.text, clozeContent.cloze);
                    //
                    // console.log(clozeCardEntry);
                    console.log(clozeCardEntry.clozeText())
                    clozeStringArr.push(clozeCardEntry.clozeText());
                    console.log("Here are your current cloze cards: " + clozeStringArr);

                    cli.anotherEntry();
                  });
      },
      //===================method to prompt user for new entry or end app===========
      anotherEntry: function(){
                      // console.log("anotherEntry is loaded");
                      inquirer.prompt(prompt.anotherEntry).then(function(res) {
                          switch (res.userSelection) {
                          case ("YES! entry another card"):
                            cli.startUp();
                            break;
                          case ("NO! I'm done"):                  
                            console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/" + "\nThank you for using our app! Keep calm and study on!" + "\n/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/");
                            //end app
                            process.exit();
                            break;
                        }

                      });
      }
}
//-----------------------------end of cli object-----------------------------

//===================Calling the startUp function to initialize app===========
cli.startUp()
