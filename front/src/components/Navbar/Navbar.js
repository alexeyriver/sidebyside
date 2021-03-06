import React from 'react';
import {Link} from 'react-router-dom'
function Navbar(props) {
  return (
    
    <div >
    <ul >
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/findroute">Найти Маршрут</Link>
      </li>
      <li>
        <Link to="/createjourney">Создать Маршрут</Link>
      </li>
      <li>
        <Link to="/profile">Личный кабинет</Link>
      </li>
    </ul>
    </div>
  );
}

export default Navbar;
