// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT": license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GPL v3": license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Apache": license = "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "none": license = "";
      break;
  }
  return license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT": license = "Learn more [here](https://opensource.org/licenses/MIT).";
      break;
    case "GPL v3": license = "Learn more [here](https://www.gnu.org/licenses/gpl-3.0).";
      break;
    case "Apache": license = "Learn more [here](https://opensource.org/licenses/Apache-2.0).";
      break;
    case "none": license = "";
      break;
  }
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "MIT": license = `> **Note**: This application is covered under the ${license} license.`;
      break;
    case "GPL v3": license = `> **Note** This application is covered under the ${license} license.`;
      break;
    case "Apache": license = `> **Note** This application is covered under the ${license} license.`;
      break;
    case "none": license = "N/A";
      break;
  }
  return license;
}

// ${renderLicenseBadge(license)}
// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, testing, github, email}) {
  return `
# ${title} ${renderLicenseBadge(license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

[Back to top](#)

## Installation
${installation}

[Back to top](#)

## Usage
${usage}

[Back to top](#)

## License
${renderLicenseSection(license)} ${renderLicenseLink(license)}

[Back to top](#)

## Contributing
${contribution}

[Back to top](#)

## Tests
${testing}

[Back to top](#)

## Questions
You can view my GitHub repository [here](https://www.github.com/${github}). If you have any additional questions, feel free to reach out to me via [email](mailto:${email}).

[Back to top](#)
`;
}

module.exports = generateMarkdown;