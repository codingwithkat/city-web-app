import React, { useState } from "react";
import axios from "axios";
import "../css/Weather.css";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: "Wednesday 17:07",
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        })

    }

    if (weatherData.ready) {
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
                <ul>
                    <li>
                        <h1 className="city">{weatherData.city}</h1>
                    </li>
                    <li>
                        <div className="temp-unit"><span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°F</span></div>
                    </li>
                    <li>
                        <img src={weatherData.iconUrl} alt={weatherData.description} className="description-icon"></img>
                    </li>
                </ul>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>{weatherData.date}</li>
                                <li className="text-capitalize">{weatherData.description}</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Humidity: {weatherData.humidity}%</li>
                                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    } else {
        const apiKey = "09fda6f90b159be94949753225d9045d";
        let city = "Philadelphia";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}