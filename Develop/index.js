// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',

        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',

        },
        {
            type: 'input',
            message: 'How do you describe yourself?',
            name: 'bio',

        },
        {
            type: 'input',
            message: 'What is your LinkedIn?',
            name: 'LinkedIn',

        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'GitHub',

        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
