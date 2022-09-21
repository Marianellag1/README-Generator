// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            default: 'my project',

        },
        {
            type: 'editor',
            name: 'description',
            message: 'Give a description of your project.',

        },
        {
            type: 'list',
            name: 'Table of Contents',
            message: 'Table of Contents',
            choices: ['Installation', 'Usage', 'License', 'Contribution', 'Test Project', 'Questions',]

        },
        {
            type: 'editor',
            name: 'installation',
            message: 'How is the installation process?',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project for?',

        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What license do you use?',
            choices: ['Unlicense', 'MIT ', 'Attribution License (BY)', 'Open Database License (ODbl)', 'Mozilla']

        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are your contributing guidelines?',

        },
        {
            type: 'editor',
            name: 'test',
            message: 'How can the user test your project?',

        },
        {
            type: 'editor',
            name: 'question',
            message: 'What question do you have, for community feedback.',

        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
