const path = require('path');

class Utilities {

    // Get Random number (both float or Integer) between min and max values provided (both inclusive) 
    static getRandomNumber(min, max, numberType) {
        min = Math.ceil(min);
        max = Math.floor(max);
        if (numberType == "Float")
            return (Math.floor(Math.random() * (max - min + 1)) + min).toFixed(1);
        else
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    // Get a random string appended to it 
    static getRandomString(prefixName) {
        return prefixName + "_" + Math.random().toString(36).substring(2, 7);

    }


    // Get a random string with milli seconds appended to it
    static getRandomStringWithMilliSeconds(prefixName) {
        return prefixName + "_" + (performance.timeOrigin * 10);
    }


    // Get temporary file path where run time data can be saved and retrieved from
    static getTempDataFilePath() {
        let tempDataFolder = String(path.join('cypress', 'downloads', 'TempData'));
        return tempDataFolder;
    }


    // For deleting the folder provided as input parameter 
    static deleteFolder = (folder) => {
        // const downloadsFolder = Cypress.config('downloadsFolder')
        cy.log("UTIL  --->   Deleting files from folder..." + folder);
        cy.task('deleteFolder', folder);
    }
}

export default Utilities;