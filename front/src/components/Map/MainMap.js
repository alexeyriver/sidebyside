import React from 'react';
import { YMaps, Map ,GeoObject, Placemark} from 'react-yandex-maps';

function MainMap(props) {
  
const arr = [[55.751574, 37.573856],[60.751574, 37.573856],[53.751574, 37.573856]] 

  return (
    <YMaps>
    <Map
      defaultState={{
        center: [55.751574, 37.573856],
        zoom: 5,
      }}
    >
    {arr&& arr.map(el=> <Placemark geometry={el} onClick={(e)=>console.log(e.originalEvent.target.geometry._coordinates)} />)} 
    <GeoObject
      geometry={{
        type: 'LineString',
        coordinates: [
          [55.76, 37.64],
          [52.51, 13.38],
        ],
      }}
      options={{
        geodesic: true,
        strokeWidth: 5,
        strokeColor: '#F008',
        openBalloonOnClick: true
      }}
      onClick={(e)=>console.log(e.originalEvent.target.geometry._coordPath._coordinates)}
Balloon={{ balloonContent: '<strong>Метка Вашего клада</strong>'}}
    />
    </Map>
  </YMaps>
  );
}

export default MainMap;
