// Import libraries
const inquirer = require('inquirer');
const fs = require('fs');
const { licenses, generateMarkdown } = require('./utils/generateMarkdown.js');

// Validate that input is not empty
const validateInput = async (input) => {
  // Use Regex to check that input is not whitespace
  if (/([^\s])/.test(input)) {
    return true;  
  }
  return 'No input entered. Try again.';
}

// Gather README information from user
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title for the project (required):',
        validate: validateInput,
      },
      {
        type: 'input',
        name: 'Description',
        message: 'What is the description for the project (required):',
        validate: validateInput,
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions:',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage information:',
      },
      {
        type: 'list',
        name: 'License',
        message: 'What license does this application follow:',
        choices: licenses,
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'What are the contribution guidelines:',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What are the test instructions:',
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username:',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email:',
      },
    ])
    .then((data) => {
      writeToFile('README.md', generateMarkdown(data));
    });
}

// Write content to a file
function writeToFile(fileName, data) {
  // Attempt to write to file and log status
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md created successfully!')
  );
}

// Initialize app
init();
