// Import Libraries
const inquirer = require('inquirer');
const fs = require('fs');

// Gather README Information From User
function askQuestions() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title for the project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description for the project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does this application follow:',
        choices: [
          'None',
          'Apache License 2.0', 
          'GNU General Public License v3.0', 
          'MIT License',
          'BSD 2-Clause "Simplified" License',
          'BSD 3-Clause "New" or "Revised" License',
          'Boost Software License 1.0',
          'Creative Commons Zero v1.0 Universal',
          'Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v2.1',
          'Mozilla Public License 2.0',
          'The Unlicense',
        ]
      },
    ])
    .then((data) => {
      console.log(data);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Initialize app
function init () {
  askQuestions();
};

init();
