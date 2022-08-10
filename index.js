// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {name: 'title',
    message: 'What is the title of your project?',
    type: 'input'},
    {type: 'input',
    name: 'Description',
    message: 'Describe your project (motivations, lessons learned, reasons to build, etc).',
    },
    {type: 'input',
    name: 'Installation',
    message: 'How should users install this project?',
    },
    {type: 'input',
    name: 'Usage',
    message: 'Please provide usage instructions for this project.',
    },
    {type: 'input',
    name: 'Contributing',
    message: 'How can users contribute to this project (if indeed they can contribute)?',
    },
    {type: 'input',
    name: 'Tests',
    message: 'Please include testing information, if there is anything to share.'
    },
    {type: 'list',
    name: 'license',
    message: 'What license should your project have?',
    choices: ['None','MIT','']}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Successfully generated README!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(responses=> {
        const markdown = md.generateMarkdown(JSON.stringify(responses));
        writeToFile('README.md',markdown);
    })
}

// Function call to initialize app
init();
