import React from 'react';
import cloudySky from "../assets/cloudy_sky.jpg";
import rainy from "../assets/rainy.jpg";
import sunnySky from "../assets/sunny_sky.jpg";
import storm from "../assets/storm_sky.jpg";
import snow from "../assets/snow.jpg";
import fog from "../assets/fog.jpg";
import defaultSky from "../assets/default.jpg";
import LoadingSpinner from './loadingSpinner';

const LocationIcon = () => (
    <svg className='-ml-[4px]'
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="black" 
    strokeWidth="2" 
    width="18" 
    height="18"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 21s7-7.75 7-12a7 7 0 10-14 0c0 4.25 7 12 7 12z" 
    />
  </svg>
  );
  
const WeatherCard = ({cityName,country, weatherDescription, temp, visibility,feelsLike, loading}) => {

    const getBackgroundByDescription = (description) => {
        if (description.includes('clear')) return sunnySky;
        if (description.includes('cloud')) return cloudySky;
        if (description.includes('rain')) return rainy;
        if (description.includes('thunderstorm')) return storm;
        if (description.includes('snow')) return snow;
        if (description.includes('mist') || description.includes('fog')) return fog;
        return defaultSky;
      };
    const bgImage = getBackgroundByDescription(weatherDescription);      
  return (
    <div className='flex flex-col gap-6 w-[500px] border rounded-[36px] p-6 shadow-lg'
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {!loading ? (
        <>
          <div className='self-start inline-flex items-center gap-1 px-4 py-1 rounded-2xl bg-white border shadow'>
            <LocationIcon />
            <p className='text-[14px]'>{cityName}, {country}</p>
          </div>
          <div>
            <h2 className='text-blue-950 text-[24px] font-medium'>Weather</h2>
            <p className='text-blue-300 font-light'>Now</p>
          </div>
          {/* temp & extras */}
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-[64px] sm:text-[84px] font-bold text-blue-950 mb-0'>{temp}°C</h1>
              <p className='-mt-4 text-gray-500 text-sm'>Feels like {feelsLike}°C</p>
            </div>
            {/* visibility */}
            <div className='flex flex-col mt-10 justify-center items-center px-6 py-2 bg-lime-500 rounded-md shadow'>
                <p className='text-sm'>Visibility:</p>
                <h3 className='font-semibold text-[16px]'>{visibility}km</h3>
              </div>
            {/* visibility */}
          </div>
          {/* temp & extras */}
        </>
      ):(
        <LoadingSpinner/>
      )}
      
    </div>
  )
}

export default WeatherCard