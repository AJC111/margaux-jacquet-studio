// schemaTypes/reservation.ts

export const reservation = {
  name: 'reservation',
  title: 'Réservations clients',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'telephone',
      title: 'Téléphone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date du rendez-vous',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Date d’enregistrement',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
  preview: {
    select: { nom: 'nom', date: 'date' },
    prepare(value: Record<string, any>) {
        return {
        title: value.nom,
        subtitle: `RDV le ${value.date}`,
        };
    },
    },
}
