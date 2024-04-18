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
      name: 'mainImageMobile',
      title: 'Main Image Mobile',
      type: 'image',
    },
    {
      name: 'mainImageTab',
      title: 'Main Image Tablette & Desktop',
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