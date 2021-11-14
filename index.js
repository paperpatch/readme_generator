// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter the name of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a description of the project (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    // WHEN I choose a license for my application from a list of options
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    },
    // WHEN I enter my GitHub username
    // WHEN I enter my email address
  ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()
  .then(promptUser)
  .then(readmeData => {
    return generatePage(readmeData);
  })
  .then(readmePage => {
    return writeToFile(readmePage);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });