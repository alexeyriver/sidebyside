import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { li } from './Navbar.css'
// import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'


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
    // <Container>
    // {/* <nav className="menu">
    <div className="inner">
      <ul>
        <li><a href="/">Главная</a></li>
        {/* <li><a href="/findroute">Найти Маршрут</a></li>
          <li><a href="/createtrip">Создать Маршрут</a></li> */}
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


      <ul>

        {isAuth && <Link to="/cabinet"><li>Личный кабинет</li></Link>}
        {!isAuth && <Link to="/signup"><li>Регистрация</li></Link>}
        {!isAuth && <Link to="/signin"><li>Войти</li></Link>}
        {isAuth && <Link to="/logout"><li>Выход</li></Link>}


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
    </div>
    // </nav > 
    /* </Container> */ 
  );
}

export default Navbars;
