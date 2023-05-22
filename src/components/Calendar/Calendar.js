import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'
import './Calendar.scss'

const Calendar1 = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  )
}

export default Calendar1