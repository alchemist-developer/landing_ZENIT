describe('ZenIT Consulting interactions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens FAQ items and updates accessibility state', () => {
    cy.get('.faq-item').first().as('firstFaq');

    cy.get('@firstFaq').find('.faq-answer').should('not.be.visible');
    cy.get('@firstFaq').find('.faq-question').should('have.attr', 'aria-expanded', 'false');

    cy.get('@firstFaq').find('.faq-question').click();

    cy.get('@firstFaq').should('have.class', 'active');
    cy.get('@firstFaq').find('.faq-question').should('have.attr', 'aria-expanded', 'true');
    cy.get('@firstFaq').find('.faq-answer').should('be.visible');
  });

  it('animates stats counters after the stats section becomes visible', () => {
    cy.get('.stats').scrollIntoView();

    cy.get('.count').first().should(($counter) => {
      expect($counter.text().trim()).to.not.equal('0');
    });
  });

  it('keeps service links usable', () => {
    cy.get('.services-particles').should('not.exist');
    cy.get('.service-card-link').first().click();
    cy.location('hash').should('eq', '#contato');
  });

  it('keeps the floating contact button available', () => {
    cy.get('.contact-float')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'mailto:contato@zenit.consulting');
  });

  it('embeds the map with the operating region query', () => {
    cy.get('.map-bar iframe')
      .should('have.attr', 'src')
      .and('include', 'Sao+Paulo,+SP,+Brasil');
  });
});



