// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case '':
        return '';
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case 'Apache 2.0':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      case 'GPL 3.0':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case 'BSD-2-Clause':
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      case 'BSD-3-Clause':
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      case 'IBM':
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(datalicense) {
  console.log(datalicense);
  for (let i=0; i<datalicense.length; i++) {
    switch (license) {
      case '':
        return '';
      case 'MIT':
        return `MIT License `
      case 'Apache 2.0':
        return `Apache 2.0 `
      case 'GPL 3.0':
        return `GPL 3.0 `
      case 'BSD-2-Clause':
        return `BSD-2-Clause `
      case 'BSD-3-Clause':
        return `BSD-3-Clause `
      case 'IBM':
        return `IBM `
    };
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  :floppy_disk:

  ${data.installation}

  ## Usage

  :computer:

  ${data.usage}

  ## Contributing

  :memo:
  :pencil:

  ${data.contribution}

  ## License

  :receipt:	

  ${renderLicenseSection(data)}

  ## Questions

  :envelope:

  See my Github profile [${data.github}](https://github.com/${data.github})
  
  If you have any questions, please feel free to contact my email at ${data.email}.
`;
}

module.exports = generateMarkdown;