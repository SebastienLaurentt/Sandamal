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
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description (Card)',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description (Page)',
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