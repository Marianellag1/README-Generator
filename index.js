const inquirer = require('inquirer');
const fs = require('fs');
const genReadMe = require('./readMeGen');

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
            choices: ['Unlicense', 'MIT','ODbl', 'MPL_2.0']
            
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?',
            default: 'Anyone can contribute to the project, as long as the it is agreed upon by the author, in order to merge any confirmed changes.'
            
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can the user test your project?',
            default: 'User can clone copy of project and test project. If user believes that the project lacks something and would like to contribute, please see contribution guidelines.'
            
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
    .then(({title, description, installation, usage, license, contribution, test, github,email})=> {
        fs.writeFile('./build/README.md', genReadMe(title, description, installation, usage, license, contribution, test, github, email), (err) =>
        (err) ? console.log(err) : console.log('sucess!')
        )
    },
        );
    