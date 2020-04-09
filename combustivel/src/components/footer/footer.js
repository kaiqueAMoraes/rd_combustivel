import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import "./footer.css";

const Footer = ({ match , history}) => {
    return (
        
           
               history.location.pathname === "/dashboard" ||  
               history.location.pathname === "/user-credentials" 
               ? " "  
               : (
                    <>
            <Container className="container text-center text-md-left mt-5">
                <Row className="row mt-3 dark-grey-text">

                    <Col className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Company Origin Combustível</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <hr className="teal accent-3 mb-4 mt-0  d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p> Sao Paulo, Higienopolis, SP </p>
                        <p> origin-combustivel@gmail.com</p>
                        <p> + 55 11 4202-8223</p>
                        <p> + 55 11 2002-0022</p>
                    </Col>
                    <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Produtos</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <Link className="dark-grey-text">Gasolina</Link>
                        </p>
                        <p>
                            <Link className="dark-grey-text">Etanol </Link>
                        </p>
                        <p>
                            <Link className="dark-grey-text">Óleo</Link>
                        </p>
                        <p>
                            <Link className="dark-grey-text">Fluidos para motor</Link>
                        </p>
                    </Col>
                   
                </Row>
            </Container>
            <div className="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
                <Link className="dark-grey-text" href='https://origin.com.br'> origin.com.br</Link>
            </div>
        </>
                )
    )
}

export default withRouter(Footer);