import React, { useState, useEffect } from 'react';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';
import Maps from './Maps';
import { fetchFindAllJourneyAC, fetchFindQueryJourneyAC } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';




function MainSearch(props) {
  const [value, setValue] = useState('');
  const [dataFetch, setDataFetch] = useState('');
  const [flagMapSearch, setFlagMapSearch] = useState(true);

  const [clickMapSearch, setClickFlagMapSearch] = useState(false);



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFindAllJourneyAC())

  }, [])

  let stateofAll = useSelector(state => state.fetch.fetchFindAllJourney)
  console.log(stateofAll);
  const ClickonRoute = (el) => {
    console.log(el)
    setClickFlagMapSearch(el)
  }

  const HandlerChanger = (e) => {
    setFlagMapSearch(false)
    e.preventDefault();
    const { town: { value: town } } = e.target;
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=${town}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.response?.GeoObjectCollection.featureMember[0]?.GeoObject.Point.pos) {
          setDataFetch(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '));
          dispatch(fetchFindQueryJourneyAC(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')))
        } else setFlagMapSearch(true)
      });
    setDataFetch('');
  };
  let stateofQuery = useSelector(state => state.fetch.fetchFindQueryJourney)
  console.log(stateofQuery);
  return (
    <div>
      <h1>ПОИСКОВАЯ ФОРМА</h1>

      <form onSubmit={(e) => HandlerChanger(e)}>
        <div className="searchDiv">
          <input name="town" type="text" placeholder="Страна" />
          <button>найти</button>
        </div>
      </form>

      {flagMapSearch &&
        <>
          <YMaps>

            <Map
              defaultState={{
                center: [55.75, 37.57],
                zoom: 6,
              }}
              height={500}
              width={700}

              onClick={(e) => console.log(e._sourceEvent.originalEvent.coords)}
            >
              {stateofAll && stateofAll.map(el => <> <Placemark geometry={el.startCoords}
                onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)}
                onContextMenu={(e) => {
                  console.log(e.originalEvent.target.geometry._coordinates);

                }} />
                <GeoObject
                  geometry={{
                    type: 'LineString',
                    coordinates: [el.startCoords, ...el.betweenCoords, el.finalCoords],
                  }}
                  options={{
                    geodesic: true,
                    strokeWidth: 5,
                    strokeColor: '#F008',
                    openBalloonOnClick: true,
                  }}
                  onClick={(e) => {
                    console.log(e.originalEvent.target.geometry._coordPath._coordinates);
                    ClickonRoute(el)
                  }}
                />
                <Placemark geometry={el.finalCoords}
                  onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)}
                  onContextMenu={(e) => {
                    console.log(e.originalEvent.target.geometry._coordinates);

                  }} />

              </>
              )}


            </Map>

          </YMaps>

            {clickMapSearch&&  <div>{clickMapSearch.tripInfo} </div>}


        </>

      }


      {!flagMapSearch && dataFetch.length === 2 && (
        <>
          <YMaps>
            <Map
              defaultState={{
                center: [dataFetch[1], dataFetch[0]],
                zoom: 6,
              }}
              height={500}
              width={700}
              onClick={(e) => console.log(e._sourceEvent.originalEvent.coords)}
            >

              {stateofAll && stateofAll.map(el => <> <Placemark geometry={el.startCoords}
                onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)}
                onContextMenu={(e) => {
                  console.log(e.originalEvent.target.geometry._coordinates);

                }} />
                <GeoObject
                  geometry={{
                    type: 'LineString',
                    coordinates: [el.startCoords, ...el.betweenCoords, el.finalCoords],
                  }}
                  options={{
                    geodesic: true,
                    strokeWidth: 5,
                    strokeColor: '#F008',
                    openBalloonOnClick: true,
                  }}
                  onClick={(e) => console.log(e.originalEvent.target.geometry._coordPath._coordinates)}
                />
                <Placemark geometry={el.finalCoords}
                  onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)}
                  onContextMenu={(e) => {
                    console.log(e.originalEvent.target.geometry._coordinates);

                  }} />

              </>
              )}

            </Map>
          </YMaps>

          {stateofQuery && stateofQuery.map(el => <div key={el}>{el.tripInfo}</div>)}
        </>


      )}
    </div>
  );
}

export default MainSearch;
