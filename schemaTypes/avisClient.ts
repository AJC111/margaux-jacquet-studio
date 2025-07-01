import { defineField, defineType } from 'sanity'

export const avisClient = defineType({
  name: 'avisClient',
  title: 'Avis Client',
  type: 'document',
  fields: [
    defineField({
      name: 'nom',
      title: 'Nom du client',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: 'profession',
      title: 'Profession (optionnel)',
      type: 'string',
      description: 'Ex: Chef d\'entreprise, Artiste, etc.',
    }),
    defineField({
      name: 'photo',
      title: 'Photo du client (optionnel)',
      type: 'image',
      options: { 
        hotspot: true,
        accept: 'image/*'
      },
      description: 'Photo portrait du client pour personnaliser l\'avis',
    }),
    defineField({
      name: 'commentaire',
      title: 'Commentaire',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(20).max(1000),
      description: 'Témoignage du client (20-1000 caractères)',
    }),
    defineField({
      name: 'note',
      title: 'Note sur 5 (optionnel)',
      type: 'number',
      options: {
        list: [
          { title: '⭐ (1/5)', value: 1 },
          { title: '⭐⭐ (2/5)', value: 2 },
          { title: '⭐⭐⭐ (3/5)', value: 3 },
          { title: '⭐⭐⭐⭐ (4/5)', value: 4 },
          { title: '⭐⭐⭐⭐⭐ (5/5)', value: 5 },
        ],
      },
      validation: (Rule) => Rule.min(1).max(5),
      description: 'Laisser vide si vous ne souhaitez pas afficher de note',
    }),
    defineField({
      name: 'date',
      title: 'Date de l\'avis',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visible',
      title: 'Visible sur le site',
      type: 'boolean',
      initialValue: true,
      description: 'Décocher pour masquer cet avis temporairement',
    }),
    defineField({
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Plus le nombre est petit, plus l\'avis apparaît en premier',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'Par ordre d\'affichage',
      name: 'ordre',
      by: [{ field: 'ordre', direction: 'asc' }],
    },
    {
      title: 'Par date (plus récent)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'nom',
      subtitle: 'commentaire',
      media: 'photo',
      note: 'note',
    },
    prepare({ title, subtitle, media, note }) {
      const stars = '⭐'.repeat(note || 0)
      return {
        title: `${title} ${stars}`,
        subtitle: subtitle?.substring(0, 100) + (subtitle?.length > 100 ? '...' : ''),
        media,
      }
    },
  },
})