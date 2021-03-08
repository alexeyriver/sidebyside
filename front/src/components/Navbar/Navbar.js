import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Navbar(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Container>
      <div>
        <Link to="/">Главная</Link>
      </div>

      <div>
        <Link to="/findroute">Найти Маршрут</Link>
      </div>

      <div>
        <Link to="/createtrip">Создать Маршрут</Link>
      </div>
      <div>
        <Link to="/chat">Чат</Link>
      </div>


      <div>{isAuth && <Link to="/cabinet">Личный кабинет</Link>}</div>
      <div>
        {!isAuth && (
          <Link className="link" to="/signup">
            Регистрация
          </Link>
        )}
      </div>
      <div>
        {!isAuth && (
          <Link className="link" to="/signin">
            Войти
          </Link>
        )}
        {isAuth && (
          <Link className="link" to="/logout">
            Выход
          </Link>
        )}
      </div>
    </Container>
  );
}

export default Navbar;
