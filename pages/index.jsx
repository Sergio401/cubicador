import React from 'react'
import Style from './index.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container, Navbar, Row, Col, Image} from "react-bootstrap";

const Home = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Cubicador</Navbar.Brand>
            </Navbar>

            <div className="text-center mt-3">
                <h1> Cubicador </h1>
            </div>


            <Form className={Style.personalData}>
                <Row>
                    <Col>
                        <Form.Control placeholder="email@example.com" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Nombre Completo" />
                    </Col>
                </Row>
            </Form>

            <Container className={Style.container}>
                <Row>
                    <Col className={Style.image__house}>
                        <Image
                            src="/image_construction.png"
                            alt="Casa Construcción"
                            width={500}
                            height={400}
                        />
                    </Col>
                    <Col className={Style.form__selection}>
                        <h2> Muros Exteriores </h2>
                        <br />
                        <Form.Control as="select">
                            <option>Panel Sip PROPANEL 9cm</option>
                            <option>Panel SIP SmartPanel 9.5cm</option>
                            <option>Propanel MGO SIP 9cm</option>
                            <option>Propanel MGO SIP 17cm</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className={Style.image__house}>
                        <Image
                            src="/image_construction.png"
                            alt="Casa Construcción"
                            width={500}
                            height={400}
                        />
                    </Col>
                    <Col className={Style.form__selection}>
                        <h2> Aberturas </h2>
                        <Form.Control as="select">
                            <option>Panel Sip PROPANEL 9cm</option>
                            <option>Panel SIP SmartPanel 9.5cm</option>
                            <option>Propanel MGO SIP 9cm</option>
                            <option>Propanel MGO SIP 17cm</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className={Style.image__house}>
                        <Image
                            src="/image_construction.png"
                            alt="Casa Construcción"
                            width={500}
                            height={400}
                        />
                    </Col>
                    <Col className={Style.form__selection}>
                        <h2> Techos </h2>
                        <Form.Control as="select">
                            <option>Panel Sip PROPANEL 9cm</option>
                            <option>Panel SIP SmartPanel 9.5cm</option>
                            <option>Propanel MGO SIP 9cm</option>
                            <option>Propanel MGO SIP 17cm</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className={Style.image__house}>
                        <Image
                            src="/image_construction.png"
                            alt="Casa Construcción"
                            width={500}
                            height={400}
                        />
                    </Col>
                    <Col className={Style.form__selection}>
                        <h2> Muros Interiores </h2>
                        <Form.Control as="select">
                            <option>Panel Sip PROPANEL 9cm</option>
                            <option>Panel SIP SmartPanel 9.5cm</option>
                            <option>Propanel MGO SIP 9cm</option>
                            <option>Propanel MGO SIP 17cm</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className={Style.image__house}>
                        <Image
                            src="/image_construction.png"
                            alt="Casa Construcción"
                            width={500}
                            height={400}
                        />
                    </Col>
                    <Col className={Style.form__selection}>
                        <h2> Muros Triangulares </h2>
                        <Form.Control as="select">
                            <option>Panel Sip PROPANEL 9cm</option>
                            <option>Panel SIP SmartPanel 9.5cm</option>
                            <option>Propanel MGO SIP 9cm</option>
                            <option>Propanel MGO SIP 17cm</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className={Style.image__house}>
                        <Image
                            src="/image_construction.png"
                            alt="Casa Construcción"
                            width={500}
                            height={400}
                        />
                    </Col>
                    <Col className={Style.form__selection}>
                        <h2> Entrepisos </h2>
                        <Form.Control as="select">
                            <option>Panel Sip PROPANEL 9cm</option>
                            <option>Panel SIP SmartPanel 9.5cm</option>
                            <option>Propanel MGO SIP 9cm</option>
                            <option>Propanel MGO SIP 17cm</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home