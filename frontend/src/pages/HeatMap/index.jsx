import React, { useEffect, useState } from 'react';
import { GoogleMap, HeatmapLayer } from '@react-google-maps/api';

import Header from '../../component/Header';
import api from '../../services/api';
import { Container, Content, MapContainer } from './styles';

function HeatMap() {
  const [mapData, setMapData] = useState([]);

  async function loadResidences() {
    const response = await api.get('/residences');

    console.log(response.data);
    let data = [];

    for (let i = 0; i < response.data.length; i++) {
      data.push({
        location: new window.google.maps.LatLng(
          response.data[i].lat,
          response.data[i].long,
        ),
        weight: response.data[i].residents,
      });
    }

    console.log(data, 'DATA');

    setMapData(data);
  }

  useEffect(() => {
    loadResidences();
  }, []);

  const containerStyle = {
    width: '100%',
    height: '500px',
  };

  const center = {
    lat: -23.6342908,
    lng: -51.6697878,
  };

  const heatOptions = {
    gradient: [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)',
    ],
    opacity: 1,
    radius: 15,
  };

  return (
    <Container>
      <Header />

      <Content>
        <MapContainer>
          <h2>Mapa de Calor</h2>

          {/* <div> */}
          <GoogleMap
            id="circle-example"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
          >
            <HeatmapLayer data={mapData} options={heatOptions} />
          </GoogleMap>
          {/* </div> */}
        </MapContainer>
      </Content>
    </Container>
  );
}

export default HeatMap;
