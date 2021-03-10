import React, { useState } from 'react';
import moment from 'moment'
import ModalUserProfile from './ModalSearch/ModalUserProfile'
import ModalRequest from './ModalSearch/ModalRequest'

import { useDispatch, useSelector } from "react-redux"
import { fetchModalUserInfoAC } from '../../redux/actions'

function OneRegionCard({ el }) {
  const dispatch = useDispatch()
  let [modalclick, setModalclick] = useState(false)
  let [modalprops, setModalprops] = useState()
  let [modalclickRequest, setModalclickRequest] = useState(false)
  let Handleclicker = id => {
    dispatch(fetchModalUserInfoAC(id))
    setModalclick(modalclick = true)
    if (1) { setModalprops((modalprops) => modalprops = id) }
    else setModalprops(modalprops = 3)
  }

  let ButtonHandler = id => {
    console.log(id);

    setModalclickRequest(modalclickRequest = true)
    setModalprops((modalprops) => modalprops = id)

  }

  return (
    <>
      { modalclick && <ModalUserProfile props={modalprops} isOpened={true}
        onModalClose={() => setModalclick(modalclick = false)}
      />}
      <div key={el._id} style={{ border: '10px solid red', borderRadius: '10%', maxWidth: '700px', margin: '20px' }}>
        {/* <div><img src={el.autor.file}></img></div> */}
        <div onClick={() => Handleclicker(el.author._id)} >Имя автора: {el.author.name}</div>
        <div>Начальная дата: {moment(el.startDate).format("DD.MM.YYYY")}</div>
        <div>Конечная дата: {moment(el.endDate).format("DD.MM.YYYY")}</div>
        <div>Бюджет рассчитаннный автором : {el.budget}</div>
        <div>Информация о мршруте: {el.tripInfo}</div>
        <div>Количество участников: {el.participants.length > 1 ? el.participants.length : 'Пока не откликнулись,успейте присоединиться первым!'}</div>
        <button onClick={() => ButtonHandler(el.author._id)}>Связаться с автором</button>
      </div>
      { modalclickRequest && <ModalRequest props={modalprops} isOpened={true}
        onModalClose={() => setModalclickRequest(modalclick = false)}
      />}
    </>
  );
}

export default OneRegionCard;
