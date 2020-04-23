module.exports = [
  {
    id: 7,
    title: 'Users',
    subtitle: 'API de usuarios',
    size: 100,
    structure: {
      id: 1,
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/erwanhesry/128.jpg',
      email: 'maxine_legros@yahoo.com',
      username: 'vivienne46',
      firstName: 'Keaton',
      lastName: 'Carter',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'avatar',
        description: 'Imagen de usuario',
      },
      {
        key: 'email',
        description: 'Correo Electrónico',
      },
      {
        key: 'firstName',
        description: 'Nombres',
      },
      {
        key: 'lastName',
        description: 'Apellidos',
      },
      {
        key: 'username',
        description: 'Nombre de usuario',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/users',
      },
      {
        method: 'GET',
        route: '/users/1',
      },
      {
        method: 'POST',
        route: '/users',
      },
      {
        method: 'GET',
        route: '/users?email=maxine_legros@yahoo.com',
      },
      {
        method: 'PUT',
        route: '/users/1',
      },
      {
        method: 'PATCH',
        route: '/users/1',
      },
      {
        method: 'DELETE',
        route: '/users/1',
      },
    ],
    example: '/api/users/1',
  },
];
