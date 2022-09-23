const genReadMe = function (title, description, installation, usage, license, contribution, test, github, email) {
    return `

# **${title}**

${license}[![Licence](http://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})

---


# **Table of Contents**

-[Installation Instructions](#installation)
-[Usage Information](#usage-information)
-[License](#license)
-[Contributing Guidelines](#contribution-guidelines)
-[Test Instructions](#test-instructions)
-[Question](#questions)


---

## **Description of the Project**
${description}



## **Installation**
${installation}



## **Usage Information**
${usage}



## **Contribution Guidelines**
${contribution}



## **Test Instructions**
${test}



## **Questions**
### If you have any questions about the project, please contact me at: mailto:${email}. 
### You can also see my projects and works at: https://github.com/${github}



### **License**
This project is licensed under:
    ${license}


`
}

module.exports = genReadMe;
