
import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const attractions = [
  {
    id: 1,
    type: 'restaurant',
    name: 'Venice Café',
    pos: { lat: 27.0990, lng: -82.4465 },
    info: 'Cozy café with local fare'
  }
];

export default function Blog() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });
  const [selected, setSelected] = useState(null);

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Venice Attractions</h2>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={{ lat: 27.099555, lng: -82.44609 }}
        zoom={13}
      >
        {attractions.map(a => (
          <Marker key={a.id} position={a.pos} onClick={() => setSelected(a)} />
        ))}
        {selected && (
          <InfoWindow position={selected.pos} onCloseClick={() => setSelected(null)}>
            <div>
              <h3>{selected.name}</h3>
              <p>{selected.info}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </main>
  );
}

