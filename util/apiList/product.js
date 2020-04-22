module.exports = [
  {
    id: 11,
    title: 'Product',
    subtitle: 'API de productos',
    structure: {
      id: 1,
      name: 'Incredible Granite Keyboard',
      price: '575.00',
      category: 'Computers',
      color: 'silver',
      provider: "Daniel, D'Amore and Lynch",
    },
    structureDescription: [
      {
        key: 'id',
        description: 'Id',
      },
      {
        key: 'name',
        description: 'Nombre',
      },
      {
        key: 'price',
        description: 'Precio',
      },
      {
        key: 'category',
        description: 'Categoria',
      },
      {
        key: 'color',
        description: 'Color',
      },
      {
        key: 'provider',
        description: 'Proveedor',
      },
    ],
    routes: [
      {
        method: 'GET',
        route: '/products',
      },
      {
        method: 'GET',
        route: '/products/1',
      },
      {
        method: 'POST',
        route: '/products',
      },
      {
        method: 'GET',
        route: '/products?id=1',
      },
      {
        method: 'PUT',
        route: '/products/1',
      },
      {
        method: 'PATCH',
        route: '/products/1',
      },
      {
        method: 'DELETE',
        route: '/products/1',
      },
    ],
    example: '/api/products/1',
  },
];
