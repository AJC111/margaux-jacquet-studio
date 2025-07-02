import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendarOverride.css'
import { set, unset } from 'sanity'

type Props = {
  value?: string[]
  onChange: (value: any) => void
}

export default function DateMultiSelect({ value, onChange }: Props) {
  const selectedDates = Array.isArray(value) ? value : []

  const toggleDate = (date: Date) => {
    const isoDate = date.toISOString().split('T')[0]
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
          selectedDates.includes(date.toISOString().split('T')[0]) ? 'selected-day' : undefined
        }
      />
    </div>
  )
}
