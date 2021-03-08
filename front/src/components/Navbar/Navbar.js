import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Navbars(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Nav className="mr-auto">

          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/findroute">Найти Маршрут</Nav.Link>
          <Nav.Link href="/createtrip">Создать Маршрут</Nav.Link>

          {/* <div>
            <Link to="/">Главная</Link>
          </div> */}

          {/* <div>
            <Link to="/findroute">Найти Маршрут</Link>
          </div>

          <div>
            <Link to="/createtrip">Создать Маршрут</Link>
          </div> */}
        </Nav>

        <Nav>
          {isAuth && <Nav.Link href="/cabinet">Личный кабинет</Nav.Link>}
          {!isAuth && <Nav.Link href="/signup">Регистрация</Nav.Link>}
          {!isAuth && <Nav.Link href="/signin">Войти</Nav.Link>}
          {isAuth && <Nav.Link href="/logout">Выход</Nav.Link>}


            {/* {isAuth && <Link to="/cabinet">Личный кабинет</Link>}

          <div>
            {isAuth && <Link to="/cabinet">Личный кабинет</Link>}
          </div> */}
          {/* <div>
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
          </div> */}
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Navbars;
