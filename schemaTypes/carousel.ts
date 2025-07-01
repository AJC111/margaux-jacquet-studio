import { defineField, defineType } from 'sanity'

export const carouselImage = defineType({
  name: 'carouselImage',
  title: 'Image du carrousel',
  type: 'document',
  fields: [
    defineField({
      name: 'asset',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texte alternatif (accessibilité)',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'caption',
      title: 'Légende (affichée sous l’image)',
      type: 'string',
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
      initialValue: 100,
      validation: (Rule) => Rule.required().min(0).max(999),
    }),
    defineField({
      name: 'visible',
      title: 'Image visible sur le site',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'ordreAsc',
      by: [{ field: 'ordre', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      media: 'asset',
      title: 'caption',
      subtitle: 'alt',
    },
    prepare({ media, title, subtitle }) {
      return {
        title: title || 'Image sans légende',
        subtitle: subtitle || '',
        media,
      }
    },
  },
})
