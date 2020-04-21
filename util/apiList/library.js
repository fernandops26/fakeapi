module.exports = [
  {
    id: 3,
    title: 'Libraries',
    subtitle: 'API de librerias javascript',
    structure: {
      id: '1',
      name: 'vue',
      latest: 'https://biglibraryxd.com/ajax/libs/vue.min.js',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'name',
        description: 'Nombre de libreria',
      },
      {
        key: 'latest',
        description: 'Ultima versión de libreria',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/libraries',
      },
      {
        method: 'GET',
        route: '/libraries/1',
      },
      {
        method: 'POST',
        route: '/libraries',
      },
      {
        method: 'GET',
        route: '/libraries?name=1',
      },
      {
        method: 'PUT',
        route: '/libraries/1',
      },
      {
        method: 'PATCH',
        route: '/libraries/1',
      },
      {
        method: 'DELETE',
        route: '/libraries/1',
      },
    ],
    example: '/api/libraries/1',
  },
];
