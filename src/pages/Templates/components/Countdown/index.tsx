import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const timer = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    setTime({
      ...time,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    })
  }

  useEffect(() => {
    const countDown = setInterval(timer, 1000)

    return () => clearInterval(countDown)
  })

  return (
    <div className='countdown'>
      <div className='fc-center countdown-time day'>
        <p className='countdown-days'>{ time.days }</p>
        <p>hari</p>
      </div>
      <div className='fc-center countdown-time hour'>
        <p className='countdown-hours'>{ time.hours }</p>
        <p>jam</p>
      </div>
      <div className='fc-center countdown-time minute'>
        <p className='countdown-minutes'>{ time.minutes }</p>
        <p>menit</p>
      </div>
      <div className='fc-center countdown-time second'>
        <p className='countdown-seconds'>{ time.seconds }</p>
        <p>detik</p>
      </div>
    </div>
  )
}

export default Countdown