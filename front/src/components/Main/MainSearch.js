import React, { useState, useEffect } from 'react';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';
import Maps from './Maps';
import { fetchFindAllJourneyAC, fetchFindQueryJourneyAC } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'


import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import OneRegionCard from './OneRegionCard'

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
  const ClickonRoute = (el) => { setClickFlagMapSearch(el) ; if(!flagMapSearch){setFlagMapSearch(true)} }
  const HandlerChanger = async (e) => {
    setFlagMapSearch(false)
    e.preventDefault();
    const { town: { value: town } } = e.target;
    let axi = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=${town}`)
    if (axi.data.response?.GeoObjectCollection.featureMember[0]?.GeoObject.Point.pos) {
      setDataFetch(axi.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '));
      dispatch(fetchFindQueryJourneyAC(axi.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')))
    } else setFlagMapSearch(true)
  };

  let stateofQuery = useSelector(state => state.fetch.fetchFindQueryJourney)
  console.log(stateofQuery);

  return (
    <Container>
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
              {stateofAll && stateofAll.map(el => <> <Placemark geometry={el.startCoords} key={el._id}
                options={{
                  iconLayout: 'default#image',
                  iconImageOffset: [-16, -38],
                  // iconImageHref: 'https://img.icons8.com/ios/452/marker-s.png' 
                  iconImageHref: el.author.file  ||  'https://img.icons8.com/ios/452/marker-s.png'

                }}

                onClick={(e) => ClickonRoute(el)} />
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
                  options={{
                    iconLayout: 'default#image',
                    iconImageOffset: [-4, -36],
                    iconImageHref: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-6f6c68f441ae243386bf21a10d3b5cea.png'
                  }}
                  onClick={(e) => {
                    ClickonRoute(el);
                  }} />

              </>
              )}
            </Map>
          </YMaps>

          {clickMapSearch && <OneRegionCard el={clickMapSearch} />}

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

              {stateofAll && stateofAll.map(el => <> <Placemark geometry={el.startCoords} key={el._id}
                options={{
                  iconLayout: 'default#image',
                  iconImageOffset: [-16, -38],
                 // iconImageHref: 'https://img.icons8.com/ios/452/marker-s.png'
                 iconImageHref: el.author.file  ||  'https://img.icons8.com/ios/452/marker-s.png'
                }}
                onClick={(e) => { ClickonRoute(el) }}
                onContextMenu={(e) => { console.log(e.originalEvent.target.geometry._coordinates); }} />
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
                  onClick={(e) => { ClickonRoute(el); }}
                />
                <Placemark geometry={el.finalCoords}
                  options={{
                    iconLayout: 'default#image',
                    iconImageOffset: [-4, -36],
                    iconImageHref: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-6f6c68f441ae243386bf21a10d3b5cea.png'
                  }}
                  onClick={(e) => {  ClickonRoute(el);  }}
                />
              </>
              )}
            </Map>
          </YMaps>

          {/* {!flagMapSearch && stateofQuery && stateofQuery.map(el => <div key={el._id}><OneRegionCard el={el} /></div>)}
          {flagMapSearch && <OneRegionCard el={clickMapSearch} />} */}

         <div className="katrin" style={{display:'flex',alignItems:'baseline'}}> {!flagMapSearch && stateofQuery && stateofQuery.map(el =>  <OneRegionCard el={el} />)}</div>
          {flagMapSearch && <OneRegionCard el={clickMapSearch} />}
        </>

      )}
    </Container>
  );
}

export default MainSearch;
