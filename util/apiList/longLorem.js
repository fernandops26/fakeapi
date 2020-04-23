module.exports = [
  {
    id: 6,
    title: 'Long Lorems',
    subtitle: 'API de lorems largos (párrafos)',
    size: 100,
    structure: {
      id: '1',
      text:
        'Eaque repellat blanditiis blanditiis. Ex libero repellendus. Sed et veritatis ea laudantium.\n \rPariatur officia harum ad adipisci quia. Deleniti et sequi id ipsum voluptas. Similique omnis non at harum eligendi cumque saepe.\n \rIllo ipsa optio aliquam totam sed consectetur accusantium. Distinctio et et et quo reiciendis sint animi. Molestias excepturi ducimus eligendi culpa. Dignissimos laudantium cumque et ea ea. Nesciunt ab enim voluptatem architecto neque.',
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
        route: '/longlorems',
      },
      {
        method: 'GET',
        route: '/longlorems/1',
      },
      {
        method: 'POST',
        route: '/longlorems',
      },
      {
        method: 'GET',
        route: '/longlorems?id=1',
      },
      {
        method: 'PUT',
        route: '/longlorems/1',
      },
      {
        method: 'PATCH',
        route: '/longlorems/1',
      },
      {
        method: 'DELETE',
        route: '/longlorems/1',
      },
    ],
    example: '/api/longlorems/1',
  },
];
