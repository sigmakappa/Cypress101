import CareersPage from '../support/page_objects/CareersPage.js';
import Utilities from '../support/utilities/Utilities.js';

let os = require('os');

let USStatesFile = 'cypress\\fixtures\\USA_States.csv';

// ### Scenario #2
// * Go to www.amazon.science/
// * Select Country as 'United States' and Category as 'Economics' 
// * Verify all results found are based in the US only and are for 'Economics' only

describe('Go to www.amazon.science/careers', () => {
    it('Search for "Economics" jobs in "US" location', () => {
        // Access Amazon Science Careers Page
        cy.visit(Cypress.env('careerSite'))

        // Apply filters : Country = United States and Job Category = Economics
        cy.get(CareersPage.jobCountryCheckbox).scrollIntoView({ duration: 2000 }).check()

        // Let results load
        cy.wait(1000);

        cy.get(CareersPage.jobCategoryCheckbox).scrollIntoView({ duration: 1000 }).check()

        // Let results load
        cy.wait(1000);

        // Verify all results found are based in the US only
        cy.readFile(USStatesFile).then((data) => {

            var theMap = new Map();
            var rows = data.split(os.EOL);

            // console.log("\n Here...\n");
            // console.log("Rows after split:\n" + rows[1]);

            // Get state codes from the CSV file and put them in a Map
            rows.forEach(function (row) {
                var key = row.split(",")[0];
                var value = row.split(",")[1];
                theMap.set(key, value)
            });

            // Get the state codes from the Map and put them in an array
            let stateCodes = []
            for (let entry of theMap.entries()) {
                // cy.log(entry[0] + " -> " + entry[1]);
                stateCodes.push(entry[0])
            }

            // Get the location text from the Careers Page and check if it contains the state code
            cy.get(CareersPage.jobLocationsLocationState).each((item, index, list) => {
                let containsLocation = false;
                let locationText = item.text();
                // cy.log("Location Text inside: " + locationText)

                for (let stateCode of stateCodes) {
                    if (locationText.includes(stateCode) & locationText.includes('US')) {
                        cy.log("Location Text inside: " + locationText + " contains " + stateCode)
                        containsLocation = true;
                        break;
                    }
                }

                // Assert that the location text contains the state code
                expect(containsLocation).to.be.true;
            })

            // Get the job title text from the Careers Page and check if it contains the word 'economics' or 'economist'
            cy.get(CareersPage.jobTitles).each((item, index, list) => {
                let containsTitle = false;
                let jobTitleText = item.text().toLowerCase();
                cy.log("Job Title Text: " + jobTitleText)

                // Check if the job title contains the word 'economics' or 'economist'
                if (jobTitleText.includes("economics") | jobTitleText.includes('economist'))
                    containsTitle = true;

                // Assert that the job title contains the word 'economics' or 'economist'
                expect(containsTitle).to.be.true;
            })
        })
    })
})
