// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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

        },//Does the table of contents go here?
        // {
        //     type: 'list',
        //     name: 'Table of Contents',
        //     message: 'Table of Contents',
        //     choices: ['Installation', 'Usage', 'License', 'Contribution', 'Test Project', 'Questions',]

        // },
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
            name: 'question',
            message: 'What question do you have, for community feedback.',

        },
    ])

    // TODO: Create a function to write README file
    .then(({title, description, installation, usage, license, contribution, test, question }) =>
        fs.writeFile('README.md', JSON.stringify( title,description, installation, usage, license, contribution, test, question), (err) =>
            err ? console.log(err) : console.log("Sucess!")
        )
    );

//fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.md, data), (err) =>
//err ? console.log(err) : console.log("Sucess!")
//)


// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
