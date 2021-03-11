import React, { useState } from 'react';
import {
  YMaps, Map, GeoObject, Placemark,
} from 'react-yandex-maps';

function MainMap(props) {

  const [click, setClick] = useState([]);
  const [routeclick, routesetClick] = useState([]);


  const RouteHandlerClick = (coords) => {
    routesetClick((routeclick) => routeclick = [...routeclick, coords]);
  };

  return (
    <YMaps>
      <Map
        defaultState={{
          center: [55.751574, 37.573856],
          zoom: 5,
        }}
        height={500}
        width={700}
        onClick={(e) => RouteHandlerClick(e._sourceEvent.originalEvent.coords)}
      >
        {click.length >= 2 && click.map((el) => <Placemark geometry={el}  />)}
       
        {routeclick.length && routeclick.map((el) => <Placemark geometry={el}  />)}

        {routeclick.length >= 2 && (
        <GeoObject
          geometry={{
            type: 'LineString',
            coordinates: routeclick,
          }}
          options={{
            geodesic: true,
            strokeWidth: 5,
            strokeColor: '#F008',
            openBalloonOnClick: true,
          }}
        />
        ) }

      </Map>
    </YMaps>
  );
}

export default MainMap;
