// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// const generateMarkdown = ({title, description, installation, usage, contribution, test}) => 
const generateMarkdown = require('./utils/generateMarkdown');
const fileName ='README.md';



// TODO: Create an array of questions for user input
// This is an array of questions, each question stores a type, message, and name
const questions = [{
    type: 'input',
    message: 'Please enter a title for this Readme:',
    name: 'title'
},
{
    type: 'input',
    message: 'Please also enter a description:',
    name: 'description'
},
{
    type: 'input',
    message: 'Please enter installation instructions:',
    name: 'installation'
},
{
    type: 'input',
    message: 'Please enter usage information:',
    name: 'usage'
},
{
    type: 'input',
    message: 'Please enter contribution guidelines:',
    name: 'contribution'
},
{
    type: 'input',
    message: 'Please enter test instructions:',
    name: 'test'
},
{
    type: 'list',
    message: 'Please choose a license:',
    name: 'license',
    choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'No license']
},
{
    type: 'input',
    message: 'Please enter your GitHub username:',
    name: 'username'
},
{
    type: 'input',
    message: 'Please enter your email address:',
    name: 'email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, readmeContent) { 
    fs.writeFile(fileName, readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'));
}

// TODO: Create a function to initialize app
function init() {
    /* The line below stores the questions that the user will see */
    inquirer.prompt(questions)

        .then((answers) => {
            // Using user feedback from .prompt to create a readme file
            const readmeContent = generateMarkdown(answers);
            writeToFile(fileName, readmeContent);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
