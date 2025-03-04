import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 160,
      },
      {
        name: "banner",
        width: 1024,
        height: 640,
      },
      {
        name: "squere",
        width:100,
        height:100,
      }
    ]
  },
}
