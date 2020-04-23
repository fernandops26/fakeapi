module.exports = [
  {
    id: 8,
    title: 'Jobs',
    subtitle: 'API de trabajos',
    size: 100,
    structure: {
      id: 1,
      job: 'Production Planner',
      company: 'Coventry Health Care Inc.',
      country: 'New Zealand',
      city: 'Vumohfof',
      salary: 2483,
      currency: 'USD',
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'job',
        description: 'Nombre de profesión',
      },
      {
        key: 'company',
        description: 'Compañia',
      },
      {
        key: 'country',
        description: 'País',
      },
      {
        key: 'city',
        description: 'Ciudad',
      },
      {
        key: 'salary',
        description: 'Salario',
      },
      {
        key: 'currency',
        description: 'Moneda',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/jobs',
      },
      {
        method: 'GET',
        route: '/jobs/1',
      },
      {
        method: 'POST',
        route: '/jobs',
      },
      {
        method: 'GET',
        route: '/jobs?currency=USD',
      },
      {
        method: 'PUT',
        route: '/jobs/1',
      },
      {
        method: 'PATCH',
        route: '/jobs/1',
      },
      {
        method: 'DELETE',
        route: '/jobs/1',
      },
    ],
    example: '/api/jobs/1',
  },
];
