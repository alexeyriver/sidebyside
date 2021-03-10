import React from 'react';
import { useHistory } from 'react-router-dom';
// import MainMap from '../Map/MainMap'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function MainPage(props) {
  const history = useHistory();


  const findButtonHandler = (event) => {
    event.preventDefault()
    history.push('/findroute')
  }

  const createButtonHandler = (event) => {
    event.preventDefault()
    history.push('/createtrip')
  }


  return (

    // <Container>
    //   {/* <MainMap /> */}
    //   {/* <div style={{ paddingTop: '100px' }}>
    //     <button onClick={findButtonHandler} type="button" name="find">Найти маршрут</button>
    //     <button onClick={createButtonHandler} type="button" name="create">Создать маршрут</button>
    //   </div> */}
    //   <Container>

    //     <Row>
    //       <Col>
    //         <Card className="mb-3" style={{ color: "green", textAlign: "center", border: "none" }}>
    //           {/* <Card.Img src="https://picsum.photos/200/300" style={{margin: "auto", maxWidth: "600", maxHeight: "200px"}}/> */}
    //           <Card.Body>
    //             {/* <Card.Title>
    //         Title of card
    //       </Card.Title> */}
    //             <Card.Text>
    //               Если интересует путешествие с новым собеседником, нажмите кнопку ниже:
    //             </Card.Text>
    //             <Button variant='success' onClick={findButtonHandler} name="find">Найти маршрут</Button>
    //           </Card.Body>
    //         </Card>
    //       </Col>

    //       <Col>
    //         <Card className="mb-3" style={{ color: "blue", textAlign: "center", border: "none" }}>
    //           {/* <Card.Img src="https://picsum.photos/200/300" style={{margin: "auto", maxWidth: "600", maxHeight: "200px"}}/> */}
    //           <Card.Body>
    //             <Card.Text>
    //               Чтобы найти попутчика для увлекательной поездки, используйте кнопку ниже:
    //             </Card.Text>
    //             <Button onClick={createButtonHandler} name="create">Создать маршрут</Button>
    //           </Card.Body>
    //         </Card>
    //       </Col>


    //     </Row>
    //   </Container>

    // </Container>

    <ul class="actions fit">
										<li><a href="#" className="button primary fit" onClick={findButtonHandler}>Найти маршрут</a></li>
										<li><a href="#" className="button fit" onClick={createButtonHandler}>Создать маршрут</a></li>

									</ul>
  );
}

export default MainPage;
