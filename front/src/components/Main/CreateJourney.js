import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"
import {fetchFromCityToCoordsAC} from '../../redux/actions'




function CreateJourney(props) {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFromCityToCoordsAC())
  }, []);

   const data = useSelector(state => state.fetch.fetch)
   console.log(data);

  return (
    <div>
      <h1>Тут можно создать путешествие</h1>
    </div>
  );
}

export default CreateJourney;
