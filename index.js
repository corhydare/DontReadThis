const inquirer = require("inquirer");
const fs = require("fs");
const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");

const basicQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title for your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of the project:",
    },
    {
      type: "input",
      name: "install",
      message: "Briefly describe installation process:",
    },
    {
      type: "input",
      name: "used",
      message: "Provide usage instructions:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email:",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Which licenses do you want to use?",
      choices: [
        {
          name: "Apache 2.0",
          value:
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br/>",
        },

        {
          name: "Boost 1.0",
          value:
            "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)<br/>",
        },
        {
          name: "BSD Clause",
          value:
            "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)<br/>",
        },
        {
          name: "Creative Commons 1.0",
          value:
            "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)<br/>",
        },
        {
          name: "Attribution 4.0",
          value:
            "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)<br/>",
        },
        {
          name: "Attribution Non-Commercial 4.0",
          value:
            "[![License: CC BY - NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)<br/>",
        },
        {
          name: "Eclipse Public License 1.0",
          value:
            "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)<br/>",
        },
        {
          name: "GNU GPL v3",
          value:
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)<br/>",
        },
        {
          name: "The Hippocratic License 3.0",
          value:
            "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)<br/>",
        },
        {
          name: "IBM Public License Version 1.0",
          value:
            "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)<br/>",
        },
        {
          name: "ISC License (ISC)",
          value:
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br/>",
        },
        {
          name: "The MIT License",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br/>",
        },
        {
          name: "Mozilla Public License 2.0",
          value:
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)<br/>",
        },
        {
          name: "Public Domain",
          value:
            "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)<br/>",
        },
        {
          name: "The Perl License",
          value:
            "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)<br/>",
        },
        {
          name: "The Artistic License 2.0",
          value:
            "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)<br/>",
        },
        {
          name: "SIL Open Font License 1.1",
          value:
            "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)<br/>",
        },
        {
          name: "The Unlicense",
          value:
            "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)<br/>",
        },
        {
          name: "The Do What the Fuck You Want to Public License",
          value:
            "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)<br/>",
        },
        {
          name: "The zlib/libpng License",
          value:
            "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)<br/>",
        },
      ],
    },
    {
      type: "input",
      name: "contrib",
      message: "Name the contributors to this project",
    },
    {
      type: "input",
      name: "tests",
      message: "Who tested this code?",
    },
  ]);
};

const textarea = "```";

const readmeGenerator = ({
  title,
  description,
  install,
  used,
  license,
  contrib,
  github,
  email,
  tests,
}) =>
  `
# ${title}
  
#### Description
  ${textarea} 
  ${description}
  ${textarea}

## Table of Contents:
- [Title](#${title})
  * [Description](#description)
- [Installation Instructions](#installation%20instructions)
- [Usage](#usage)
- [Licenses](#licenses)
- [Contributing](#contributing)
- [Testing](#testing)
- [FAQ](#faq)

## Installation Instructions
${textarea}
${install}
${textarea}

## Usage
${textarea}
${used}
${textarea}

## Licenses
${license}

## Contributing
App works thanks to ${contrib}

## Testing
${tests} tested the app.

## FAQ

For questions you may contact me at [${email}](${email}) :thinking:

In the meantime you can take a look at my [GitHub Profile](https://github.com/${github}) :smirk:
[![Tis I, the author](https://github.com/${github}.png?size=200)]
  `;

const pressStart = () => {
  basicQuestions()
    .then((answers) => fs.writeFileSync("README.md", readmeGenerator(answers)))
    .then(() => console.log("Your masterful README file has been generated!"))
    .catch((err) => console.error(err));
};

pressStart();
