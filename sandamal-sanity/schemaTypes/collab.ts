export default {
  name: 'collab',
  type: 'document',
  title: 'Collab',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Collab',
    },
    {
      name: 'collabMainImage',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
  ],
}