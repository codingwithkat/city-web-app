import React from "react";
import "../css/Weather.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";

export default function Weather() {
    return (
        <div className="Weather">
            <Container>
                <Row className="search-bar">
                    <Col xs={9} sm={9} lg={9}>
                        <form>
                            <input type="search"
                                placeholder="City.."
                                className="form-control" />
                        </form>
                    </Col>
                    <Col xs={3} sm={3} lg={3}>
                        <form>
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </form>
                    </Col>
                </Row>
            </Container>
            <h1 className="city">Philadelphia</h1>
            <Container>
                <Row>
                    <Col className="temperature">88°F</Col>
                </Row>
                <Row>
                    <Col><img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather-descriptio" className="description-icon"></img></Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li>Wednesday 14:03</li>
                            <li>Partly Cloudy</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Humidity: 73%</li>
                            <li>Wind: 15 km/h</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}