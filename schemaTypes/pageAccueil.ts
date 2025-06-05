// studio/schemaTypes/pageAccueil.ts
import { defineField, defineType } from 'sanity'

export const pageAccueil = defineType({
  name: 'pageAccueil',
  type: 'document',
  title: 'Page d’accueil',
  fields: [
    defineField({ name: 'prenom', type: 'string', title: 'Prénom' }),
    defineField({ name: 'nom', type: 'string', title: 'Nom' }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo de présentation',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Texte d’introduction',
    }),
    defineField({
      name: 'citation',
      type: 'object',
      title: 'Citation',
      fields: [
        defineField({ name: 'texte', type: 'text', title: 'Texte de la citation' }),
        defineField({ name: 'auteur', type: 'string', title: 'Auteur (optionnel)' }),
      ],
    }),
    defineField({
  name: 'prestations',
  type: 'array',
  title: 'Prestations proposées',
  of: [
    {
      type: 'object',
      name: 'prestationAccueil',
      title: 'Prestation',
      fields: [
        defineField({ name: 'titre', type: 'string', title: 'Titre' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'slug',
          title: 'Slug (URL vers la page prestation)',
          type: 'slug',
          options: {
            source: 'titre',
            maxLength: 96,
          },
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    },
  ],
}),
  ],
})
