import React, { useEffect, useRef } from 'react';

const LiveMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;

          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: latitude, lng: longitude },
            zoom: 14,
          });

          new window.google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map,
            title: 'You are here!',
          });
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = loadMap;
    

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default LiveMap;
