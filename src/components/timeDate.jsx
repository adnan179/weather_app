import React, { useEffect } from 'react'

const TimeDate = () => {
    const [localeTime, setLocaleTime] = React.useState('');
    const [localeDate, setLocaleDate] = React.useState('');
    useEffect(() => {
        setLocaleDate(new Date().toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' }));
        const interval = setInterval(() => {
            setLocaleTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        },1000)
        return () => clearInterval(interval);
      },[])
  return (
    <div className='flex flex-col gap-3 bg-blue-300 rounded-[24px] shadow-lg p-3 justify-center items-center'>
        <h1 className='text-white font-semibold text-[36px] tracking-tight break-words text-center'>{localeTime}</h1>
        <h3 className='text-gray-200 text-[16px] -mt-4'>{localeDate}</h3>
    </div>
  )
}

export default TimeDate;