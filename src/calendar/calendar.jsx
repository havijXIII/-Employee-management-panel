import React, { useEffect, useState } from 'react';
import "./calendar.css"

const Calendar = () => {

    const [month, setmonth] = useState(new Date().getDate());
    const [time, settime] = useState(new Date().getHours());
    const [minute, setminute] = useState(new Date().getMinutes());
    const [second, setsecond] = useState(new Date().getSeconds());


    const handlenew = () => {
        setmonth(new Date().getDate());
        settime(new Date().getHours());
        setminute(new Date().getMinutes());
        setsecond(new Date().getSeconds())
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            handlenew();  // Call your function here
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="calendar-container">
            <div className="header-C">
                <h3>{month}th</h3>
                <h3>{time < 12 ? `0${time}` : time - 12}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}</h3>
                <h3>{time > 12 ? "pm" : "am"}</h3>
            </div>
        </div>
    )
};

export default Calendar;