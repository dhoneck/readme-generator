// Import libraries
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');

// Gather README information from user
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title for the project:',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'What is the description for the project:',
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
        type: 'list',
        name: 'License',
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

// TODO: Add license icon and description
// TODO: Add error checking
function writeToFile(fileName, data) {

  // Log status of README file creation
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md created successfully!')
  );
}

// Initialize app
init();
