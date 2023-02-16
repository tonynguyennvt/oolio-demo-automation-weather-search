import * as page from "../fixtures/weatherhomepage"


describe('OOLIO Test', () => {
  it('Verify the search weather for Hồ Chí Minh city', () => {
    cy.visit('https://openweathermap.org/');
    page.searchByKeyword('Ho Chi Minh');
    page.clickOnSearchButton();
    page.verifySearchResultDropdownIsDisplayed();
    page.verifySearchResultContain('Hồ Chí Minh');
    page.clickOnSearchResultContain('Hồ Chí Minh');
    page.verifyCurrentContainerContain('Hồ Chí Minh');
    page.verifyHourlyForecastChatIsDisplayed();
    page.verifyDailyForecastChatIsDisplayed();
  })
})