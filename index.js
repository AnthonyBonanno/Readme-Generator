// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const inquirer = require('inquirer');
inquirer
    .prompt([
        /* These are the questions that the user will see */
        {
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
        },        {
            type: 'input',
            message: 'Please enter test instructions:',
            name: 'test'
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
