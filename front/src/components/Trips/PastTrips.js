import React from 'react';
import {useSelector} from 'react-redux'
import moment from "moment";


function PastTrips(props) {

    let trips = useSelector(state => state.tripState.trips)
    const date = moment()
    const user = useSelector(state => state.auth.user)
    if(trips){
        trips = trips.filter(el => el.participants.includes(user._id)
            && el.postedStatus === false
            && el.agreedStatus === true
            && el.cancelStatus === false
            && el.startDate < date)
    } else trips = []



    return (
        <div className="container">
            <h2>Прошедшие поездки</h2>
            {trips.length < 1 ? <h3>Кажется,у вас не было поездок!</h3> :
            trips.map((el) => (
                <div
                    style={{border: "1px black solid"}}
                    key={performance.now()}
                >
                    <p>{el.author}</p>
                    <p>Информация о поездке: {el.tripInfo}</p>
                    <p>Бюджет: {el.budget}</p>
                    <p>Начальная дата: {el.startDate}</p>
                    <p>Конечная дата: {el.endDate}</p>
                </div>
            ))}
        </div>
    );
}

export default PastTrips;
