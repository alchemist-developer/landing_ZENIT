const contactHref = 'mailto:contato@zenit.consulting?subject=Diagnostico%20de%20qualidade%20de%20software';
const contactFormConfig = {
  emailJsPublicKey: 'V8XoztAY8GI7nLfM3',
  emailJsServiceId: 'service_n9uv2vo',
  emailJsTemplateId: 'template_wg9p6wu'
};
const contactMessageMaxLength = 700;

const content = {
  differentials: {
    title: 'Por que escolher a ZenIT',
    items: [
      { title: 'Qualidade ponta a ponta', description: 'Da estratégia ao deploy, conectamos cultura, processos, automação e métricas de qualidade.' },
      { title: 'CoE pragmático', description: 'Estruturamos centros de excelência que aceleram times sem criar burocracia desnecessária.' },
      { title: 'Automação que sustenta escala', description: 'Desenhamos pirâmides de testes, frameworks e pipelines que reduzem retrabalho.' },
      { title: 'Governança por evidência', description: 'Indicadores, quality gates e rituais ajudam liderança e engenharia a decidir com clareza.' }
    ]
  },
  authority: {
    title: 'Entrega com método e evidência',
    items: [
      'Diagnóstico técnico e cultural antes de propor ferramentas',
      'Roadmaps por maturidade, risco e impacto no negócio',
      'Playbooks para QA, engenharia, produto e liderança',
      'Indicadores acionáveis para qualidade, fluxo e confiabilidade'
    ]
  },
  brand: {
    name: 'ZenIT Consulting',
    initials: 'Z',
    email: 'contato@zenitconsulting.com.br',
    linkedin: 'https://www.linkedin.com/company/zenitglobalconsulting/',
    address: 'Consultoria remota e presencial sob demanda',
    copyright: 'Copyright © 2026 ZenIT Consulting'
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Método', href: '#como-funciona' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' }
  ],
  hero: {
    eyebrow: 'Software Quality Consulting',
    title: 'Leve sua qualidade de software ao zênite',
    description: 'ZenIT vem de zênite: o ponto mais alto da qualidade.',
    cta: { label: 'Agendar diagnóstico', href: contactHref, variant: 'primary' },
    secondaryCta: { label: 'Ver serviços', href: '#servicos', variant: 'ghost' }
  },
  heroCards: [
    {
      alt: 'Quality engineering',
      icon: 'QA',
      title: 'Diagnóstico',
      description: 'Riscos, gargalos e maturidade visíveis antes do roadmap.'
    },
    {
      alt: 'Automation strategy',
      icon: 'BOT',
      title: 'Automação',
      description: 'Camadas de testes úteis para web, API, mobile e contratos.'
    },
    {
      alt: 'CI/CD quality gates',
      icon: 'CI',
      title: 'CI/CD',
      description: 'Quality gates, rastreabilidade e confiança no release.'
    },
    {
      alt: 'Quality culture',
      icon: 'CoE',
      title: 'CoE',
      description: 'Padrões, governança e cultura que continuam no time.'
    }
  ],
  stats: {
    eyebrow: 'Maturidade mensurável',
    title: 'Qualidade que sobe o nível da entrega',
    description: 'Não é sobre testar mais. É sobre criar um sistema de qualidade que reduz risco, aumenta previsibilidade e faz engenharia, produto e negócio falarem a mesma língua.',
    cta: { label: 'Subir o nível', href: '#contato', variant: 'ghost' },
    metrics: [
      { value: 360, suffix: '°', label: 'Cobertura da estratégia à operação' },
      { value: 4, suffix: 'x', label: 'Camadas de automação orientadas por risco' },
      { value: 100, suffix: '%', label: 'CoE adaptado ao contexto, sem framework engessado' },
      { value: 24, suffix: '/7', label: 'Qualidade integrada ao ciclo de entrega' }
    ]
  },
  howItWorks: {
    title: 'O caminho até o ponto mais alto da qualidade',
    items: [
      { title: 'Diagnosticar', description: 'Entendemos arquitetura, pipelines, testes, incidentes, papéis, métricas e hábitos de engenharia para identificar riscos reais.' },
      { title: 'Desenhar o modelo', description: 'Criamos padrões, guardrails, playbooks e roadmap de evolução para times, líderes e comunidades de prática.' },
      { title: 'Implantar e habilitar', description: 'Apoiamos automação, CI/CD, quality gates, governança e treinamento para gerar adoção sustentável.' }
    ]
  },
  qualification: {
    title: 'Para quem quer sair do QA reativo',
    positive: {
      title: 'Para quem é',
      items: [
        'Empresas que precisam escalar releases com menos risco',
        'Times que querem padronizar qualidade sem perder autonomia',
        'Lideranças que precisam de métricas confiáveis de engenharia',
        'Organizações implantando CoE, QA estratégico ou DevOps'
      ]
    },
    negative: {
      title: 'Quando talvez não seja o momento',
      items: [
        'Quem busca apenas execução pontual sem mudança de processo',
        'Times sem abertura para medir e ajustar a forma de trabalhar',
        'Organizações que querem automação sem tratar cultura e fluxo'
      ]
    }
  },
  services: {
    title: 'Serviços de consultoria',
    items: [
      { title: 'Quality CoE', icon: 'CoE', visual: 'coe', description: 'Desenho e implantação de Centro de Excelência em Qualidade com papéis, governança, comunidade, indicadores e catálogo de práticas.' },
      { title: 'Automação de testes', icon: 'BOT', visual: 'automation', description: 'Estratégia, arquitetura e implantação de automação para web, API, mobile, contratos, regressão e smoke tests.' },
      { title: 'CI/CD e quality gates', icon: 'CI', visual: 'pipeline', description: 'Integração de testes, análise estática, segurança, cobertura e critérios de release em pipelines confiáveis.' },
      { title: 'Padrões e cultura de qualidade', icon: 'DoD', visual: 'culture', description: 'Playbooks, rituais, DoR/DoD, revisões, comunidades e treinamento para qualidade deixar de ser uma etapa isolada.' },
      { title: 'Observabilidade contínua', icon: 'SLO', visual: 'observability', description: 'Métricas de fluxo, incidentes e estabilidade.' },
      { title: 'Mentoria para times', icon: 'QA', visual: 'mentoring', description: 'Acompanhamento prático com QA, SDETs, devs, PMs e lideranças para acelerar adoção e autonomia.' }
    ]
  },
  faq: {
    items: [
      { q: 'A ZenIT entra para executar testes ou para transformar o modelo de qualidade?', a: 'O foco é consultivo e habilitador. Podemos apoiar implantação prática, mas sempre conectando execução com padrões, cultura, automação e governança.' },
      { q: 'Preciso ter uma área de QA formada?', a: 'Não. O trabalho pode começar em empresas com QA estruturado, squads híbridos ou times que estão criando sua disciplina de qualidade agora.' },
      { q: 'Vocês trabalham com ferramentas específicas?', a: 'A escolha depende do contexto. Avaliamos stack, maturidade e restrições antes de recomendar frameworks, plataformas ou integrações.' },
      { q: 'Como começa o projeto?', a: 'Normalmente com um diagnóstico de maturidade e riscos, seguido de um roadmap priorizado para ganhos rápidos e evolução sustentável.' }
    ]
  },
  about: {
    title: 'Sobre a ZenIT',
    description: 'Consultoria especializada em qualidade de software, automação, CoE e engenharia de entrega.'
  },
  ceo: {
    name: 'Simon',
    role: 'Founder e consultor principal',
    image: 'assets/ceo_simon.png',
    description: 'Liderança técnica para conectar estratégia, engenharia e cultura de qualidade com execução real nos times.'
  },
  leadership: [
    {
      name: 'Hatgiargrion',
      role: 'Tech Lead',
      image: 'assets/techlead_hatgiargrion.jpeg',
      description: 'Arquitetura, engenharia e práticas técnicas para fazer qualidade nascer no fluxo de desenvolvimento.'
    },
    {
      name: 'Leonardo',
      role: 'QA Lead',
      image: 'assets/qalead_leo.jpeg',
      description: 'Estratégia de testes, automação e enablement para elevar a maturidade de QA dos times.'
    }
  ],
  cta: {
    title: 'Pronto para levar sua qualidade ao zênite?',
    description: 'Comece com um diagnóstico objetivo e um plano de evolução conectado ao seu fluxo real de entrega.',
    button: { label: 'Agendar conversa', href: contactHref, variant: 'primary' }
  },
  map: {
    embedUrl: 'https://www.google.com/maps?q=Sao+Paulo,+SP,+Brasil&output=embed'
  }
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function createButton(config) {
  const label = config.label || 'Saiba mais';
  const href = config.href || '#contato';
  const variant = config.variant || 'default';
  const loading = Boolean(config.loading);

  let className = 'btn';
  if (variant === 'primary') className += ' btn-primary';
  if (variant === 'ghost') className += ' btn-ghost';
  if (variant === 'minimal') className += ' btn-minimal';
  if (config.icon === 'whatsapp') className += ' btn-whatsapp-icon';
  if (loading) className += ' is-loading';

  const spinner = loading ? '<span class="btn-spinner" aria-hidden="true"></span>' : '';
  const icon = config.icon === 'whatsapp'
    ? '<svg viewBox="0 0 24 24" focusable="false"><path d="M12.04 3.5a8.42 8.42 0 0 0-7.2 12.78l-1.02 3.72 3.82-1a8.42 8.42 0 1 0 4.4-15.5Zm0 1.5a6.92 6.92 0 0 1 5.88 10.56 6.91 6.91 0 0 1-9.76 2.1l-.28-.17-2.05.54.55-2-.18-.29A6.92 6.92 0 0 1 12.04 5Zm-2.3 3.58c-.15 0-.39.06-.6.29-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.55 2.48 3.83 3.38 1.9.75 2.29.6 2.7.56.41-.04 1.33-.54 1.52-1.06.19-.52.19-.97.13-1.06-.06-.1-.21-.15-.45-.27-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41Z" fill="currentColor"/></svg>'
    : (variant === 'minimal' ? '↗' : '→');

  return '<a href="' + escapeHtml(href) + '" class="' + className + '">' +
    spinner +
    '<span class="btn-label">' + escapeHtml(label) + '</span>' +
    '<span class="icon" aria-hidden="true">' + icon + '</span>' +
    '</a>';
}

function renderList(items) {
  return items.map(function (item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join('');
}

function renderHeader() {
  return `
        <header>
          <a href="#home" aria-label="Ir para o início">
            <span class="brand-lockup">
              <img class="brand-logo" src="assets/zenit-logo.svg" alt="${content.brand.name}">
            </span>
          </a>
          <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
            <span></span>
          </button>
          <nav aria-label="Navegação principal">
            ${content.nav.map(function (item) {
    return `<a href="${item.href}">${item.label}</a>`;
  }).join('')}
            ${createButton({ label: 'Diagnóstico', href: contactHref, variant: 'ghost' })}
          </nav>
        </header>
      `;
}

function renderHero() {
  return `
        <section id="home" class="hero">
          <video class="hero-video" autoplay muted playsinline aria-hidden="true">
            <source src="assets/93235-639008540_medium.mp4" type="video/mp4">
          </video>
          <div class="hero-bg" aria-hidden="true"></div>
          <div class="hero-content">
            <h4>${content.hero.eyebrow}</h4>
            <h1>${content.hero.title}</h1>
            <p>${content.hero.description}</p>
            <div class="hero-actions">
              ${createButton(content.hero.cta)}
              ${createButton(content.hero.secondaryCta)}
            </div>
          </div>
          <div class="hero-visual" aria-label="Serviços em destaque">
            <div class="hero-service-grid">
              ${content.heroCards.map(function (item, i) {
    return `
                <article class="hero-service-card ${i === 0 ? 'active' : ''}">
                  <span class="hero-service-icon" aria-label="${item.alt}">${item.icon}</span>
                  <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                  </div>
                </article>
              `;
  }).join('')}
            </div>
          </div>
        </section>
      `;
}

function renderStats() {
  return `
        <section class="zenith-os-section">
          <div class="zenith-os-head">
            <span class="proof-badge">Quality Operating System</span>
            <h2 class="section-title">Do teste tardio à qualidade como padrão de entrega</h2>
            <p class="proof-subtitle">A ZenIT atua onde qualidade precisa deixar de ser uma etapa final e passar a orientar arquitetura, produto, pipeline e cultura.</p>
          </div>
          <div class="zenith-os-grid" aria-label="Pilares de atuação ZenIT">
            <article class="zenith-pillar">
              <span>01</span>
              <h3>Quality CoE</h3>
              <p>Comunidade, governança e padrões vivos para escalar qualidade.</p>
            </article>
            <article class="zenith-pillar">
              <span>02</span>
              <h3>Automation Stack</h3>
              <p>Testes nas camadas certas, com manutenção e valor operacional.</p>
            </article>
            <article class="zenith-pillar">
              <span>03</span>
              <h3>Release Gates</h3>
              <p>CI/CD com critérios claros para entregar com confiança.</p>
            </article>
            <article class="zenith-pillar">
              <span>04</span>
              <h3>Quality Culture</h3>
              <p>Rituais e métricas que tornam qualidade responsabilidade do time.</p>
            </article>
          </div>
        </section>

        <section class="stats">
          <div class="stats-left">
            <div class="stats-glow"></div>
            <h4 class="eyebrow">${content.stats.eyebrow}</h4>
            <h2 class="stats-title">${content.stats.title}</h2>
            <p class="stats-desc">${content.stats.description}</p>
            <div>${createButton(content.stats.cta)}</div>
          </div>
          <div class="stats-right">
            ${content.stats.metrics.map(function (item) {
    return `
                <div class="metric">
                  <h2><span class="${item.text ? 'metric-static' : 'count'}" ${item.text ? '' : 'data-target="' + item.value + '" data-prefix="' + (item.prefix || '') + '" data-suffix="' + (item.suffix || '') + '"'}>${item.text ? escapeHtml(item.text + (item.suffix || '')) : '0'}</span></h2>
                  <p>${item.label}</p>
                </div>
              `;
  }).join('')}
          </div>
        </section>
      `;
}

function renderHowItWorks() {
  return `
        <section id="como-funciona" class="section-light">
          <div class="project-section">
            <div class="project-lead reveal">
              <div>
                <p class="section-kicker">Tecnologia</p>
                <h2 class="section-title">${content.howItWorks.title}</h2>
                <p>Entramos para revelar gargalos, criar padrões práticos e implantar qualidade onde ela realmente muda o jogo: no fluxo de desenvolvimento, nos pipelines e nas decisões do time.</p>
                <div class="project-lead-actions">
                  ${createButton({ label: 'Ver serviços', href: '#servicos', variant: 'ghost' })}
                </div>
              </div>
            </div>
            <div class="project-list">
              ${content.howItWorks.items.map(function (item, index) {
    return `
                <div class="project-item reveal">
                  <span class="project-index">${String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                  </div>
                </div>
              `;
  }).join('')}
            </div>
          </div>
        </section>
      `;
}

function renderQualification() {
  return `
        <section id="para-quem" class="qualification-section">
          <div class="qualification-inner">
            <div class="section-head">
              <div>
                <p class="section-kicker">Qualificação</p>
                <h2 class="section-title">${content.qualification.title}</h2>
                <p class="section-copy">A ZenIT é para organizações que querem parar de apagar incêndio e começar a operar qualidade como vantagem competitiva.</p>
              </div>
            </div>
            <div class="qual-grid">
              <div class="qual-card positive reveal">
                <h3 style="color:var(--accent); margin-bottom:15px;">${content.qualification.positive.title}</h3>
                <ul>${renderList(content.qualification.positive.items)}</ul>
              </div>
              <div class="qual-card negative reveal">
                <h3 style="color:#000; margin-bottom:15px;">${content.qualification.negative.title}</h3>
                <ul>${renderList(content.qualification.negative.items)}</ul>
              </div>
            </div>
          </div>
        </section>
      `;
}

function renderServices() {
  return `
        <section id="servicos" class="services-section">
          <div class="services-inner">
            <div class="services-console-head">
              <div>
                <p class="section-kicker">Frentes de atuação</p>
                <h2 class="section-title">${content.services.title}</h2>
                <p class="section-copy">Serviços para transformar qualidade em capacidade operacional: menos surpresa, mais cadência e evidência para decidir.</p>
              </div>
              <div class="services-console-status" aria-hidden="true">
                <span></span>
                Quality stack online
              </div>
            </div>
            <div class="services-matrix" aria-label="Serviços de consultoria ZenIT">
              <div class="services-core">
                <span>ZenIT</span>
                <strong>Quality OS</strong>
                <p>Estratégia, automação e cultura conectadas ao fluxo de entrega.</p>
              </div>
              ${content.services.items.map(function (item, index) {
    return `
                  <div class="service-orbit service-orbit-${index + 1}">
                    <article class="service-node service-node-${index + 1} reveal">
                      <span class="service-node-index">${String(index + 1).padStart(2, '0')}</span>
                      <span class="service-node-icon">${item.icon}</span>
                      <h3>${item.title}</h3>
                      <p>${item.description}</p>
                      <a class="service-card-link" href="#contato">Solicitar análise</a>
                    </article>
                  </div>
                `;
  }).join('')}
            </div>
          </div>
        </section>
      `;
}

function renderDifferentials() {
  const icons = ['E2E', 'CoE', 'BOT', 'KPI'];

  return `
        <section class="differentials-section">
          <div class="differentials-inner">
            <div class="section-head">
              <div>
                <p class="section-kicker">Diferenciais</p>
                <h2 class="section-title">${content.differentials.title}</h2>
                <p class="section-copy">Nada de framework bonito que morre no slide. A ZenIT cria padrões que cabem no contexto real dos times e sobrevivem à rotina.</p>
              </div>
            </div>
            <div class="grid differentials-grid">
              ${content.differentials.items.map(function (item, index) {
    return `
                  <article class="card differential-card reveal">
                    <div class="differential-top">
                      <span class="differential-icon" aria-hidden="true">${icons[index]}</span>
                      <span class="differential-number">${String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3>${item.title}</h3>
                      <p>${item.description}</p>
                    </div>
                  </article>
                `;
  }).join('')}
            </div>
          </div>
        </section>
      `;
}

function renderAuthority() {
  const marks = ['DX', 'RISK', 'QA', 'SLO'];

  return `
        <section class="authority-section">
          <div class="authority-inner">
            <div class="section-head">
              <div>
                <p class="section-kicker">Confiança</p>
                <h2 class="section-title">${content.authority.title}</h2>
                <p class="section-copy">Método, engenharia e governança para aumentar previsibilidade sem transformar qualidade em fila, bloqueio ou cerimônia vazia.</p>
              </div>
            </div>
            <div class="grid authority-grid">
              ${content.authority.items.map(function (item, index) {
    return `
                  <article class="card authority-card reveal" data-index="${String(index + 1).padStart(2, '0')}">
                    <span class="authority-mark" aria-hidden="true">${marks[index]}</span>
                    <p>${item}</p>
                  </article>
                `;
  }).join('')}
            </div>
          </div>
        </section>
      `;
}

function renderFAQ() {
  return `
        <section class="faq">
          <div class="faq-inner">
            <aside class="faq-aside">
              <p class="section-kicker">Dúvidas frequentes</p>
              <h2 class="section-title">Antes de subir ao zênite</h2>
              <p>Respostas rápidas sobre diagnóstico, automação, CoE, ferramentas e como começar sem travar a operação.</p>
              ${createButton({ label: 'Enviar pergunta', href: contactHref, variant: 'primary' })}
            </aside>
            <div class="faq-list">
              ${content.faq.items.map(function (item, index) {
    return `
                  <div class="faq-item">
                    <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-${index}">${item.q}</button>
                    <div class="faq-answer" id="faq-${index}">${item.a}</div>
                  </div>
                `;
  }).join('')}
            </div>
          </div>
        </section>
      `;
}

function renderAbout() {
  return `
        <section class="about-section" id="sobre">
          <div class="about-inner">
            <div class="about-copy reveal">
              <p class="section-kicker">Liderança</p>
              <h2 class="section-title">Especialistas para levar qualidade do plano à rotina</h2>
            </div>
            <div class="leadership-grid">
              ${[{
    name: content.ceo.name,
    role: content.ceo.role,
    label: 'FOUNDER',
    image: content.ceo.image,
    description: content.ceo.description
  }].concat(content.leadership).map(function (person, index) {
    return `
                    <article class="lead-card reveal">
                      <span class="lead-index">${String(index + 1).padStart(2, '0')}</span>
                      <img class="lead-photo" src="${person.image}" alt="${person.name}" loading="lazy">
                      <div class="lead-copy">
                        <p class="section-kicker">${person.label || person.role}</p>
                        <h3>${person.name}</h3>
                        <p class="founder-role">${person.role}</p>
                        <p>${person.description}</p>
                      </div>
                    </article>
                  `;
  }).join('')}
            </div>
            <div class="section-actions about-actions">
              ${createButton({ label: 'Falar com a consultoria', href: contactHref, variant: 'minimal' })}
            </div>
          </div>
        </section>
      `;
}

function renderCTA() {
  return `
        <section class="cta section-center" id="contato">
          <div class="cta-inner">
            <div>
              <p class="section-kicker">Contato</p>
              <h2 class="section-title">${content.cta.title}</h2>
              <p>${content.cta.description} Fale com a equipe e descubra onde automação, CI/CD, CoE e cultura podem gerar impacto agora.</p>
            </div>
            <aside class="contact-panel" aria-label="Informações de contato">
              <div class="contact-item">
                <span class="contact-label">E-mail</span>
                <p>${content.brand.email}</p>
              </div>
              <div class="contact-item">
                <span class="contact-label">Atuação</span>
                <p>${content.brand.address}</p>
              </div>
              <div class="contact-item">
                <span class="contact-label">Atendimento</span>
                <p>Diagnóstico, roadmap, implantação assistida e enablement para times de tecnologia.</p>
              </div>
            </aside>
            <div class="section-actions cta-actions">
              ${createButton(content.cta.button)}
              ${createButton({ label: 'Conhecer serviços', href: '#servicos', variant: 'ghost' })}
            </div>
          </div>
        </section>
      `;
}

function renderMap() {
  return `
        <section id="mapa" class="map-section" aria-label="Localização">
          <div class="map-bar">
            <iframe title="Área de atuação da ZenIT" src="${content.map.embedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          </div>
        </section>
      `;
}

function renderContactModal() {
  return `
        <div class="contact-modal" aria-hidden="true">
          <div class="contact-modal-backdrop" data-contact-close></div>
          <section class="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button class="contact-close" type="button" aria-label="Fechar formulário" data-contact-close>×</button>
            <p class="section-kicker">Contato direto</p>
            <h2 id="contact-modal-title">Conte sobre o seu desafio de qualidade</h2>
            <form class="contact-form" novalidate>
              <label>
                <span>Nome *</span>
                <input type="text" name="name" autocomplete="name" required>
              </label>
              <label>
                <span>E-mail *</span>
                <input type="email" name="email" autocomplete="email" required>
              </label>
              <label>
                <span>WhatsApp *</span>
                <input type="tel" name="whatsapp" autocomplete="tel" inputmode="tel" maxlength="11" placeholder="11 99999-9999" required>
              </label>
              <label>
                <span>Empresa</span>
                <input type="text" name="company" autocomplete="organization">
              </label>
              <label>
                <span>Cargo</span>
                <input type="text" name="role" autocomplete="organization-title">
              </label>
              <label class="contact-message">
                <span>Mensagem *</span>
                <textarea name="message" rows="5" maxlength="${contactMessageMaxLength}" required></textarea>
                <small class="message-counter">0/${contactMessageMaxLength}</small>
              </label>
              <div class="contact-loading" aria-hidden="true">
                <span class="contact-loading-spinner"></span>
                <span>Enviando mensagem...</span>
              </div>
              <p class="contact-feedback" role="status" aria-live="polite"></p>
              <button class="btn btn-primary contact-submit" type="submit">
                <span class="btn-label">Enviar mensagem</span>
                <span class="icon" aria-hidden="true">→</span>
              </button>
            </form>
          </section>
        </div>
        <div class="contact-toast" role="status" aria-live="polite"></div>
      `;
}

function renderFooter() {
  return `
        <footer>
          <div class="footer-inner">
            <div class="footer-brand">
              <span class="brand-lockup footer-lockup">
                <img class="brand-logo" src="assets/zenit-logo.svg" alt="${content.brand.name}">
              </span>
              <p>Consultoria de qualidade de software para empresas que querem entregar com mais confiança, velocidade e evidência.</p>
            </div>
            <nav aria-label="Navegação do rodapé">
              <p class="footer-title">Navegação</p>
              <div class="footer-links">
                ${content.nav.map(function (item) {
    return `<a href="${item.href}">${item.label}</a>`;
  }).join('')}
              </div>
            </nav>
            <div class="footer-contact">
              <p class="footer-title">Contato</p>
              <p>${content.brand.address}</p>
              <a href="${contactHref}">${content.brand.email}</a>
              <a class="footer-social" href="${content.brand.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da ZenIT">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.5 10.2V18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <path d="M10.5 18v-7.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <path d="M10.5 13.6c.5-2.2 5-2.5 5 1.1V18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <circle cx="6.5" cy="6.7" r="1.3" fill="currentColor"></circle>
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="2"></rect>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>${content.brand.copyright}</span>
            <span>ZenIT Consulting — Brasil</span>
          </div>
        </footer>
      `;
}

const app = document.getElementById('app');
app.innerHTML = [
  renderHeader(),
  renderHero(),
  renderStats(),
  renderHowItWorks(),
  renderQualification(),
  renderServices(),
  renderDifferentials(),
  renderAuthority(),
  renderFAQ(),
  renderAbout(),
  renderCTA(),
  renderMap(),
  renderFooter(),
  renderContactModal(),
  '<button type="button" class="contact-float" aria-label="Abrir formulário de contato">@</button>'
].join('');

function initTestimonials() {
  const cards = document.querySelectorAll('.hero-service-card');
  if (!cards.length) return;

  let index = 0;
  setInterval(function () {
    cards[index].classList.remove('active');
    index = (index + 1) % cards.length;
    cards[index].classList.add('active');
  }, 4000);
}

function initHeroVideo() {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const slowMotionRate = 1;

  function configurePlayback() {
    video.playbackRate = slowMotionRate;
  }

  function restartAtHalf() {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;

    if (video.currentTime >= video.duration / 2) {
      video.currentTime = 0;
      video.play().catch(function () {});
    }
  }

  configurePlayback();
  video.addEventListener('loadedmetadata', configurePlayback);
  video.addEventListener('ratechange', configurePlayback);
  video.addEventListener('timeupdate', restartAtHalf);
}

function initCounters() {
  const counters = document.querySelectorAll('.count');
  const statsSection = document.querySelector('.stats');
  if (!counters.length || !statsSection) return;

  let hasAnimatedCounts = false;

  function formatMetric(value, prefix, suffix) {
    return prefix + value + suffix;
  }

  function animateCounter(el) {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1600;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = formatMetric(value, prefix, suffix);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = formatMetric(target, prefix, suffix);
      }
    }

    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !hasAnimatedCounts) {
        counters.forEach(function (counter) { animateCounter(counter); });
        hasAnimatedCounts = true;
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.35 });

  statsObserver.observe(statsSection);
}

function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', function () {
      const isActive = item.classList.toggle('active');
      button.setAttribute('aria-expanded', String(isActive));
    });
  });
}

function initContactModal() {
  const modal = document.querySelector('.contact-modal');
  const openButton = document.querySelector('.contact-float');
  const form = document.querySelector('.contact-form');
  const feedback = document.querySelector('.contact-feedback');
  const loading = document.querySelector('.contact-loading');
  const toast = document.querySelector('.contact-toast');
  const counter = document.querySelector('.message-counter');
  if (!modal || !openButton || !form || !feedback || !toast || !loading) return;
  let toastTimer;

  const fields = {
    name: form.elements.name,
    email: form.elements.email,
    whatsapp: form.elements.whatsapp,
    company: form.elements.company,
    role: form.elements.role,
    message: form.elements.message
  };

  function setOpen(isOpen) {
    modal.classList.toggle('is-open', isOpen);
    modal.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('modal-open', isOpen);
    feedback.textContent = '';
    Object.keys(fields).forEach(function (key) {
      fields[key].classList.remove('is-invalid');
    });
    if (isOpen) fields.name.focus();
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 5200);
  }

  function normalizePhone(value) {
    return value.replace(/\D/g, '');
  }

  function isWhatsApp(value) {
    const digits = normalizePhone(value);
    return digits.length === 10 || digits.length === 11;
  }

  function createWhatsAppLink(value) {
    const digits = normalizePhone(value);
    return 'https://wa.me/55' + digits;
  }

  function hasEmailJsConfig() {
    return contactFormConfig.emailJsPublicKey.indexOf('COLE_') !== 0 &&
      contactFormConfig.emailJsServiceId.indexOf('COLE_') !== 0 &&
      contactFormConfig.emailJsTemplateId.indexOf('COLE_') !== 0;
  }

  openButton.addEventListener('click', function () { setOpen(true); });

  fields.message.addEventListener('input', function () {
    if (counter) counter.textContent = fields.message.value.length + '/' + contactMessageMaxLength;
  });

  Object.keys(fields).forEach(function (key) {
    fields[key].addEventListener('input', function () {
      fields[key].classList.remove('is-invalid');
    });
  });

  modal.querySelectorAll('[data-contact-close]').forEach(function (el) {
    el.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      setOpen(false);
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      whatsapp: fields.whatsapp.value.trim(),
      company: fields.company.value.trim(),
      role: fields.role.value.trim(),
      message: fields.message.value.trim()
    };
    payload.whatsapp_link = createWhatsAppLink(payload.whatsapp);

    Object.keys(fields).forEach(function (key) {
      fields[key].classList.remove('is-invalid');
    });

    if (!payload.name || !payload.email || !payload.whatsapp || !payload.message) {
      if (!payload.name) fields.name.classList.add('is-invalid');
      if (!payload.email) fields.email.classList.add('is-invalid');
      if (!payload.whatsapp) fields.whatsapp.classList.add('is-invalid');
      if (!payload.message) fields.message.classList.add('is-invalid');
      feedback.textContent = 'Preencha nome, e-mail, WhatsApp e mensagem.';
      return;
    }

    if (payload.message.length > contactMessageMaxLength) {
      fields.message.classList.add('is-invalid');
      feedback.textContent = 'A mensagem deve ter até ' + contactMessageMaxLength + ' caracteres.';
      return;
    }

    if (!isEmail(payload.email)) {
      fields.email.classList.add('is-invalid');
      feedback.textContent = 'Informe um e-mail válido.';
      return;
    }

    if (!isWhatsApp(payload.whatsapp)) {
      fields.whatsapp.classList.add('is-invalid');
      feedback.textContent = 'Informe um celular brasileiro com DDD e 8 ou 9 dígitos. Ex: 11 99999-9999.';
      return;
    }

    if (!window.emailjs || !hasEmailJsConfig()) {
      feedback.textContent = 'Formulário pronto. Configure o EmailJS para ativar o envio.';
      return;
    }

    const submitButton = form.querySelector('.contact-submit');
    submitButton.disabled = true;
    loading.classList.add('is-visible');
    loading.setAttribute('aria-hidden', 'false');
    feedback.textContent = 'Enviando...';

    window.emailjs.init({ publicKey: contactFormConfig.emailJsPublicKey });
    window.emailjs.send(contactFormConfig.emailJsServiceId, contactFormConfig.emailJsTemplateId, payload)
      .then(function () {
        form.reset();
        setOpen(false);
        showToast('Mensagem enviada. Entraremos em contato nos próximos minutos.');
      })
      .catch(function () {
        feedback.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
      })
      .finally(function () {
        submitButton.disabled = false;
        loading.classList.remove('is-visible');
        loading.setAttribute('aria-hidden', 'true');
      });
  });
}

function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 28) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileMenu() {
  const header = document.querySelector('header');
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelectorAll('header nav a');
  if (!header || !toggle) return;

  function setOpen(isOpen) {
    header.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('menu-open'));
  });

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setOpen(false);
  }, { passive: true });
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const revealGroups = new Map();
  elements.forEach(function (el) {
    const section = el.closest('section') || document.body;
    const group = revealGroups.get(section) || [];
    group.push(el);
    revealGroups.set(section, group);
  });

  revealGroups.forEach(function (group) {
    group.forEach(function (el, index) {
      el.style.setProperty('--reveal-index', Math.min(index, 5));
    });
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(function (el) { observer.observe(el); });
}

