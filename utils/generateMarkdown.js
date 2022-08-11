// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license}](https://img.shields.io/badge/license-${license}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseShort;
  switch(license) {
    case 'MIT':
      licenseShort='mit' 
      break;
    case 'Apache':
      licenseShort='apache-2.0'
      break;
    case 'Mozilla':
      licenseShort='mpl-2.0'
      break;
    case 'GNU GPL':
      licenseShort='gpl-3.0'
      break;
    case 'Boost':
      licenseShort='bsl-1.0'
      break;
  }
  return `https://choosealicense.com/licenses/${licenseShort}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=='none') {
    const licenseLink = renderLicenseLink(license);
    return `## License
This project falls under the ${license} license. For more information about this license, see [${licenseLink}](${licenseLink}).
`}
  //else
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title,Description,github,email,...others } = data;
  const sections = Object.entries(others);
  let tableofcons = ''
  for (let section of sections) {
    let secName = section[0]
    tableofcons+= `- [${secName}](#${secName.toLowerCase()})\n`
  }
  return `# ${title}

${renderLicenseBadge(data.License)}
## Description
${Description}

## Table of Contents
${tableofcons}

## Installation
${data.Installation ? data.Installation : 
`The project can be installed by running 
npm i ${title}`}

## Usage
${data.Usage}
![screenshot of project](./screenshot.png)

${data.Credits ?
  `## Credits
  This project could not have been completed without ${data.Credits}.
  ` : ''}
## Contributing
${data.Contributing}

## Tests
${data.Tests}


## Questions
If you have questions or otherwise want to contact me, you can send me an email at [${data.email}](mailto:${data.email}) or find me on Github as [${data.github}](https://github.com/${data.github}) 

${renderLicenseSection(data.License)}`;
}

module.exports = generateMarkdown;
