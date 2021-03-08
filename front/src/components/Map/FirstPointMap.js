import React, { useState, useEffect } from 'react';
import { YMaps, Map, GeoObject, Placemark, } from 'react-yandex-maps';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';


function FirstPointMap({ props }) {
  const [routePoint, setRoutePoint] = useState([props.data])
  console.log(props);
  const HandlerCreateRoute = (e) => {
    console.log(e._sourceEvent.originalEvent.coords)
    setRoutePoint(routePoint => routePoint = [...routePoint, e._sourceEvent.originalEvent.coords])
  }
  const HandlerEditRoute = (e) => {
    console.log(e.originalEvent.target.geometry._coordinates)
    setRoutePoint(routePoint => routePoint = routePoint.filter((el) => el != e.originalEvent.target.geometry._coordinates))
  }

  return (
    <div>
      <YMaps>
        <Map defaultState={{
          center: props.data,
          zoom: 5,
        }}
          height={500}
          width={700}

          onClick={(e) => HandlerCreateRoute(e)}
        >

          {/* <Placemark geometry={[coords[1],coords[0]]} onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)} onContextMenu={(e) => console.log(e.originalEvent.target.geometry._coordinates)} /> */}

          {routePoint && routePoint.map(el =>
            <Placemark key={el} geometry={el}
              onClick={(e) =>
                console.log(e.originalEvent.target.geometry._coordinates)
              }
              onContextMenu={(e) => {
                console.log(e.originalEvent.target.geometry._coordinates);
                HandlerEditRoute(e)
              }

              } />)}

          {routePoint.length >= 2 && (
            <GeoObject
              geometry={{
                type: 'LineString',
                coordinates: routePoint,
              }}
              options={{
                geodesic: true,
                strokeWidth: 5,
                strokeColor: '#F008',
                openBalloonOnClick: true,
              }}
              onClick={(e) => console.log(e.originalEvent.target.geometry._coordPath._coordinates)}
            />
          )}
        </Map>
      </YMaps>






      
    </div>
  );
}

export default FirstPointMap;
