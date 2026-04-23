const contactHref = 'mailto:contato@zenit.consulting?subject=Diagnostico%20de%20qualidade%20de%20software';
const linkedinHref = 'https://www.linkedin.com/company/zenit-consulting/';

describe('ZenIT Consulting navigation links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('keeps every contact CTA pointing to the expected email link', () => {
    cy.get('a[href^="mailto:"]').should('have.length.at.least', 5);

    cy.get('a[href^="mailto:"]').each(($link) => {
      cy.wrap($link).should('have.attr', 'href', contactHref);
    });
  });

  it('keeps internal anchor links pointing to existing page sections', () => {
    cy.get('a[href^="#"]').each(($link) => {
      const href = $link.attr('href');

      expect(href, 'empty anchor').to.not.equal('#');

      const targetId = href.slice(1);
      cy.get(`#${targetId}`).should('exist');
    });
  });

  it('keeps the main action buttons mapped to the expected destinations', () => {
    cy.contains('a', 'Diagnóstico').should('have.attr', 'href', contactHref);
    cy.contains('a', 'Agendar diagnóstico').should('have.attr', 'href', contactHref);
    cy.contains('a', 'Ver serviços').should('have.attr', 'href', '#servicos');
    cy.contains('a', 'Planejar evolução').should('have.attr', 'href', '#contato');
    cy.get('.faq-aside a[href^="mailto:"]').should('have.attr', 'href', contactHref);
    cy.contains('a', 'Falar com a consultoria').should('have.attr', 'href', contactHref);
    cy.get('.cta-actions a[href="#mapa"]').should('exist');
  });

  it('keeps footer social links pointing to the right channels', () => {
    cy.get('.footer-social')
      .should('have.attr', 'href', linkedinHref)
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel')
      .and('include', 'noopener');

    cy.get('.footer-contact a[href^="mailto:"]').should('have.attr', 'href', contactHref);
  });

  it('opens and closes the mobile menu without breaking navigation links', () => {
    cy.viewport('iphone-x');

    cy.get('.menu-toggle')
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true');

    cy.get('header nav a[href="#servicos"]').click();
    cy.get('.menu-toggle').should('have.attr', 'aria-expanded', 'false');
    cy.location('hash').should('eq', '#servicos');
  });
});



