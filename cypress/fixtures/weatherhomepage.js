const url = 'https://openweathermap.org/'
const searchInputField = '[type="text"][placeholder="Search city"]'
const searchButton = '[type="submit"]'
const searchResult = '.search-dropdown-menu'
const weatherWidget = '#weather-widget'
const currentContainer = '.current-container'
const hourlyForecastChart = '.chart-container'
const dailyForecastChart = '.daily-container'


export function searchByKeyword(text) {
    cy.get(searchInputField)
        .should('be.visible')
        .type(text);
}

export function clickOnSearchButton() {
    cy.get(searchButton).contains('Search').click();
}

export function verifySearchResultDropdownIsDisplayed() {
    cy.get(searchResult).should('be.visible');
}

export function verifySearchResultContain(text) {
    cy.get(searchResult).contains(text);
}

export function clickOnSearchResultContain(text) {
    cy.get(searchResult).contains(text).click();
}

export function verifyCurrentContainerContain(text) {
    cy.get(currentContainer).contains(text);
}

export function verifyHourlyForecastChatIsDisplayed() {
    cy.get(weatherWidget).last().last().first().contains('Hourly forecast').should('be.visible');
}

export function verifyDailyForecastChatIsDisplayed(text) {
    cy.get(weatherWidget).last().last().last().contains('8-day forecast').should('be.visible');
}