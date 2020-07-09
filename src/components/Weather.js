import React, { useState } from "react";
import "../css/Weather.css";
import WeatherInfo from "../components/WeatherInfo";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }

    function search() {
        const apiKey = "09fda6f90b159be94949753225d9045d";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <Container>
                    <Row className="search-bar">
                        <Col xs={9} sm={9} lg={9}>
                            <form onSubmit={handleSubmit}>
                                <input type="search"
                                    placeholder="City.."
                                    className="form-control"
                                    onChange={handleCityChange} />
                            </form>
                        </Col>
                        <Col xs={3} sm={3} lg={3}>
                            <form>
                                <input type="submit" value="Search" className="btn btn-primary" />
                            </form>
                        </Col>
                    </Row>
                </Container>
                <WeatherInfo data={weatherData} />
            </div >
        );
    } else {
        search();
        return "Loading...";
    }
}