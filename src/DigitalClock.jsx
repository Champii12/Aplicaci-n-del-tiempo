import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [tiempo, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const Formato = (tiempo) => {
        const horas = String(tiempo.getHours()).padStart(2, '0');
        const minutos = String(tiempo.getMinutes()).padStart(2, '0');
        const segundos = String(tiempo.getSeconds()).padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
    }

    return (
        <div className='digital-clock'>
            {Formato(tiempo)}
        </div>
    );
}
export default DigitalClock;