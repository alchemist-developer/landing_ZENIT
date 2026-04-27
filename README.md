# ZenIT Consulting Landing Page

Landing page institucional para a ZenIT Consulting, consultoria de qualidade de software com foco em CoE, automação, CI/CD, padrões, cultura de qualidade, governança e melhoria contínua.

## Estrutura

```
├── index.html          # Shell da página, metadata e carregamento dos assets
├── index.css           # Sistema visual, responsividade, animações e componentes
├── index.js            # Conteúdo editável e renderização das seções
├── cypress.config.js   # Configuração dos testes E2E
├── assets/
└── cypress/e2e/
    ├── content.cy.js       # Testes de conteúdo
    ├── navigation.cy.js    # Testes de navegação
    ├── interactions.cy.js  # Testes de interações
    └── responsive.cy.js    # Testes de responsividade
```

## Personalização Rápida

Os principais textos, links e dados de contato ficam no objeto `content` em `index.js`.

Pontos que ainda podem ser ajustados quando a ZenIT tiver os dados finais:

- E-mail oficial em `contactHref` e `content.brand.email`
- URL real do LinkedIn em `content.brand.linkedin`
- Telefone/WhatsApp, se for usado como CTA principal
- Endereço ou cidade de atuação
- Fotos reais de liderança, cases ou clientes

## Rodando Localmente

Por ser uma página estática, você pode abrir `index.html` direto no navegador. Para rodar os testes Cypress, suba um servidor local na porta `4173` e execute:

```bash
npm run test:e2e
```

## Tecnologias

- **HTML5/CSS3/JavaScript** - Página estática sem frameworks
- **Cypress** - Testes E2E automatizados
- **EmailJS** - Formulário de contato funcional



