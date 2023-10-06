import HomePage from '../support/page_objects/HomePage.js';
import CareersPage from '../support/page_objects/CareersPage.js';
import Utilities from '../support/utilities/Utilities.js';

let os = require('os');

let option = 'Books'
let minPrice = 100
let maxPrice = 200
let USStatesFile = 'cypress\\fixtures\\USA_States.csv';

// ### Scenario #1
// * Go to www.amazon.in/
// * Verify the Home Page contins the Amazon.in logo
context('When I access www.amazon.in Home Page', () => {
    it('I should see that its Amazon India Home Page', () => {

        // Access Amazon India Page
        cy.visit(Cypress.env('shoppingSiteIN'))

        // Demonstration Purpose: Get text of the locator 'Amazon_Locale_Span'
        cy.get(HomePage.Amazon_Locale_Span).then(article => {
            let value = article.text();
            cy.log("Text inside the locator: " + value)
        })

        // Verify the Home Page contins the Amazon.in logo
        cy.get(HomePage.Amazon_Locale_Span).should('contain', '.in')
    })
})


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
        cy.get(CareersPage.jobCategoryCheckbox).scrollIntoView({ duration: 500 }).check()

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
                let contains = false;
                let locationText = item.text();
                // cy.log("Location Text inside: " + locationText)

                for (let stateCode of stateCodes) {
                    if (locationText.includes(stateCode) & locationText.includes('US')) {
                        cy.log("Location Text inside: " + locationText + " contains " + stateCode)
                        contains = true;
                        break;
                    }
                }

                // Assert that the location text contains the state code
                expect(contains).to.be.true;

                // Get the job title text from the Careers Page and check if it contains the word 'economics' or 'economist'
                cy.get(CareersPage.jobTitles).each((item, index, list) => {
                    let contains = false;
                    let jobTitleText = item.text().toLowerCase();
                    cy.log("Job Title Text inside: " + jobTitleText)
                    Utilities.getRandomStringWithMilliSeconds('JobTitle_')

                    // Check if the job title contains the word 'economics' or 'economist'
                    if (jobTitleText.includes("economics") & jobTitleText.includes('economist'))
                        contains = true;

                    // Assert that the job title contains the word 'economics' or 'economist'
                    expect(contains).to.be.true;
                })
            })
        })
    })
})


// ### Scenario #3
// * Go to www.amazon.in/
// * Select 'Books' from Search Dropdown
// * And select 'English' from language options
// * In Price Range TextBoxes, put 100 as Min and 200 as Max and click 'Go' button
// * Verify all results found are based on the above critaria only
describe('When I Go to www.amazon.in', () => {

    // Access Amazon India Page
    beforeEach(() => {
        cy.visit(Cypress.env('shoppingSiteIN'))
    })

    it('And select "Books" with specific price range, then specific price ranged books are displayed.', () => {
        // Filter by 'Books'
        cy.get(HomePage.category_dropdown).select(option, { force: true })

        // Click the Search Button
        cy.get(HomePage.search_button).click()

        // Filter by 'English' books now
        cy.get(HomePage.english_books_link).click()

        // Put 100 in Min Price and 200 in High Price Text Box and Click Go button
        cy.get(HomePage.low_price_textbox).type(minPrice)
        cy.get(HomePage.high_price_textbox).type(maxPrice + '{enter}')

        // const text = cy.get(HomePage.Amazon_Locale_Span).invoke('text')
        // // .innerText()
        // // const text = cy.get(HomePage.Amazon_Locale_Span).textContent
        // cy.log("Text inside the above locator(s): " + text)

        // cy.get(HomePage.Amazon_Locale_Span).debug()


        // There are 35 spans here on the page "HomePage.price_span"; iterating through them now...
        cy.get(HomePage.price_span).each((item, index, list) => {
            // Just checking the validity of 'list' above
            // expect(list).to.have.length(35)

            // Get the listed price of item 
            const price = Number(item.text());
            cy.log("Price Text inside: " + price);

            // Only check the price range when the price is not equal to 0 
            if (price != 0) {
                cy.log('Inside the if condition...');

                // Check if its greater than minPrice
                expect(price).to.be.greaterThan(minPrice);

                // Check if its lesser than maxPrice
                expect(price).to.be.lessThan(maxPrice);
            }
        })
    })
})


// ### Scenario #4
// * Go to www.amazon.in/
// * Select 'Books' from Search Dropdown
// * In Search Box, enter 'Neil Gaiman' and press 'Enter' key
// * Verify all results found are based on the above critaria only
describe('When I Go to www.amazon.in', () => {

    // Access Amazon India Page
    beforeEach(() => {
        cy.visit(Cypress.env('shoppingSiteIN'))
    })

    let option = 'Books'
    let searchInput = 'Neil Gaiman'

    it('And search by a specific author, autosuggestions should show that author\'s most frequent searched items only.', () => {
        // Put 'Neil Gaiman' in Search Box
        cy.get(HomePage.search_input).type(searchInput)

        // Let results load
        cy.wait(1000);

        // Verify the Auto Suggestion List is displayed and displays the search input
        cy.get(HomePage.autosuggestion_list).each((item, index, list) => {
            // Get the listed price of item 
            let autoSuggestionItem = item.text().toLowerCase();
            cy.log("Auto Suggestion Text inside: " + autoSuggestionItem);
            cy.log(searchInput.toLowerCase());

            // cy.get(item).should('have.text', searchInput.toLowerCase());
            expect(item).to.contain(searchInput.toLowerCase())
        });
    })

    it('And search "Books" by specific author, then search results should show that author\'s atleast 70% results.', () => {
        // Filter by 'Books'
        cy.get(HomePage.category_dropdown).select(option, { force: true })

        // Put 'Neil Gaiman' in Search Box
        cy.get(HomePage.search_input).type(searchInput)

        // Click the Search Button
        cy.get(HomePage.search_button).click()

        let totalAuthors = 0;
        let totalSearchedAuthorMentions = 0;
        let mentionPercentage = 0

        // Iterating through the search results now...
        cy.get(HomePage.authorNameDiv).each((item, index, list) => {

            // Get the author name from item 
            let authorNameText = item.text().toLowerCase();

            if (authorNameText.includes('by') & !authorNameText.includes('get it by')) {
                cy.log("Author Name Text inside: " + authorNameText);
                totalAuthors += 1;
                if (authorNameText.toLowerCase().includes(searchInput.toLowerCase())) {
                    totalSearchedAuthorMentions += 1;
                }
            }

            // cy.log(totalAuthors, totalSearchedAuthorMentions);
            mentionPercentage = (totalSearchedAuthorMentions / totalAuthors) * 100;
            cy.wrap(mentionPercentage).as('mentionPercentage');
        });

        cy.get('@mentionPercentage').then((mentionPercentage) => {
            cy.log("Total Mention %age: " + mentionPercentage);
            expect(mentionPercentage).to.be.greaterThan(70);
        })
    })
})
