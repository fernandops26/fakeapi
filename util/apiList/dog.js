module.exports = [
  {
    id: 1,
    title: 'Dogs',
    subtitle: 'API de perros',
    size: 50,
    structure: {
      id: 1,
      name: 'Mark',
      image:
        'https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_806.jpg',
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
        route: '/dogs?name=Mark',
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
