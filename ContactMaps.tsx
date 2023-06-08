import React from 'react';
import { useQuery } from 'react-query';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 0,
  lng: 0,
};

const ContactMaps: React.FC = () => {
  const { data: mapData, isLoading, isError } = useQuery('mapData', async () => {
    const response = await fetch('/api/map-data'); // Replacing the actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch map data.');
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching map data.</div>;
  }

  return (
    <div>
      <h1>Contact Maps</h1>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
          {mapData.map((location: any) => (
            <Marker key={location.id} position={location.coords} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ContactMaps;
