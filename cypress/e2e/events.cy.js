import EventCard from './Locators/EventCard.cy.js';
import PageLocators from './Locators/PageLocators.cy.js';

const utils = require('./Utilities/utilities.cy.js');
const pageLocators = new PageLocators();
const eventCard = new EventCard();

context('When I select a specific date from the calendar', () => {
    it('I can only see events that happen on that day', () => {
        
        // Access Events Page
        cy.visit('/')

        // Click the current day from the calendar
        cy.get(pageLocators.calendarDate_Button).contains(utils.getCurrentDate()).click()

        // Verify the card body contains the above specified date
        cy.get(pageLocators.dateField_Titles).should('contain', utils.getTodayDate_MMM_DD_YYYY())
    })
})

describe('Given that current date is November 20th, 2021', () => {

    // Access Events Page
    beforeEach(() => {
        cy.visit('/')
    })

    context('When I click on **Today’s Events**', () => {
        it('I can see all events happening today', () => {

            // Click on the **Today’s Events** Link
            cy.get(pageLocators.todaysEvents_Link).click()

            // Wait for the page to get loaded
            // cy.wait(2000)

            // Verify the listed card(s) contains today's date
            cy.get(pageLocators.dateField_Titles).should('contain', utils.getTodayDate_MMM_DD_YYYY())
        })
    })

    context('When I use the **Search Input** in the navigation bar and type in "Tokyo" and confirm', () => {
        it('I can find all events matching the phrase "Tokyo"', () => {
            const searchText = 'Tokyo'

            // Enter the text 'Tokyo' in searchbox and Enter
            cy.get(pageLocators.search_TextBox).type(searchText + '{enter}')

            // Wait for the page to get loaded with the expected results
            // cy.wait(2000)

            // Verify the listed card(s) title contains the searched text
            cy.get(pageLocators.searchedCard_Titles).should('contain', searchText)
        })
    })

    context('When I select the **"Model UN"** organization from the **Filter by Organization** dropdown', () => {
        it('I can see all events organized by that organization', () => {
            const organizer = 'Model UN'

            // Filter events by organization
            cy.get(pageLocators.orgFilter_Select).select(organizer)

            // Wait for the page to get loaded with the expected results
            // cy.wait(2000)

            // Verify the listed card(s) "Organized by" section contain the above searched organization
            cy.get(pageLocators.organizedBy_Titles).should('contain', organizer)
        })
    })

})

describe('Given that current date is September 2nd, 2021', () => {

    // Access Events Page
    beforeEach(() => {
        cy.visit('/')
    })

    context('When I click on **Today’s Events**', () => {
        it('I can see there are no events.', () => {

            // Select Date as September 2nd, 2021
            utils.selectAnotherMonthDate_Calendar(9, 2);

            // Click on the **Today’s Events** Link
            cy.get(pageLocators.todaysEvents_Link).click()

            // Wait for the page to get loaded
            // cy.wait(2000)

            // Verify that we have no events listed for this date
            cy.get(pageLocators.card_Body).should('not.exist')
        })
    })

    context('When I click on **Featured Events**', () => {
        it('I can see all upcoming featured events', () => {

            // Click on the **Featured Events** Link
            cy.get(pageLocators.featuredEvents_Link).click()

            // Wait for the page to get loaded
            // cy.wait(2000)

            // Verify that we have no events listed for this date
            cy.get(pageLocators.card_Body).should('exist')

            // And that too 3 events
            cy.get(pageLocators.card_Body).should('have.length', 3)
        })
    })

    context('When I click on the **QA Task Submission** event card', () => {
        it('I can see more details about the event', () => {

            const searchText = 'QA Task Submission'

            // Enter the text 'QA Task Submission' in searchbox and Enter
            cy.get(pageLocators.search_TextBox).type(searchText + '{enter}')

            // Wait for the page to get loaded with the expected results
            // cy.wait(2000)

            // Verify the listed card(s) title contains the searched text
            cy.get(pageLocators.firstCard_Body).click()

            // Wait for the event card to get loaded with the contents
            // cy.wait(2000)

            // Verifying that the following details about the event are visible on Event Card
            // "Add to calendar link"
            cy.get(eventCard.addToCalendar_Button).should('exist')

            // "Add to Google calendar link"
            cy.get(eventCard.addToGoogleCalendar_Button).should('exist')

            // "Event Type"
            cy.get(eventCard.eventType_Text).should('exist')

            // "Organization"
            cy.get(eventCard.organization_Text).should('exist')

            // "Contacts"
            cy.get(eventCard.contacts_Text).should('exist')

            // "Event description"
            cy.get(eventCard.description_Text).should('exist')
        })
    })
})