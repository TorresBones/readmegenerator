// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Creating a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return `[License Link](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt.text](${data.screenshot})
  ## Table of Contents
  * [Languages & Dependencies](#LanguagesAndDependencies)
  * [How to use this application](#HowToUseThisApplication)
  * [Contributors](#Contributors)
  * [Testing](#Testing)
  * [Question](#Questions)
  ## Languages and Dependencies
  ${data.require}
  ## How to use this application
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Question
  Send your questions to ${data.email} or visit [github/${data.creator}](https://github.com/${data.creator}).

`;
}

module.exports = generateMarkdown;
