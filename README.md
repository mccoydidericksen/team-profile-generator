# Team Profile Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| <img src="assets/images/js-logo.svg" alt="javascript" width="20"/> JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |  
| <img src="assets/images/nodejs-icon.svg" alt="html" width="20"/> Node.js    | [https://developer.mozilla.org/en-US/docs/Glossary/Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js) | 
## Description 

This application will generate an HTML page for you and your team members. Follow the prompts in the terminal to add each team member's information and view the HTML generated dynamically in the /dist folder!

## Functionality
View the walkthrough video [here](https://drive.google.com/file/d/1c8_aLY3z3gfvBzj-kyMxrRUO3WPu498_/view)

## Code Snippets
The below function generates the final HTML code by using template strings and custom class attributes/functions to dynamically insert content submitted by the user.

```javascript
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
        console.log("Your HTML file has been generated!");
    });
}
```