module.exports = [
  {
    id: 10,
    title: 'Transactions',
    subtitle: 'API de transaccones bancarias',
    structure: {
      id: 1,
      amount: '132.52',
      date: '2012-02-02T05:00:00.000Z',
      business: 'Baumbach, Pacocha and Maggio',
      accountName: 'Investment Account 9423',
      type: 'payment',
      accountNumber: '90826670',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'amount',
        description: 'Monto',
      },
      {
        key: 'date',
        description: 'Fecha',
      },
      {
        key: 'business',
        description: 'Nombre de negocio',
      },
      {
        key: 'accountName',
        description: 'Nombre de cuenta',
      },
      {
        key: 'type',
        description: 'Tipo de transacción',
      },
      {
        key: 'accountNumber',
        description: 'Número de cuenta',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/transactions',
      },
      {
        method: 'GET',
        route: '/transactions/1',
      },
      {
        method: 'POST',
        route: '/transactions',
      },
      {
        method: 'GET',
        route: '/transactions?type=type',
      },
      {
        method: 'PUT',
        route: '/transactions/1',
      },
      {
        method: 'PATCH',
        route: '/transactions/1',
      },
      {
        method: 'DELETE',
        route: '/transactions/1',
      },
    ],
    example: '/api/transactions/1',
  },
];
