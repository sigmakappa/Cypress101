class EventCard {
    
    dateField_Text = 'p.mb-2.mr-4 > span:nth-child(2)'
    addToCalendar_Button = 'div.flex.mt-2.mb-4 > button'
    addToGoogleCalendar_Button = 'div.flex.mt-2.mb-4 > a > button'
    eventType_Text = 'div.flex.items-start.flex-col.my-1 > a'
    organization_Text = 'div.flex.flex-col > div.mr-2 > a'
    contacts_Text = 'div.mr-2 > span'
    description_Text = 'article > p'

    dummy_function() {
        return cy.get('dummy_locator');
    }

}
export default EventCard