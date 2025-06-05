import { defineField, defineType } from 'sanity'

export const aPropos = defineType({
  name: 'aPropos',
  title: 'Page À propos',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre principal',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo portrait',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'intro',
      title: 'Texte d’introduction',
      type: 'text',
    }),
    defineField({
      name: 'parcours',
      title: 'Parcours',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'motivation',
      title: 'Pourquoi ce métier ?',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'valeurs',
      title: 'Valeurs et approche',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'citation',
      title: 'Citation inspirante',
      type: 'object',
      fields: [
        defineField({ name: 'texte', type: 'string', title: 'Texte' }),
        defineField({ name: 'auteur', type: 'string', title: 'Auteur' }),
      ],
    }),
  ],
})
