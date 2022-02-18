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
      message: "Enter your github profile URL:",
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
      ],
    },
    {
      type: "input",
      name: "contrib",
      message: "Name the contributors, separated by commas!",
    },
  ]);
};

const textarea = "```";
IBM Public License Version 1.0
  "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  ISC License (ISC)
  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  The MIT License
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
Mozilla Public License 2.0
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  Public Domain
  "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
  The Perl License
  "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  The Artistic License 2.0
  "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  SIL Open Font License 1.1
  "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
  The Unlicense
  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  The Do What the Fuck You Want to Public License
  "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  The zlib/libpng License
  "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";

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

For questions you may use my email [${email}](${email}) :thinking:

In the meantime you can take a look at my [GitHub Profile](${github}) :smirk:

##


  `;

const pressStart = () => {
  basicQuestions()
    .then((answers) =>
      fs.writeFileSync("DONTREADME.md", readmeGenerator(answers))
    )
    .then(() =>
      console.log(
        "%c Your masterful README file has been generated!",
        "color:yellow"
      )
    )
    .catch((err) => console.error(err));
};

pressStart();
