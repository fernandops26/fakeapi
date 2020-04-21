module.exports = [
  {
    id: 1,
    title: 'Dogs',
    subtitle: 'API de perros',
    structure: {
      id: '1',
      name: 'Pepito',
      image: 'https://image.jpg',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'name',
        description: 'Nombre del perro',
      },
      {
        key: 'image',
        description: 'Imagen',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/dogs',
      },
      {
        method: 'GET',
        route: '/dogs/1',
      },
      {
        method: 'POST',
        route: '/dogs',
      },
      {
        method: 'GET',
        route: '/dogs?name=1',
      },
      {
        method: 'PUT',
        route: '/dogs/1',
      },
      {
        method: 'PATCH',
        route: '/dogs/1',
      },
      {
        method: 'DELETE',
        route: '/dogs/1',
      },
    ],
    example: '/api/dogs/1',
  },
];
