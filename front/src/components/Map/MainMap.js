import React, {useState} from 'react';
import { YMaps, Map ,GeoObject, Placemark} from 'react-yandex-maps';

function MainMap(props) {
  
// https://geocode-maps.yandex.ru/1.x/?apikey=84f3099a-6de5-4986-816c-186384023e64&format=json&geocode=Тверская+6
// преобразование поиска в json


const arr = [[55.751574, 37.573856],[60.751574, 37.573856],[53.751574, 37.573856]] 
const [click,setClick]=useState([])
const [routeclick,routesetClick]=useState([])

const MapHandlerClick = (coords)=>{
  setClick(click=>click= [...click,coords])
}

const RouteHandlerClick = (coords)=>{
  routesetClick(routeclick=>routeclick= [...routeclick,coords])
}


  return (
    <YMaps>
    <Map
      defaultState={{
        center: [55.751574, 37.573856],
        zoom: 5,
      }}  height={500} width={700}
    // onClick={(e)=>MapHandlerClick(e._sourceEvent.originalEvent.coords)} 
    onClick={(e)=>RouteHandlerClick(e._sourceEvent.originalEvent.coords)} 

    >
    {/* {arr&& arr.map(el=> <Placemark geometry={el} onClick={(e)=>console.log(e.originalEvent.target.geometry._coordinates)} />)}  */}
    {click.length>=2 && click.map(el=> <Placemark geometry={el} onClick={(e)=>console.log(e.originalEvent.target.geometry._coordinates)} onContextMenu={(e)=>console.log(e.originalEvent.target.geometry._coordinates)} />)} 
    {/* <GeoObject
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

    /> */}
 {routeclick.length && routeclick.map(el=> <Placemark geometry={el} onClick={(e)=>console.log(e.originalEvent.target.geometry._coordinates)} onContextMenu={(e)=>console.log(e.originalEvent.target.geometry._coordinates)} />)} 
   

{routeclick.length>=2 && <GeoObject
      geometry={{
        type: 'LineString',
        coordinates: routeclick,
      }}
      options={{
        geodesic: true,
        strokeWidth: 5,
        strokeColor: '#F008',
        openBalloonOnClick: true
      }}
      onClick={(e)=>console.log(e.originalEvent.target.geometry._coordPath._coordinates)}

    />  }




    </Map>
  </YMaps>
  );
}

export default MainMap;
