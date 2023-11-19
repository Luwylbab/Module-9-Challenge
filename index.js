// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the application?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of the app?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What is the installation process?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How is the app used?',
            },
            {
                type: 'input',
                name: 'contributions',
                message: 'How could someone contribute to the application?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'How could a user run test for this application?',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'What questions could a user have about the application?',
            },
            {
                type: 'list',
                message: 'What is the license you want to pick?',
                name: 'licenses',
                choices: ['MIT', 'GPL_3.0', 'BSD_3'],
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
        ])
        .then((data) => {
            console.log(data)
            const markdown = generateMarkdown(data)
            fs.writeFile("README2.md", markdown, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

// Function call to initialize app
init();
