import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import LoadingSpinner from './loadingSpinner';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  
};

const MapComponent = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  const center = {
    lat,
    lng,
  };

  return (
    <div className='w-[500px] border rounded-[36px] overflow-hidden shadow-lg'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={11}
            options={{
                disableDefaultUI: true,
                zoomControl: true,
                styles: [
                {
                    featureType: 'water',
                    stylers: [{ color: '#a2d9ff' }],
                },
                {
                    featureType: 'landscape',
                    stylers: [{ color: '#f0f0f0' }],
                },
                {
                    featureType: 'road',
                    stylers: [{ color: '#ffffff' }],
                },
                ],
            }}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div className='flex items-center justify-center h-full'>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default MapComponent;
