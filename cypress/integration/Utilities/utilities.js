import PageLocators from '../Locators/PageLocators.js';
const pageLocators = new PageLocators();

const months_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const months_long = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months_short[d.getMonth()];
// console.log(month)

function getTodayDate_MMM_DD_YYYY() {
    // Print today's date in this format "Nov 28 2021"
    const date_Today = months_short[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear()
    console.log(date_Today)

    return date_Today;
}

function getCurrentDate() {
    return d.getDate();
}

function getCurrentMonthYear_MMMM_YYYY() {
    // Print today's date in this format "Nov 28 2021"
    const monthYear = months_long[d.getMonth()] + ' ' + d.getFullYear()
    console.log(monthYear)

    return monthYear;
}

function getMonthYear_MMMM_YYYY(month) {
    // Print today's date in this format "Nov 28 2021"
    const monthYear = months_long[month] + ' ' + d.getFullYear()
    console.log(monthYear)

    return monthYear;
}

// Function that selects today's date on calendar
function selectCurrentDate_Calendar(date) {
    
    // cy.get('span.vc-day-content.vc-focusable').contains('2').scrollIntoView().click()
    cy.contains('span.vc-day-content.vc-focusable', date).scrollIntoView().click({force: true})

    // Wait for the calendar to load events for the above specific date
    cy.wait(2000)
}

// Function that selects another month and date on calendar
function selectAnotherMonthDate_Calendar(month, date) {
    // Get current month (when year is same) [Not going into the case when the years are different as of now...]
    const currentMonth = d.getMonth() + 1;
    cy.log("Current Month : " + currentMonth)
    
    const expectedmonth = month;
    cy.log("Expected Month : " + expectedmonth)
    
    const differenceMonths = expectedmonth - currentMonth 
    cy.log("Months Difference : " + differenceMonths)

    if (differenceMonths < 0) {
        const difference = differenceMonths * -1;
        for (let i = 0; i < difference; i++) {
            // Click the previous month button
            cy.get(pageLocators.previousMonth_Button).click()

            // Wait for the calendar to move back one month
            cy.wait(2000)
        }
    }

    if (differenceMonths > 0) {
        for (let i = 0; i < differenceMonths; i++) {
            // Click the previous month button
            cy.get(pageLocators.nextMonth_Button).click()

            // Wait for the calendar to move ahead one month
            cy.wait(2000)
        }
    }

    // Attempt to move the focus back to main page
    cy.get(pageLocators.search_TextBox).click()

    // Now select the required date
    // cy.get('span.vc-day-content.vc-focusable').contains('2').scrollIntoView().click()
    cy.contains('span.vc-day-content.vc-focusable', date).scrollIntoView().click({force: true})

    // Wait for the calendar to load events for the above specific date
    cy.wait(2000)
}

// The functions that are imported from here
module.exports = {
    getTodayDate_MMM_DD_YYYY,
    getCurrentDate,
    getCurrentMonthYear_MMMM_YYYY,
    getMonthYear_MMMM_YYYY,
    selectCurrentDate_Calendar,
    selectAnotherMonthDate_Calendar,
};
