import EventCard from './Locators/EventCard.cy.js';
import PageLocators from './Locators/PageLocators.cy.js';
import HomePageLocators from './Locators/HomePage.cy.js';
import CareersPageLocators from './Locators/CareersPage.cy.js';

const dateUtils = require('./Utilities/date_utilities.cy.js');
const pageLocators = new PageLocators();
const eventCard = new EventCard();
const homePageLocators = new HomePageLocators();
const careersPageLocators = new CareersPageLocators();


let option = 'Books'
let minPrice = 100
let maxPrice = 200

// context('When I access www.amazon.in Home Page', () => {
//     it('I should see that its Amazon India Home Page', () => {

//         // Access Amazon India Page
//         cy.visit('/')

//         // Demonstration Purpose: Get text of the locator 'Amazon_Locale_Span'
//         cy.get(homePageLocators.Amazon_Locale_Span).then(article => {
//             const value = article.text();
//             cy.log("Text inside the locator: " + value)
//         })

//         // Verify the Home Page contins the Amazon.in logo
//         cy.get(homePageLocators.Amazon_Locale_Span).should('contain', '.in')
//     })
// })

// ### Scenario #2
// * Go to www.amazon.science/
// * Search for 'machine learning' in jobs
// * Select Country as 'United States'
// * Verify all results found are based in the US only

// context('Go to www.amazon.science/careers', () => {
//     it('Search for "machine learning" in jobs', () => {

//         // Access Amazon Science Careers Page
//         cy.visit('/')
//         cy.wait(5000)

//         // First: scroll into view
//         cy.get(careersPageLocators.Bengaluru_Map_Pin).scrollIntoView()

//         // Verify the 
//         cy.get(careersPageLocators.Bengaluru_Map_Pin).click()

//         cy.get(careersPageLocators.Hyderabad_Map_Pin).click()
//     })
// })


// ### Scenario #3
// * Go to www.amazon.in/
// * Select 'Books' from Search Dropdown
// * And select 'English' from language options
// * In Price Range TextBoxes, put 100 as Min and 200 as Max and click 'Go' button
// * Verify all results found are based on the above critaria only


// describe('When I Go to www.amazon.in', () => {

//     // Access Amazon India Page
//     beforeEach(() => {
//         cy.visit('/')
//     })



//     it('And select "Books" with specific price range, then specific price ranged books are displayed.', () => {
//         // Filter by 'Books'
//         cy.get(homePageLocators.category_dropdown).select(option, { force: true })

//         // Click the Search Button
//         cy.get(homePageLocators.search_button).click()

//         // Filter by 'English' books now
//         cy.get(homePageLocators.english_books_link).click()

//         // Put 100 in Min Price and 200 in High Price Text Box and Click Go button
//         cy.get(homePageLocators.low_price_textbox).type(minPrice)
//         cy.get(homePageLocators.high_price_textbox).type(maxPrice + '{enter}')

//         // const text = cy.get(homePageLocators.Amazon_Locale_Span).invoke('text')
//         // // .innerText()
//         // // const text = cy.get(homePageLocators.Amazon_Locale_Span).textContent
//         // cy.log("Text inside the above locator(s): " + text)

//         // cy.get(homePageLocators.Amazon_Locale_Span).debug()


//         // There are 35 spans here on the page "homePageLocators.price_span"; iterating through them now...
//         cy.get(homePageLocators.price_span).each((item, index, list) => {
//             // Just checking the validity of 'list' above
//             // expect(list).to.have.length(35)

//             // Get the listed price of item 
//             const price = Number(item.text());
//             cy.log("Price Text inside: " + price);

//             // Only check the price range when the price is not equal to 0 
//             if (price != 0) {
//                 cy.log('Inside the if condition...');

//                 // Check if its greater than minPrice
//                 expect(price).to.be.greaterThan(minPrice);

//                 // Check if its lesser than maxPrice
//                 expect(price).to.be.lessThan(maxPrice);
//             }
//         });
//     })
// })

// ### Scenario #4
// * Go to www.amazon.in/
// * Select 'Books' from Search Dropdown
// * In Search Box, enter 'Neil Gaiman' and press 'Enter' key
// * Verify all results found are based on the above critaria only


describe('When I Go to www.amazon.in', () => {

    // Access Amazon India Page
    beforeEach(() => {
        cy.visit('/')
    })

    let option = 'Books'
    let searchInput = 'Neil Gaiman'

    it('And search by a specific author, autosuggestions should show that author\'s most frequent searched items only.', () => {
        // Put 'Neil Gaiman' in Search Box
        cy.get(homePageLocators.search_input).type(searchInput)

        // Let results load
        cy.wait(1000);

        // Verify the Auto Suggestion List is displayed and displays the search input
        cy.get(homePageLocators.autosuggestion_list).each((item, index, list) => {
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
        cy.get(homePageLocators.category_dropdown).select(option, { force: true })

        // Put 'Neil Gaiman' in Search Box
        cy.get(homePageLocators.search_input).type(searchInput)

        // Click the Search Button
        cy.get(homePageLocators.search_button).click()

        let totalAuthors = 0;
        let totalSearchedAuthorMentions = 0;
        let mentionPercentage = 0

        // Iterating through the search results now...
        cy.get(homePageLocators.authorNameDiv).each((item, index, list) => {

            // Get the author name from item 
            let authorNameText = item.text().toLowerCase();

            if (authorNameText.includes('by') & !authorNameText.includes('get it by')) {
                cy.log("Author Name Text inside: " + authorNameText);
                totalAuthors += 1;
                if (authorNameText.toLowerCase().includes(searchInput.toLowerCase())) {
                    totalSearchedAuthorMentions+= 1;
                }
            }

            // cy.log(totalAuthors, totalSearchedAuthorMentions);
            mentionPercentage = (totalSearchedAuthorMentions / totalAuthors) * 100;
            cy.wrap(mentionPercentage).as('mentionPercentage');
        });

        cy.get('@mentionPercentage').then((mentionPercentage) => {
            cy.log("Total Mention %age: " + mentionPercentage);
            expect(mentionPercentage).to.be.greaterThan(70);
        });
    })



});










