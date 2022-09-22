// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genReadMe = require('./readMeGen');
// TODO: Create an array of questions for user input
inquirer
.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project.',
            
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the app.?',
            
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use the app.?',
            
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['Unlicense', 'MIT ', 'Attribution License (BY)', 'Open Database License (ODbl)', 'Mozilla']
            
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contributing guidelines?',
            
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can the user test your project?',
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your E-mail?',
            
        },
    ])
    .then(({title, description, installation, usage, license, contribution, test, github,email})=>
    fs.writeFile('README.md', genReadMe(title, description, installation, usage, license, contribution, test, github, email), (err) =>
    (err) ? console.log(err) : console.log('sucess!')
    )
    );
    
        // TODO: Create a function to write README file
        
        // TODO: Create a function to initialize app
        // function init() {}
        
        // Function call to initialize app
        // init();
    