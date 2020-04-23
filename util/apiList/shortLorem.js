module.exports = [
  {
    id: 5,
    title: 'Short Lorems',
    subtitle: 'API de lorems cortos',
    size: 100,
    structure: {
      id: '1',
      text: 'alias aut aut',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'text',
        description: 'Texto de lorem',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/shortlorems',
      },
      {
        method: 'GET',
        route: '/shortlorems/1',
      },
      {
        method: 'POST',
        route: '/shortlorems',
      },
      {
        method: 'GET',
        route: '/shortlorems?id=1',
      },
      {
        method: 'PUT',
        route: '/shortlorems/1',
      },
      {
        method: 'PATCH',
        route: '/shortlorems/1',
      },
      {
        method: 'DELETE',
        route: '/shortlorems/1',
      },
    ],
    example: '/api/shortlorems/1',
  },
];
