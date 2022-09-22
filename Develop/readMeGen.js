const genReadMe = function (title, description, installation, usage, license, contribution, test, question) {
    return `
    # Professional README
    
        ${title}
        ${description}
 
        -[Installation Instructions](#installation-instructions)
        -[Usage Information](#usage-information)
        -[License](#license)
        -[Contributing Guidelines](#contributing-guidelines)
        -[Test Instructions](#test-instructions)
        -[Question](#question)
 
        ## Installation
        ${installation}

        ## Usage Information
        ${usage}

        ### License
        ${license}

        ## Contribution Guidelines
        ${contribution}

        ## Test Insctructions
        ${test}

        ## Questions
        ${question}`
}

module.exports = genReadMe;
