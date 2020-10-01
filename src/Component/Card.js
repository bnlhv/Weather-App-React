import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardUI({ place, photo, apiBase, apiKey }) {

      const [weather, setWeather] = useState({});

      useEffect( () => {
        fetch(`${apiBase}weather?q=${place}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWeather(data);
        });    
      }, [place])

    return (
        <>
            {(typeof weather.main != 'undefined') ? (
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title>{weather.name}, {weather.sys.country}</Card.Title>
                            <div on className="row align-items-center justify-content-left" style={{marginLeft: '-px'}}>
                                <span className="col-12">{Math.round(weather.main.temp)}°C, {weather.weather[0].description}</span>
                            </div>
                            <div>
                                <span className="col-6 btn-span"><Button className="btn" variant="primary" style={{marginLeft: "-15px"}}>See More</Button></span>
                                <span className="col-sm-6 pull-right"><img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.name} pic`} /></span>
                            </div>
                    </Card.Body>
                </Card>
            ) : ('')
            }
            
        </>
    )
}


