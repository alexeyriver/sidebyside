import React from 'react';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';

function HistoryMap({el}) {

  return (
    <YMaps>
      <div >
        <Map defaultState={{
          center: el.startCoords, zoom: 6
        }}
          height={300} width={500}>
          <GeoObject
            geometry={{
              type: 'LineString',
              coordinates: [el.startCoords, ...el.betweenCoords, el.finalCoords]
            }}
            options={{
              geodesic: true,
              strokeWidth: 5,
              strokeColor: '#F008',
            }}
          />
          <Placemark geometry={el.startCoords} />
          <Placemark geometry={el.finalCoords} />


        </Map>
      </div>
    </YMaps>
  );
}

export default HistoryMap;
