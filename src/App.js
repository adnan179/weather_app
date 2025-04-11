import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Autocomplete, TextField } from '@mui/material';
import WeatherCard from './components/weatherCard';
import LoadingSpinner from './components/loadingSpinner';
import { cityOptions } from './data/cityData';
import MapComponent from './components/mapComponent';
import ExtraWeatherData from './components/extraWeatherData';
import TimeDate from './components/timeDate';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [selectedCityOption, setSelectedCityOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //memoized city options to avoid unnecessary recalculations
  const memoizedCityOptions = useMemo(() => cityOptions,[]);

  //memeoized fetchWeather function
  const fetchWeather = useCallback(async(cityName) => {
    if(!cityName) return;
    setLoading(true);
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
      setWeatherData(response.data);
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  },[]);

  // Get current location and reverse geocode to get city name on initial render
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLoading(true);
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
          );
          const cityName = res.data[0]?.name;
          if(cityName){
            setCity(cityName);
            const match = cityOptions.find(opt => opt.label.toLowerCase().includes(cityName.toLowerCase()));
            if(match){
              setSelectedCityOption(match);
            }
          }
        } catch (err) {
          console.error("Reverse geocoding failed", err);
        }finally{
          setLoading(false);
        }
      },
      (err) => {
        console.error("Error getting location", err);
        setError(err);
      }
    );
  }, []);

  // Fetch weather only when city changes
  useEffect(() => {
    fetchWeather(city);
  }, [city,fetchWeather]);

  //memoized onChange handler for AutoComplete
  const handleCityChange = useCallback((e,value) => {
    if(value?.label){
      const cityOnly = value.label.split(",")[0].trim();
      setCity(cityOnly);
      setSelectedCityOption(value);
    }
  },[]);

  return (
    <div className="flex flex-col gap-4 p-3 sm:p-5 min-h-screen w-full ">
      <div className='flex gap-4 items-center'>
        <TimeDate/>
        <div className='flex flex-col gap-3'>
          <p className='text-gray-300 font-medium text-xs'>
            By default it renders your current city's weather. For specific city’s weather, select here:
          </p>
        
          <Autocomplete
            className='w-full sm:w-[300px]'
            options={memoizedCityOptions}
            groupBy={(option) => option.group}
            getOptionLabel={(option) => option.label}
            value={selectedCityOption}
            renderInput={(params) => <TextField {...params} label="Select a City" />}
            onChange={handleCityChange}
          />
        </div>
      </div>
      

      {loading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : weatherData ? (
        <div className='flex gap-5 flex-wrap'>
          <WeatherCard 
            cityName={weatherData?.name} 
            country={weatherData?.sys.country} 
            weatherDescription={weatherData?.weather[0].description} 
            temp={(weatherData?.main.temp - 273.15).toFixed(0)} 
            visibility={(weatherData?.visibility / 1000).toFixed(1)}
            feelsLike={(weatherData?.main.feels_like - 273.15).toFixed(0)}
            loading={loading}
          />
          <MapComponent 
            lat={weatherData?.coord.lat} 
            lng={weatherData?.coord.lon} 
          />
          <ExtraWeatherData 
            tempMin={weatherData?.main.temp_min} 
            tempMax={weatherData?.main.temp_max}
            humidity={weatherData?.main.humidity}
            pressure={weatherData?.main.pressure}
            wind={weatherData?.wind}
          />
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default App;
