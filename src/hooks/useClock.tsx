import { useState } from 'react'
import { useClockType } from '../types/hooksType'

const useClock:useClockType = () => {
  const [time, setTime] = useState<string>('')
  setInterval(() => {
    const nowTime = new Date()
    const nowHour = nowTime.getHours()
    const nowMint = nowTime.getMinutes()
    const nowSec = nowTime.getSeconds()
    setTime(`現在時刻 ${nowHour}:${nowMint}:${nowSec}`)
  }, 1000)

  return { time }
}

export default useClock
