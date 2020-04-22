module.exports = [
  {
    id: 9,
    title: 'Visits',
    subtitle: 'API de visitas hacia de web',
    structure: {
      id: 1,
      userAgent:
        'Mozilla/5.0 (Windows NT 5.1; WOW64; rv:11.3) Gecko/20100101 Firefox/11.3.2',
      ip: '33.235.95.79',
      date: '2020-03-10T13:00:10.809Z',
      countryCode: 'PL',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'userAgent',
        description: 'Agente de usuario',
      },
      {
        key: 'ip',
        description: 'IP del usuario',
      },
      {
        key: 'date',
        description: 'Fecha de visita',
      },
      {
        key: 'countryCode',
        description: 'País de procedencia',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/visits',
      },
      {
        method: 'GET',
        route: '/visits/1',
      },
      {
        method: 'POST',
        route: '/visits',
      },
      {
        method: 'GET',
        route: '/visits?id=1',
      },
      {
        method: 'PUT',
        route: '/visits/1',
      },
      {
        method: 'PATCH',
        route: '/visits/1',
      },
      {
        method: 'DELETE',
        route: '/visits/1',
      },
    ],
    example: '/api/visits/1',
  },
];
