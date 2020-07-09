import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormattedDate from "../components/FormattedDate";
import WeatherIcon from "../components/WeatherIcon";
import WeatherTemperature from "../components/WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <ul>
                <li>
                    <h1 className="city">{props.data.city}</h1>
                </li>
                <li>
                    <WeatherTemperature fahrenheit={props.data.temperature} />
                </li>
                <li>
                    <WeatherIcon code={props.data.icon} />
                </li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li><FormattedDate date={props.data.date} /></li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)} km/h</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}