module.exports = [
  {
    id: 12,
    title: 'GEO Locations',
    subtitle: 'API de GEO localizaciones',
    structure: {
      id: 1,
      streetA: 'Raegan Mission',
      streetB: '2127 Austyn Squares',
      streetC: '61383 Micaela Roads Suite 860',
      streetD: 'Apt. 713',
      city: 'Madgebury',
      state: 'Louisiana',
      country: 'Cayman Islands',
      zipcode: '22527',
      latitude: '54.3950',
      longitude: '-162.6983',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'streetA',
        description: 'Calle A',
      },
      {
        key: 'streetB',
        description: 'Calle B',
      },
      {
        key: 'streetC',
        description: 'Calle C',
      },
      {
        key: 'streetD',
        description: 'Calle D',
      },
      {
        key: 'city',
        description: 'Ciudad',
      },
      {
        key: 'state',
        description: 'Estado',
      },
      {
        key: 'country',
        description: 'País',
      },
      {
        key: 'zipcode',
        description: 'Código ZIP',
      },
      {
        key: 'latitude',
        description: 'Latitud',
      },
      {
        key: 'longitude',
        description: 'Longitud',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/geolocations',
      },
      {
        method: 'GET',
        route: '/geolocations/1',
      },
      {
        method: 'POST',
        route: '/geolocations',
      },
      {
        method: 'GET',
        route: '/geolocations?id=1',
      },
      {
        method: 'PUT',
        route: '/geolocations/1',
      },
      {
        method: 'PATCH',
        route: '/geolocations/1',
      },
      {
        method: 'DELETE',
        route: '/geolocations/1',
      },
    ],
    example: '/api/geolocations/1',
  },
];
