// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  :mag:

  This is a node.js application powered by JavaScript that generates a website of github repositories and publishes to new html file.

  ## Table of Contents

  * [Installation](#installation)
  * [Features](#features)
  * [Setup](#setup)
  * [Usage](#usage)
  * [Contributing](#contributing)

  ## Features
  :newspaper:

  Uses criterias and prompts for user inputs to build their portfolio for github repositories.

  Built With:

  - JavaScript
  - Node.js
  - npm Inquirer.js

  ## Setup
  :floppy_disk:

  Requires Node.js and npm (Node Package Manager). Go to [Node's website](https://nodejs.org/en/) and follow the download instructions for your appropriate setup. NPM, or Node Package Manager, is the default package manager for Node.js. It is distributed with Node.js. Do not forget to npm init if you are using it for the very first time.

  Install [inquirer.js](https://www.npmjs.com/package/inquirer) from the [npm website](https://www.npmjs.com/).

  \`npm init`

  `npm install inquirer``

  ## Usage

  :computer:

  Fork this repository and open the files within to access the command prompt.

  Type the following within the terminal to start the series of user prompts and criteria. This will create a new index.html and style.css within the "dist" folder.:

  \`node app``

  ## Contributing

  :octocat:

  [Pat Chen](https://github.com/paperpatch)
`;
}

module.exports = {generateMarkdown};