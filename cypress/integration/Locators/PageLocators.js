class PageLocators {
    
    // Header Links
    featuredEvents_Link = 'a[title="Featured Events"]'
    todaysEvents_Link = 'a[title="Today’s Events"]'
    
    // Search
    search_TextBox = 'input.search__input'
    
    // Events List Locators
    card_Body = 'div[data-test="event-card"]'
    firstCard_Body = 'div[data-test="event-card"]:nth-child(1)'
    dateField_Titles = 'div.card-content.flex-col > p > span:nth-child(2)'
    searchedCard_Titles = '#search-results > div > div.card-content.flex-col > a'
    organizedBy_Titles = 'div[data-test="organisation"] > a'
    
    // Filtering Locators
    orgFilter_Select = '#orgSelect'
    cancel_Button = '.btn.btn-none'

    // Calendar Locators
    previousMonth_Button = 'div.vc-arrows-container > div:nth-child(1)'
    nextMonth_Button = 'div.vc-arrows-container > div:nth-child(2)'
    date_Span = 'div.vc-h-full > span'

}
export default PageLocators