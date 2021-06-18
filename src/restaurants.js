const restaurants = {
  "1": {
    id: "1",
    name: 'Inspira Santa Marta',
    address: 'R. de Santa Marta 48',
    rating: 4.9,
    description: 'Aqui poderá contar com os melhores produtos locais, sempre frescos e, quando possível, de produção biológica, o que permite oferecer a quem nos visita uma carta variada que inclui pratos vegetarianos, vegan, sem lactose ou adaptados a pessoas celíacas. O desejo é simples: dar a todos os nossos clientes a oportunidade de desfrutar de uma experiência gastronómica diferenciada.',
    certificates: ['apcer', 'green-globe'],
    images: ['/restaurants/santamarta01.png', '/restaurants/santamarta01.png', '/restaurants/santamarta01.png'],
    openingHours: {
      '2a a 6a feira': ['7h00 às 10h30', '12h30 às 15h00', '19h30 às 22h30'],
      'Sábados': ['7h00 às 11h00', '12h30 às 15h00'],
      'Domingos e Feriados': ['7h00 às 11h00', '19h30 às 22h30']
    },
    comments: [{
      username: 'Natália Rodrigues',
      location: 'Espinho, Porto',
      rating: 4.7,
      comment: 'O hotel é uma surpresa quando se entra, surpreende pelo edifício e entrada discreta mas que esconde um Hall muito interessante de acesso à receção do hotel e bar propriamente dito. Bebidas interessantes, serviço 5*, zona de restaurante também muito boa.'
    },
    {
      username: 'Rodrigo Sampaio',
      location: 'Mafra, Lisboa',
      rating: 4.0,
      comment: 'Visitei este bar num evento especial: de gins. gostei imenso... o espaço é surpreendente é bem maior do que o esperado. recomendo a visita..'
    }, {
      username: 'Natália Rodrigues',
      location: 'Espinho, Porto',
      rating: 4.7,
      comment: 'O hotel é uma surpresa quando se entra, surpreende pelo edifício e entrada discreta mas que esconde um Hall muito interessante de acesso à receção do hotel e bar propriamente dito. Bebidas interessantes, serviço 5*, zona de restaurante também muito boa.'
    },
    {
      username: 'Rodrigo Sampaio',
      location: 'Mafra, Lisboa',
      rating: 4.0,
      comment: 'Visitei este bar num evento especial: de gins. gostei imenso... o espaço é surpreendente é bem maior do que o esperado. recomendo a visita..'
    }, {
      username: 'Natália Rodrigues',
      location: 'Espinho, Porto',
      rating: 4.7,
      comment: 'O hotel é uma surpresa quando se entra, surpreende pelo edifício e entrada discreta mas que esconde um Hall muito interessante de acesso à receção do hotel e bar propriamente dito. Bebidas interessantes, serviço 5*, zona de restaurante também muito boa.'
    },
    {
      username: 'Rodrigo Sampaio',
      location: 'Mafra, Lisboa',
      rating: 4.0,
      comment: 'Visitei este bar num evento especial: de gins. gostei imenso... o espaço é surpreendente é bem maior do que o esperado. recomendo a visita..'
    }]
  },
  "2": {
    id: "2",
    name: 'Season',
    address: 'Rua Nova da Piedade, 62 ',
    rating: 4.3,
    description: 'Os donos do Água pela Barba abriram um restaurante diferente, muito atento à lei da sazonalidade, em São Bento. O Season foi construído com base na imagem de uma casa de campo dos avós, na ideia de comida de conforto e dos produtos vindos directamente da terra, e isso nota-se na decoração, que só quebra o ar mais rústico com quatro néons para as quatro estações do ano – só acende o da estação em que estamos. A carta reflecte todas as mudanças de estação e privilegia os produtos que estão na sua época.',
    images: ['/restaurants/season-1.png', '/restaurants/season-2.png'],
    openingHours: {
      '2a a 6a feira': ['10h00 às 14h30'],
      'Sábados': ['10h00 às 14h30'],
      'Domingos e Feriados': ['11h00 às 15h00']
    },
    comments: [{
      username: 'Natália Rodrigues',
      location: 'Espinho, Porto',
      rating: 4.7,
      comment: 'O hotel é uma surpresa quando se entra, surpreende pelo edifício e entrada discreta mas que esconde um Hall muito interessante de acesso à receção do hotel e bar propriamente dito. Bebidas interessantes, serviço 5*, zona de restaurante também muito boa.'
    },
    {
      username: 'Rodrigo Sampaio',
      location: 'Mafra, Lisboa',
      rating: 4.0,
      comment: 'Visitei este bar num evento especial: de gins. gostei imenso... o espaço é surpreendente é bem maior do que o esperado. recomendo a visita..'
    }, {
      username: 'Natália Rodrigues',
      location: 'Espinho, Porto',
      rating: 4.7,
      comment: 'O hotel é uma surpresa quando se entra, surpreende pelo edifício e entrada discreta mas que esconde um Hall muito interessante de acesso à receção do hotel e bar propriamente dito. Bebidas interessantes, serviço 5*, zona de restaurante também muito boa.'
    },
    {
      username: 'Rodrigo Sampaio',
      location: 'Mafra, Lisboa',
      rating: 4.0,
      comment: 'Visitei este bar num evento especial: de gins. gostei imenso... o espaço é surpreendente é bem maior do que o esperado. recomendo a visita..'
    }, {
      username: 'Natália Rodrigues',
      location: 'Espinho, Porto',
      rating: 4.7,
      comment: 'O hotel é uma surpresa quando se entra, surpreende pelo edifício e entrada discreta mas que esconde um Hall muito interessante de acesso à receção do hotel e bar propriamente dito. Bebidas interessantes, serviço 5*, zona de restaurante também muito boa.'
    },
    {
      username: 'Rodrigo Sampaio',
      location: 'Mafra, Lisboa',
      rating: 4.0,
      comment: 'Visitei este bar num evento especial: de gins. gostei imenso... o espaço é surpreendente é bem maior do que o esperado. recomendo a visita..'
    }],
    "3": {
      id: "3",
      name: 'Feitoria',
      address: 'Doca do Bom Sucesso',
      rating: 4.5,
      description: 'O chef sucedeu a José Cordeiro à frente do Altis Belém. Agarrou a estrela Michelin ganha em 2012 e, mais do que isso, escalou um caminho surpreendente e consistente, bem sustentado pela qualidade da matéria-prima escolhida – prova disso é o menu Terra, uma exímia degustação 100% vegetariana de três pratos, em boa parte assegurada pela Quinta do Poial. Se merecia a segunda estrela, como foi vaticinado e acabou por não acontecer? Merecia. Os critérios dos inspectores do guia são subjectivos, já se sabe, mas quem dá a dupla estrela ao Belcanto e ao Yeatman, dá também ao Feitoria. É tudo a mesma liga.',
      images: ['/restaurans/feitoria-1.png', '/restaurants/feitoria-2.png'],
      openingHours: {
        '2a a 6a feira': ['10h00 às 14h30'],
        'Sábados': ['10h00 às 14h30'],
        'Domingos e Feriados': ['11h00 às 15h00']
      },
      comments: [{
        username: 'Natália Rodrigues',
        location: 'Espinho, Porto',
        rating: 4.7,
        comment: "Muito bom."
      }]
    },
    "4": {
      id: "4",
      name: 'Sála',
      address: 'Rua dos Bacalhoeiros, 103',
      rating: 3.9,
      description: '“Sustentabilidade é uma palavra muito pesada. Sustentabilidade do quê? Financeira? Temos tendência a associá-la ao ambiente mas eu tenho de fazer a gestão de uma série de sustentabilidades. Mas gosto de dizer que sou ambientalmente consciente”, diz João Sá, que tem o SÁLA, na Rua dos Bacalhoeiros. É responsável por uma cozinha em permanente mudança, sazonal mas sem recurso a carta de Primavera-Verão ou de Outono-Inverno – afinal, existem microestações – feita com aquilo que os produtores vão entregando, com os legumes em maioria, um q.b. de peixe e poucas carnes. O chef já cortou no uso de papel e pediu um orçamento para uma máquina que faz a gestão dos resíduos orgânicos, que virá da China. Na carta do SÁLA, os pratos têm identificados apenas os seus dois, três ingredientes de base, sem divisão entre entradas e pratos principais e desde a abertura já houve uma série de mudanças. Em Maio vão ter uma semana dedicada ao capão, que há-de vir de Freamunde.',
      images: ['/restaurants/sala-1.png', '/restaurants/sala-2.png'],
      openingHours: {
        '2a a 6a feira': ['10h00 às 22h30'],
        'Sábados': ['10h00 às 22h30'],
        'Domingos e Feriados': ['12h00 às 16h00']
      }
    }
  }
};

export default restaurants;