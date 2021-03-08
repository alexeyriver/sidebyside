import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Navbar, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Navbars(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
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
      </Navbar>
    </Container>
  );
}

export default Navbars;
