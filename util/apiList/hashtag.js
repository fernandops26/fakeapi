module.exports = [
  {
    id: 4,
    title: 'Hashtags',
    subtitle: 'API de hastags en tendencias ',
    size: 100,
    structure: {
      id: '1',
      hashtag: '#cinjujob',
      mentions: 544,
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'hashtag',
        description: 'Nombre del hashtag',
      },
      {
        key: 'mentions',
        description: 'Número de menciones',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/hashtags',
      },
      {
        method: 'GET',
        route: '/hashtags/1',
      },
      {
        method: 'POST',
        route: '/hashtags',
      },
      {
        method: 'GET',
        route: '/hashtags?mentions=4408',
      },
      {
        method: 'PUT',
        route: '/hashtags/1',
      },
      {
        method: 'PATCH',
        route: '/hashtags/1',
      },
      {
        method: 'DELETE',
        route: '/hashtags/1',
      },
    ],
    example: '/api/hashtags/1',
  },
];
