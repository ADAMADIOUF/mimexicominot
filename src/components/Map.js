import React, { useState, useEffect } from 'react'
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

const Map = () => {
  const [mapSize, setMapSize] = useState({
    width: '700px',
    height: '400px',
  })
  const [showInfoWindow, setShowInfoWindow] = useState(false) // Define the state here

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setMapSize({ width: '100%', height: '300px' })
      } else {
        setMapSize({ width: '800px', height: '400px' })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call on mount to set initial size

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const center = {
    lat: 48.23251,
    lng: -101.296273,
  }
const infoStyle = {
  position: 'absolute',
  top: '10px', // Adjust as needed
  left: '10px', // Adjust as needed
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  zIndex: 2, // Ensure it's above the map
}

  return (
    <div style={{ position: 'relative' }}>
      {' '}
      {/* Container with relative positioning */}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapSize} center={center} zoom={15}>
          <Marker position={center} onClick={() => setShowInfoWindow(true)} />
          {showInfoWindow && (
            <InfoWindow
              position={center}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              {/* InfoWindow content */}
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
      <div style={infoStyle}>
        {' '}
        {/* Absolutely positioned info div */}
        <h3>Mi Mexico Restaurant</h3>
        <p>3816 S Broadway, Minot, ND 58701</p>
      </div>
    </div>
  )
}

export default Map
