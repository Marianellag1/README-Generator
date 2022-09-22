const genReadMe = function (title, description, installation, usage, license, contribution, test, github, email) {
    return `
# **${title}**

### **License**
    ${license}
------------------------------------------------------------

# **Table of Contents**

-[Installation Instructions](#installation)
-[Usage Information](#usage-information)
-[License](#license)
-[Contributing Guidelines](#contribution-guidelines)
-[Test Instructions](#test-instructions)
-[Question](#questions)

------------------------------------------------------------
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
### You can reach me on:
    Github:<https://www.github.com/${github}>
    E-mail:<${email}>
`
}

module.exports = genReadMe;
