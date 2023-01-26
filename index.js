const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
// let team = [];
let team = [new Manager("McCoy", "2948", "mccoy@gmail.com", "234"), 
    new Intern("Ty", "20383", "ty@gmail.com", "USU"),
    new Engineer("Travis", "9382", "travis@gmail.com", "travisd")]


function getLastItemContents(member){
    if(member.getRole() === "Manager"){
        return "Office Number: " + member.getOfficeNumber();
    } else if(member.getRole() === "Engineer"){
        return `GitHub: <a href="https://github.com/${member.github}" class="card-link">${member.github}</a>`;
    } else if(member.getRole() === "Intern"){
        return "School: " + member.getSchool();
    }
}

function generateHTML() {
    let gridContents = "";
    for(member of team) {
        gridContents += `
            <div class="col-auto mb-3">          
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${member.getRole()}</h6>
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${member.id}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${member.email}" class="card-link">${member.email}</a></li>
                            <li class="list-group-item">${getLastItemContents(member)}</li>
                        </ul>
                    </div>
                </div>
            </div>`
    }
    const finalHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <div class="container mt-4">
            <div class="jumbotron row justify-content-center">
                <h1 class="display-4">My Team</h1>
            </div>
            <div class="row justify-content-center">
                    ${gridContents}
            </div>
        </div>
    
    </body>
    </html>`

    fs.writeFile("./dist/output.html", finalHTML, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}

function createNewManager(response) {
    team.push(new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber));
}

function createNewEngineer(response) {
    team.push(new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub));
}

function createNewIntern(response) {
    team.push(new Intern(response.internName, response.internId, response.internEmail, response.internSchool));
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
            if (response.employeeType === "Engineer") {
                askForEngineer();
            } else if (response.employeeType === "Intern") {
                askForIntern();
            } else {
                generateHTML();
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
            createNewManager(response);
            askForEmployee();
        })
}

//start();
generateHTML();