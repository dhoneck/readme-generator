// Available software licenses
licenses = [
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
];

// Get markdown for license badge
function renderLicenseBadge(license) {
  // Get link to badge image
  var imgURL = '';
  if (license == 'None') {
    return '';
  } else if (license == 'Apache License 2.0') {
    imgURL = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  } else if (license == 'GNU General Public License v3.0') {
    imgURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  } else if (license == 'MIT License') {
    imgURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';   
  } else if (license == 'BSD 2-Clause "Simplified" License') {
    imgURL = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';    
  } else if (license == 'BSD 3-Clause "New" or "Revised" License') {
    imgURL = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';    
  } else if (license == 'Boost Software License 1.0') {
    imgURL = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';    
  } else if (license == 'Creative Commons Zero v1.0 Universal') {
    imgURL = 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg';    
  } else if (license == 'Eclipse Public License 2.0') {
    imgURL = 'https://img.shields.io/badge/License-EPL_2.0-red.svg';    
  } else if (license == 'GNU Affero General Public License v3.0') {
    imgURL = 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';    
  } else if (license == 'GNU General Public License v2.0') {
    imgURL = 'https://img.shields.io/badge/License-GPL_v2-blue.svg';    
  } else if (license == 'GNU Lesser General Public License v2.1') {
    imgURL = 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';    
  } else if (license == 'Mozilla Public License 2.0') {
    imgURL = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';    
  } else if (license == 'The Unlicense') {
    imgURL = 'https://img.shields.io/badge/license-Unlicense-blue.svg';    
  }

  // Create and return markdown for license badge
  var licenseInfoUrl = renderLicenseLink(license);
  return `[![License](${imgURL})](${licenseInfoUrl})` + '\n';
}

// Get link to license description
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license == 'GNU General Public License v3.0') {
    return 'https://opensource.org/licenses/gpl-license';
  } else if (license == 'MIT License') {
    return 'https://opensource.org/licenses/MIT';   
  } else if (license == 'BSD 2-Clause "Simplified" License') {
    return 'https://opensource.org/licenses/BSD-2-Clause';    
  } else if (license == 'BSD 3-Clause "New" or "Revised" License') {
    return 'https://opensource.org/licenses/BSD-3-Clause';    
  } else if (license == 'Boost Software License 1.0') {
    return 'https://opensource.org/licenses/BSL-1.0';    
  } else if (license == 'Creative Commons Zero v1.0 Universal') {
    return 'https://choosealicense.com/licenses/cc0-1.0/';    
  } else if (license == 'Eclipse Public License 2.0') {
    return 'https://opensource.org/licenses/EPL-2.0';    
  } else if (license == 'GNU Affero General Public License v3.0') {
    return 'https://opensource.org/licenses/AGPL-3.0';    
  } else if (license == 'GNU General Public License v2.0') {
    return 'https://opensource.org/licenses/GPL-2.0';    
  } else if (license == 'GNU Lesser General Public License v2.1') {
    return 'https://opensource.org/licenses/LGPL-2.1';    
  } else if (license == 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';    
  } else if (license == 'The Unlicense') {
    return 'https://opensource.org/licenses/unlicense';    
  }
}

// Get the license section of README
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }
  return `This project is covered by the following license: [${license}](${renderLicenseLink(license)})`;
}

// Generate markdown for README
function generateMarkdown(data) {
  var fileContent = '';
  var tableOfContents = '';
  var questionsSection = '';

  // Save license name and replace license section with more details
  var license = data['License'];
  data['License'] = renderLicenseSection(license);
  
  // Combine GitHub and email into a contact section
  var gitHub = data['GitHub'];
  var email = data['Email'];
  if (gitHub || email) {
    questionsSection = 'Contact me at:' + '\n';
    if (gitHub) {
      questionsSection += `* GitHub - [${data['GitHub']}](https://github.com/${data['GitHub']})` + '\n';
    }
    if (email) {
      questionsSection += `* Email - ${data['Email']}` + '\n';
    }
    data['Questions'] = questionsSection;
  }
  // Delete properties now that they have been merged into a new section
  delete data['GitHub'];
  delete data['Email'];
  
  // Loop through properties to generate table of contents
  var index = 1;
  for (const [key, value] of Object.entries(data)) {
    if (key != 'Title' && key != 'Description' && value != '') {
      if (index == 1) {
        tableOfContents += '## Table of Contents' + '\n';
      }
      tableOfContents += `${index}. [${key}](#${key.toLowerCase()})` + '\n';
      index++;
    }
  }

  // Add information to file content
  fileContent += renderLicenseBadge(license);
  fileContent += `# ${data['Title']}` + '\n\n';
  fileContent += '## Description' + '\n';
  fileContent += `${data['Description']}` + '\n\n';
  fileContent += tableOfContents + '\n\n';
  delete data['Title'];
  delete data['Description'];

  // Loop through remaining properties to generate content for README
  for (const [key, value] of Object.entries(data)) {
    if (value != '') {
      fileContent += '## ' + key + '\n';
      fileContent += value + '\n\n';
    }
  }
  return fileContent;
}

module.exports = {
  licenses,
  generateMarkdown,
};
