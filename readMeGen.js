const genReadMe = function (title, description, installation, usage, license, contribution, test, github, email) {
    return `
        # **${title}**
        
        ### **License Application is Covered Under:**
            ${license}
        ------------------------------------------------------------
        
        # **Table of Contents**
        
        -[Installation Instructions](#installation-instructions)
        #<a name="installation"></a> Installation
        -[Usage Information](#usage-information)
        -[License](#license)
        -[Contributing Guidelines](#contributing-guidelines)
        -[Test Instructions](#test-instructions)
        -[Question](#question)
        
        ------------------------------------------------------------
        ## **Description of the Project**
             ${description}

        ## **Installation**
            ${installation}

        ## **Usage Information**
            ${usage}


        ## **Contribution Guidelines**
            ${contribution}

        ## **Test Insctructions**
             ${test}

        ## **Questions?**
        ### You can reach me on:
            Github:<https://www.github.com/${github}>
            E-mail:<${email}>
        `
}

module.exports = genReadMe;
