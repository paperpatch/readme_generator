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
      message: 'Provide installation instructions for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information for your project',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide contribution guidelines for your project',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide test information for your project',
    },
    // WHEN I choose a license for my application from a list of options
    {
      type: 'checkbox',
      name: 'license',
      message: 'Is there a license with this project? (Check all that apply)',
      choices: ['MIT', 'Apache', 'GPL', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause']
    },
    // WHEN I enter my GitHub username
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your GitHub username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('You need to enter your github username!');
          return false;
        }
      }
    },
    // WHEN I enter my email address
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address',
    },
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