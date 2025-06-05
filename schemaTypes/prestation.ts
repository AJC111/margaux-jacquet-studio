import { defineType, defineField } from 'sanity'

export const prestation = defineType({
  name: 'prestation',
  title: 'Prestation détaillée',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la prestation',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'titre',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description complète',
      type: 'text',
    }),
    defineField({
      name: 'prix',
      title: 'Prix',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image illustrant la prestation',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
