// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts
const init = () => {
  return inquirer.prompt([{
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
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter your github username!');
          return false;
        }
      }
    },
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
    {
      type: 'input',
      name: 'installation',
      message: 'Provide the necessary installation steps required to install your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples of your projects in use.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide contribution guidelines on how other developers can contribute to your project.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide test information on your project and any examples on how to run it.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license with this project',
      choices: ['MIT', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'BSD-2-Clause', 'BSD-3-Clause', 'IBM', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },
  ])
};

const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README.md file created!'
      })
    })
  })
}

init()
  .then(readmeData => {
    return generateMarkdown(readmeData);
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