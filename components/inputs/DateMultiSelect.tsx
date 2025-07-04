import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendarOverride.css'
import { set, unset } from 'sanity'

// Fonction utilitaire pour corriger le bug UTC (bon fuseau horaire)
const toLocalISODate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

type Props = {
  value?: string[]
  onChange: (value: any) => void
}

export default function DateMultiSelect({ value, onChange }: Props) {
  const selectedDates = Array.isArray(value) ? value : []

  const toggleDate = (date: Date) => {
    const isoDate = toLocalISODate(date)
    const isAlreadySelected = selectedDates.includes(isoDate)

    const newDates = isAlreadySelected
      ? selectedDates.filter(d => d !== isoDate)
      : [...selectedDates, isoDate]

    if (newDates.length === 0) {
      onChange(unset())
    } else {
      onChange(set(newDates.sort()))
    }
  }

  return (
    <div>
      <Calendar
        onClickDay={toggleDate}
        tileClassName={({ date }) =>
          selectedDates.includes(toLocalISODate(date)) ? 'selected-day' : undefined
        }
      />
    </div>
  )
}
