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
    case 'GNU AGPLv3':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    case 'GNU GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'GNU LGPLv3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    case 'BSD-2-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    case 'BSD-3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  switch (license) {
    case '':
      return '';
    case 'MIT':
      return 'MIT';
    case 'Apache 2.0':
      return 'Apache 2.0';
    case 'GNU AGPLv3':
      return 'GNU AGPLv3';
    case 'GNU GPLv3':
      return 'GNU GPLv3';
    case 'GNU LGPLv3':
      return 'GNU LGPLv3';
    case 'BSD-2-Clause':
      return 'BSD-2-Clause';
    case 'BSD-3-Clause':
      return 'BSD-3-Clause';
    case 'IBM':
      return 'IBM';
    case 'Mozilla Public License 2.0':
      return 'Mozilla Public License 2.0';
    case 'Boost Software License 1.0':
      return 'Boost Software License 1.0';
    case 'The Unlicense':
      return 'The Unlicense';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  See my Github profile [${data.github}](https://github.com/${data.github})
  
  If you have any questions, please feel free to contact my email at ${data.email}.
`;
}

module.exports = generateMarkdown;