describe('ZenIT Consulting content and rendering', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the expected page metadata and core shell', () => {
    cy.title().should('match', /ZenIT Consulting/i);
    cy.get('meta[name="description"]').should('have.attr', 'content').and('include', 'qualidade de software');
    cy.get('#app').should('not.be.empty');
  });

  it('renders all primary sections in the expected order', () => {
    [
      'home',
      'como-funciona',
      'para-quem',
      'servicos',
      'sobre',
      'contato',
      'mapa'
    ].forEach((id) => {
      cy.get(`#${id}`).should('exist').and('be.visible');
    });
  });

  it('renders key business content that should not disappear in production', () => {
    [
      'Leve sua qualidade de software ao zênite',
      'Do teste tardio à qualidade como padrão de entrega',
      'O caminho até o ponto mais alto da qualidade',
      'Serviços de consultoria',
      'Qualidade no ponto mais alto, com os pés no chão'
    ].forEach((text) => {
      cy.contains(text).scrollIntoView().should('be.visible');
    });
  });

  it('renders the hero service grid instead of testimonials', () => {
    cy.get('.hero-service-grid').should('be.visible');
    cy.get('.hero-service-card').should('have.length', 4);
    cy.get('.hero-service-card.active').should('have.length', 1);
    cy.get('.testimonial').should('not.exist');
  });

  it('renders the quality operating system pillars', () => {
    cy.get('.zenith-os-grid .zenith-pillar').should('have.length', 4);
    cy.get('.zenith-os-grid').should('contain.text', 'Quality CoE');
    cy.get('.zenith-os-grid').should('contain.text', 'Automation Stack');
    cy.get('.zenith-os-grid').should('contain.text', 'Release Gates');
    cy.get('.zenith-os-grid').should('contain.text', 'Quality Culture');
    cy.get('.logo-track').should('not.exist');
  });

  it('renders the services matrix with unique technical nodes and contact links', () => {
    cy.get('.services-matrix').should('be.visible');
    cy.get('.services-core').should('contain.text', 'Quality OS');
    cy.get('.service-node').should('have.length', 6);
    cy.get('.service-card').should('not.exist');
    cy.get('.services-particles').should('not.exist');
    cy.get('.service-node-icon').then(($icons) => {
      const labels = [...$icons].map((icon) => icon.textContent.trim());
      expect(new Set(labels).size).to.eq(6);
    });

    cy.get('.service-node').each(($node) => {
      cy.wrap($node).find('a[href="#contato"]').should('exist');
    });
  });

  it('renders the CEO card with the expected local image', () => {
    cy.contains('.ceo-card', 'Simon')
      .find('.ceo-photo')
      .should('have.attr', 'src', 'assets/ceo_simon.png');
  });
});



