import { useEffect, useState } from 'react'
import { useClockType } from '../types/hooksType'

const useClock: useClockType = () => {
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000 - date.getMilliseconds())
    return () => clearInterval(timer)
  }, [date])

  return { date }
}

export default useClock
