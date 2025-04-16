import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Fix for Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Service area locations in Collier County & surrounding areas
const serviceLocations = [
  { name: "Naples", coordinates: [26.1420, -81.7948] as [number, number], isMain: true },
  { name: "Marco Island", coordinates: [25.9424, -81.7007] as [number, number], isMain: false },
  { name: "Bonita Springs", coordinates: [26.3398, -81.7787] as [number, number], isMain: false },
  { name: "Estero", coordinates: [26.4381, -81.8067] as [number, number], isMain: false },
  { name: "Golden Gate", coordinates: [26.1775, -81.7040] as [number, number], isMain: false },
  { name: "Pelican Bay", coordinates: [26.2417, -81.8131] as [number, number], isMain: false },
  { name: "Naples Park", coordinates: [26.2553, -81.8075] as [number, number], isMain: false },
  { name: "North Naples", coordinates: [26.2712, -81.8010] as [number, number], isMain: false },
  { name: "East Naples", coordinates: [26.1125, -81.7320] as [number, number], isMain: false },
  { name: "Everglades City", coordinates: [25.8696, -81.3803] as [number, number], isMain: false },
];

const ServiceAreaMap = () => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Set map as ready after component mounts
    setMapReady(true);
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-[#0056b3] mb-4">Our Service Area</h2>
          <p className="text-lg text-gray-600">
            We provide appliance repair services throughout Naples and Southwest Florida
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 relative">
            {mapReady && (
              <MapContainer 
                center={[26.1420, -81.7948]} // Center on Naples
                zoom={9} 
                style={{ height: '100%', width: '100%' }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {serviceLocations.map((location, index) => (
                  <Marker 
                    key={index} 
                    position={location.coordinates}
                  >
                    <Popup>
                      <div className="text-center p-1">
                        <strong className="block text-[#0056b3]">{location.name}</strong>
                        {location.isMain ? (
                          <span className="text-sm">Our Base of Operations</span>
                        ) : (
                          <span className="text-sm">Service Area</span>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-center text-gray-700">
              We service Naples, Marco Island, Bonita Springs, Estero, Golden Gate, 
              Pelican Bay, Naples Park, Pine Ridge, North Naples, East Naples, Lely, 
              Fort Myers, Immokalee, and Everglades City.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
