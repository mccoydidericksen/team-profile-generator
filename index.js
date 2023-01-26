const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");



function createNewManager(response) {
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
}

function createNewEngineer(response) {
    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
}

function createNewIntern(response) {
    const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
}

function askForIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the intern's employee id?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "internSchool"
            }
        ])
        .then(function (response) {
            console.log(response);
            createNewIntern(response);
            askForEmployee();
        })
}


function askForEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the engineer's employee id?",
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "engineerGithub"
            }
        ])
        .then(function (response) {
            console.log(response);
            createNewEngineer(response);
            askForEmployee();
        })
}

function askForEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What type of employee would you like to add?",
                name: "employeeType",
                choices: ["Engineer", "Intern", "I don't want to add any more employees"]
            }
        ])
        .then(function (response) {
            console.log(response);
            if (response.employeeType === "Engineer") {
                askForEngineer();
            } else if (response.employeeType === "Intern") {
                askForIntern();
            } else {
                console.log("Done");
            }
        })
}

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
            }
        ])
        .then(function (response) {
            console.log(response);
            createNewManager(response);
            askForEmployee();
        })
}




start();