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
            <h1 className="city">{props.data.city}</h1>
            <Container>
                <Row>
                    <Col>
                        <WeatherTemperature fahrenheit={props.data.temperature} />
                        <WeatherIcon code={props.data.icon} />
                    </Col>
                    <Col>
                        <ul>
                            <li><small>Last Updated:</small></li>
                            <li><FormattedDate date={props.data.date} /></li>
                            <li className="text-capitalize">{props.data.description}</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)} km/h</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}