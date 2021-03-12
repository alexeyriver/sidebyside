import React from 'react';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';

function HistoryMap({el}) {

  return (
    <div className='mapContainer'>
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
          <Placemark geometry={el.startCoords}  options={{
                  iconLayout: 'default#image',
                  iconImageOffset: [-16, -38],
                  iconImageHref: 'https://img.icons8.com/ios/452/marker-s.png'
                }} />
          <Placemark geometry={el.finalCoords}  options={{
                    iconLayout: 'default#image',
                    iconImageOffset: [-4, -36],
                    iconImageHref: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-6f6c68f441ae243386bf21a10d3b5cea.png'
                  }} />


        </Map>
      </div>
    </YMaps>
    </div>
  );
}

export default HistoryMap;
