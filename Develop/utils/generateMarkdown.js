// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
function generateMarkdown(data) {
  var fileContent = '';
  var tableOfContents = 'Table of Contents' + '\n';
  var questionsSection = '';

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
    if (key != 'Title' && key != 'Description') {
      tableOfContents += `${index}. [${key}](#${key.toLowerCase()})` + '\n'
      index++;
    }
  }

  // Combine properties to create the file content
  fileContent += `# ${data['Title']}` + '\n\n';
  fileContent += '## Description' + '\n';
  fileContent += `${data['Description']}` + '\n\n';
  fileContent += tableOfContents + '\n\n';
  delete data['Title'];
  delete data['Description']

   // Loop through remaining properties to generate content for README
  for (const [key, value] of Object.entries(data)) {
    fileContent += '## ' + key + '\n';
    fileContent += value + '\n\n';
  }
  return fileContent;
}

module.exports = generateMarkdown;
