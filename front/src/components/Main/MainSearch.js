import React, { useState, useEffect } from 'react';
import {
  YMaps, Map, GeoObject, Placemark,
} from 'react-yandex-maps';
import Maps from './Maps';

function MainSearch(props) {
  const [value, setValue] = useState('');
  const [dataFetch, setDataFetch] = useState('');

  const HandlerChanger = (e) => {
    e.preventDefault();
    const { town: { value: town } } = e.target;
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=84f3099a-6de5-4986-816c-186384023e64&format=json&geocode=${town}`)
      .then((resp) => resp.json())
      .then((data) => { if (data.response?.GeoObjectCollection.featureMember[0].GeoObject.Point.pos) { setDataFetch(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')); } });
    setDataFetch('');
  };
  console.log(dataFetch);

  // useEffect(() => {
  //   if (value.length >= 4) {
  //    //setDataFetch(data))
  //   }

  // }, [value])

  return (
    <div>
      <h1>ПОИСКОВАЯ ФОРМА</h1>

      {/* <div >
        <div className='searchDiv'>
          <input type='text' placeholder='Страна' value={value} onChange={(e) => HandlerChanger(e)}></input>

        </div>
      </div> */}

      <form onSubmit={(e) => HandlerChanger(e)}>
        <div className="searchDiv">
          <input name="town" type="text" placeholder="Страна" />
          <button>найти</button>
        </div>
      </form>

      {dataFetch.length === 2 && (
      <YMaps>
        {' '}
        <Map
          defaultState={{
            center: [dataFetch[1], dataFetch[0]],
            zoom: 6,
          }}
          height={500}
          width={700}
        // onClick={(e)=>MapHandlerClick(e._sourceEvent.originalEvent.coords)}
          onClick={(e) => console.log(e._sourceEvent.originalEvent.coords)}
        />
      </YMaps>
      )}
    </div>
  );
}

export default MainSearch;
