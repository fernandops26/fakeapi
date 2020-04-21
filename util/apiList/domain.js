module.exports = [
  {
    id: 2,
    title: 'Domain',
    subtitle: 'API de dominios',
    structure: {
      id: 1,
      domain: 'huarui-casting.com',
      country: 'CN',
      isDead: 'False',
      A: ['127.0.0.1'],
      NS: ['ns3bgq.name.com', 'ns4bgq.name.com'],
      CNAME: null,
      MX: [
        {
          exchange: 'aspmx3.name.com',
          priority: 30,
        },
      ],
      TXT: null,
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'domain',
        description: 'Nombre de dominio',
      },
      {
        key: 'idDead',
        description: 'Si el dominio esta funcionando o no',
      },
      {
        key: 'country',
        description: 'Pais del hosting',
      },
      {
        key: 'A',
        description: 'Registros A',
      },
      {
        key: 'NS',
        description: 'Registros NS',
      },
      {
        key: 'CNAME',
        description: 'Registros CNAME',
      },
      {
        key: 'MX',
        description: 'Registros MX',
      },
      {
        key: 'TXT',
        description: 'Registros TXT',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/domains',
      },
      {
        method: 'GET',
        route: '/domains/1',
      },
      {
        method: 'POST',
        route: '/domains',
      },
      {
        method: 'GET',
        route: '/domains?id=1',
      },
      {
        method: 'PUT',
        route: '/domains/1',
      },
      {
        method: 'PATCH',
        route: '/domains/1',
      },
      {
        method: 'DELETE',
        route: '/domains/1',
      },
    ],
    example: '/api/domains/1',
  },
];
