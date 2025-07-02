import DateMultiSelect from '../components/inputs/DateMultiSelect'

export const planning = {
  name: 'planning',
  title: 'Configuration du planning',
  type: 'document',
  fields: [
    {
      name: 'joursDisponibles',
      title: 'Jours ouverts à la réservation',
      type: 'array',
      of: [{ type: 'date' }],
      components: {
        input: DateMultiSelect,
      },
    },
    {
      name: 'placesMaxParJour',
      title: 'Nombre max de rendez-vous par jour',
      type: 'number',
      initialValue: 3,
      validation: (Rule: any) => Rule.required().min(1).max(10),
    },
  ],
  preview: {
    select: {
      joursDisponibles: 'joursDisponibles',
      placesMaxParJour: 'placesMaxParJour',
    },
    prepare({ joursDisponibles, placesMaxParJour }: { joursDisponibles?: string[]; placesMaxParJour?: number }) {
      const nbJours = Array.isArray(joursDisponibles) ? joursDisponibles.length : 0
      return {
        title: `📅 ${nbJours} jour${nbJours > 1 ? 's' : ''} sélectionné${nbJours > 1 ? 's' : ''}`,
        subtitle: `↳ ${placesMaxParJour || 0} RDV max / jour`,
      }
    }
  }
}

