import React from 'react';
import moment from 'moment'

function OneRegionCard({el}) {
  console.log(el);

  // console.log(el.author);
  return (
    <>
    <div key={el._id} style={{border:'10px solid red',borderRadius:'10%',maxWidth:'700px',margin:'20px'}}>
      {/* <div><img src={el.autor.file}></img></div> */}
    <div>Имя автора: {el.author.name}</div>
    <div>Начальная дата: {moment(el.startDate).format("DD.MM.YYYY")}</div>
     <div>Конечная дата: {moment(el.endDate).format("DD.MM.YYYY")}</div>
    <div>Бюджет рассчитаннный автором : {el.budget}</div>
    <div>Информация о маршруте: {el.tripInfo}</div>
    <div>Количество участников: {el.participants.length > 1 ? el.participants.length : 'Пока не откликнулись,успейте присоединиться первым!'}</div>
   <button>Связаться с автором</button>
    </div>
     </>
  );
}

export default OneRegionCard;
