describe('Subscription Packages Validation', () => {
  const countries = [
    { code: '#sa', name: 'Saudi Arabia', currency: 'SAR' },
    { code: '#bh', name: 'Bahrain', currency: 'BHD' },
    { code: '#kw', name: 'Kuwait', currency: 'KWD' }
  ];

  const subscriptionPackages = [
    { type: 'Lite', prices: { SAR: '15', BHD: '2', KWD: '1.2' } },
    { type: 'Classic', prices: { SAR: '25', BHD: '3', KWD: '2.5' } },
    { type: 'Premium', prices: { SAR: '60', BHD: '6', KWD: '4.8' } }
  ];

  beforeEach(() => {
    cy.visit('https://subscribe.stctv.com/sa-en');
  });

  countries.forEach((country) => {
    it(`should validate subscription packages for ${country.name}`, () => {
      // Select the country
      cy.get('.country-current').first().click();
      cy.get(`.country-select ${country.code}`).click();

      // Wait for the subscription plans to be visible
      cy.get('.plan-section', { timeout: 10000 }).should('be.visible');

      // Validate subscription packages
      subscriptionPackages.forEach((subscriptionPackage) => {
        // Locate the subscription type
        cy.contains(subscriptionPackage.type)
          .should('be.visible')
          .parents('.plan-section')
          .within(() => {
            // Validate each price individually
            cy.get('.price')
              .each(($price) => {
                const priceText = $price.text().trim();
                const expectedPrice = subscriptionPackage.prices[country.currency];
                
                // Log the actual price text for debugging
                cy.log('Price text:', priceText);
                cy.log('Expected price:', expectedPrice);
                
                // Assert the price and currency are correct
                expect(priceText).to.include(expectedPrice);
                expect(priceText).to.include(country.currency);
              });
          });
      });
    });
  });
});
