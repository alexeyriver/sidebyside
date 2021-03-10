import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function Navbars(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    // <!-- Nav -->
    // <nav id="nav">
    //   <ul class="links">
    //     <li class="active"><a href="index.html">This is Massively</a></li>
    //     <li><a href="generic.html">Generic Page</a></li>
    //     <li><a href="elements.html">Elements Reference</a></li>
    //   </ul>
    //   <ul class="icons">
    //     <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
    //     <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
    //     <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
    //     <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
    //   </ul>
    // </nav>
    <div className="container">
      <div id="wrapper" className="fade-in">
        <nav id="nav2" collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
          <ul class="links">

            <li class="active"><a href="/">Главная</a></li>
            <li><a href="/findroute">Найти Маршрут</a></li>
            <li><a href="/createtrip">Создать Маршрут</a></li>
            {/* <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/findroute">Найти Маршрут</Nav.Link>
          <Nav.Link href="/createtrip">Создать Маршрут</Nav.Link> */}

            {/* <div>
            <Link to="/">Главная</Link>
          </div> */}

            {/* <div>
            <Link to="/findroute">Найти Маршрут</Link>
          </div>

          <div>
            <Link to="/createtrip">Создать Маршрут</Link>
          </div> */}
          </ul>


          <ul class="icons">

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
          </ul>
        </nav>
      </div>
    </div>

  );
}

export default Navbars;
