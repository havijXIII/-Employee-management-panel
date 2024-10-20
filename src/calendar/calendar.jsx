import React from 'react';
import "./calendar.css"

const Calendar = () => {
    
    return (
            <div className="calendar-container">
                <div className="header-C">
                    <h3>Schedule Calendar</h3>
                    <div className="month">
                        {/* <button>a</button> */}
                        <span>May</span>
                        {/* <button>b</button> */}
                    </div>
                </div>

                <div className="days">
                    <div className="day">
                        <span className="day-label">Mon</span>
                        <span className="day-number">22</span>
                    </div>
                    <div className="day">
                        <span className="day-label">Tue</span>
                        <span className="day-number">23</span>
                    </div>
                    <div className="day active">
                        <span className="day-label">Wed</span>
                        <span className="day-number">24</span>
                    </div>
                    <div className="day">
                        <span className="day-label">Thu</span>
                        <span className="day-number">23</span>
                    </div>
                    <div className="day">
                        <span className="day-label">Fri</span>
                        <span className="day-number">23</span>
                    </div>
                </div>
            </div>
    )
};

export default Calendar;