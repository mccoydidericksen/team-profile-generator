const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

function start() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the team manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is the team manager's employee id?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is the team manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "managerOfficeNumber"
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "teamMemberType",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ])
        .then(function (response) {
            console.log(response);
        })
}

start();