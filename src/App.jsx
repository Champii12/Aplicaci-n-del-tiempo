import React, { useState, useEffect } from 'react';
import DigitalClock from './DigitalClock';
import axios from 'axios';
import './App.css';

const App = () => {
    // esta const es para ver la temperatura
    const [temperatura, setTemperatura] = useState(null);
    // esta const es para ver la ciudad
    const [ciudad, setCiudad] = useState('');
    // esta const es para introducir la ciudad en el input
    const [inputCiudad, setInputCiudad] = useState('Madrid');
    // esta const es para ver si está soleado, nublado, etc
    const [tiempo, setTiempo] = useState('');

    // esta función es para obtener la temperatura de la ciudad a través de la API
    const obtenerClima = (city) => {
        const apiKey = "e08cab02ae23487fbc8164255250802";
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

        axios.get(url)
            .then(response => {
                setTemperatura(response.data.current.temp_c);
                setCiudad(response.data.location.name);
                setTiempo(response.data.current.condition.text);
            })
            .catch(error => {
                console.error(error);
            });
    };


    // esta función es para que al cargar la página, se muestre la temperatura de la ciudad por defecto
    useEffect(() => {
        obtenerClima(inputCiudad);
    }, []);
    // esta función es para que al hacer click
    const handleSearch = () => {
        obtenerClima(inputCiudad);
    };

    const getWeather = (condition) => {
        switch (condition.toLowerCase()) {
            case 'sunny':
                return '☀️';
            case 'cloudy':
                return '☁️';
            case 'rainy':
                return '🌧️';
            case 'stormy':
                return '⛈️';
            case 'snow':
            case 'snowy':
                return '❄️';
            default:
                return '🌤️';
        }
    };

    return (
        <div className='App'>
            <h2>Reloj digital</h2>
            <DigitalClock />
            <div>
                <input className='inputCiudad'
                    type='text' 
                    value={inputCiudad} 
                    onChange={e => setInputCiudad(e.target.value)}
                    placeholder='Introduzca una ciudad'
                />
                <button className='botonCambio' onClick={handleSearch}>Obtener clima</button>
            </div>
            <p>Ciudad: {ciudad}</p>
            {temperatura !== null ? <p>Temperatura: {temperatura}ºC</p> : <p>Ciudad no encontrada</p>}
            {tiempo && <p> Tiempo: {getWeather(tiempo)}</p>}
        </div>
    );
}

export default App;