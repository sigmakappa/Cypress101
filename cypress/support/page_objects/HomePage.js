class HomePageLocators {

    // Header Icon
    static Amazon_Locale_Span = 'span.nav-logo-locale'

    // Search Filter on top
    static category_dropdown = 'select#searchDropdownBox'
    static search_button = 'input#nav-search-submit-button'
    static search_input = 'input#twotabsearchtextbox'

    // Autosuggestion List
    static autosuggestion_list = '.autocomplete-results-container .s-suggestion-container'

    // English Books Link
    static english_books_link = '#s-refinements > div:nth-child(2) > ul > li:nth-child(1) > span > a'

    // Price Range Text Boxes
    static low_price_textbox = '#low-price'
    static high_price_textbox = '#high-price'

    // Prices of listed items 
    static price_span = '.a-price-whole'

    // Author Name Div
    static authorNameDiv = '.a-row.a-size-base.a-color-secondary .a-row:nth-child(1)'

}

export default HomePageLocators;