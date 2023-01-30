// Import Libraries
const inquirer = require('inquirer');
const fs = require('fs');

// Gather README Information From User
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
      writeToFile('README.md', data);
    });
}

// TODO: Add table of contents
// TODO: Add license icon and description
// TODO: Add error checking
function writeToFile(fileName, data) {
  fileContent = '';
  for (const [key, value] of Object.entries(data)) {
    if (key == 'Title') {
      fileContent += '# ' + value + '\n\n';
    } else if (key != 'Email' && key != 'GitHub') {
      fileContent += '## ' + key + '\n';
      fileContent += value + '\n\n';
    }
  }
  fileContent += '## Questions\n';
  fileContent += `[${data['GitHub']}](https://github.com/${data['GitHub']})\n\n`;
  fileContent += data['Email'] + '\n';

  fs.writeFile(fileName, fileContent, (err) =>
    err ? console.log(err) : console.log('README created successfully!')
  );
}

// Initialize App
init();
