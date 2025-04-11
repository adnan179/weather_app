import React from 'react'

const ExtraWeatherData = ({ tempMin, tempMax, humidity, pressure, wind }) => {
  
  return (
    <div className='w-[350px] grid grid-cols-2 gap-2 bg-gray-100 rounded-[36px] shadow-lg border p-4'>
      {/* Min Temp */}
      <div className='flex flex-col justify-between p-3 rounded-xl bg-blue-100 text-blue-800 shadow'>
        <h2 className='font-medium'>Min Temp</h2>
        <p className='text-[24px] font-bold'>{(tempMin - 273.15).toFixed(0)}°C</p>
      </div>

      {/* Max Temp */}
      <div className='flex flex-col justify-between p-3 rounded-xl bg-red-100 text-red-800 shadow'>
        <h2 className='font-medium'>Max Temp</h2>
        <p className='text-[24px] font-bold'>{(tempMax - 273.15).toFixed(0)}°C</p>
      </div>

      {/* Humidity */}
      <div className='flex flex-col p-3 rounded-xl bg-cyan-100 text-cyan-800 shadow'>
        <h2 className='font-medium'>Humidity</h2>
        <p className='text-[24px] font-bold justify-end'>{humidity}%</p>
      </div>

      {/* Pressure */}
      <div className='flex flex-col justify-between p-3 rounded-xl bg-indigo-100 text-indigo-800 shadow'>
        <h2 className='font-medium'>Pressure</h2>
        <p className='text-[24px] font-bold'>{pressure} hPa</p>
      </div>

      {/* Wind */}
      <div className='col-span-2 flex justify-around items-center rounded-xl bg-gray-900 text-white font-bold text-[16px] shadow p-3 '>
        <div className='border p-2 rounded-md'>
          <h2 className='text-gray-400 text-xs'>Wind Speed:</h2>
          <p>{wind?.speed} m/s</p>
        </div>
        <div className='border p-2 rounded-md'>
          <h2 className='text-gray-400 text-xs'>Wind Deg:</h2>
          <p>{wind?.deg}°</p>
        </div>
        <div className='border p-2 rounded-md'>
          <h2 className='text-gray-400 text-xs'>Wind Gust:</h2>
          <p>{wind.gust} m/s</p>
        </div>
      </div>
    </div>
  )
}

export default ExtraWeatherData;
