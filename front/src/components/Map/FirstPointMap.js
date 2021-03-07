import React,{useState} from 'react';
import {
  YMaps, Map, GeoObject, Placemark,
} from 'react-yandex-maps';

import { useDispatch, useSelector } from 'react-redux';


function FirstPointMap({props}) {
const cord=props.data.split(' ');
  const data = useSelector((state) => state.fetch.fetchCreateJourney);
  console.log(data);
  console.log(cord);
//  ПОЧЕМУ СТЕЙТ ЗАГРУЖАЕТСЯ  2 Раза?
/////вызывать координаты из store selector

  return (
    <div>
      <YMaps>
      <Map  defaultState={{
          center: [cord[1],cord[0]],
          zoom: 5,
        }}
        height={500}
        width={700}>
{/* <Placemark geometry={[coords[1],coords[0]]} onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)} onContextMenu={(e) => console.log(e.originalEvent.target.geometry._coordinates)} /> */}
<Placemark geometry={[cord[1],cord[0]]} onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)} onContextMenu={(e) => console.log(e.originalEvent.target.geometry._coordinates)} />
       </Map>
    </YMaps>
    </div>
  );
}

export default FirstPointMap;
