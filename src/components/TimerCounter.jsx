"use client";
import React, { useState, useEffect } from 'react';

const TimerCounter = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const newYears = 'Jan 01 2028 00:00:00';

  useEffect(() => {
    const countdown = () => {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();

      const totalSeconds = (newYearsDate - currentDate) / 1000;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor((totalSeconds / 3600) % 24);
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const seconds = Math.floor(totalSeconds % 60);

      
      setDays(formatTime(days));
      setHours(formatTime(hours));
      setMinutes(formatTime(minutes));
      setSeconds(formatTime(seconds));
    };

    const formatTime = (time) => {
      return time < 10 ? `0${time}` : `${time}`;
    };

    const interval = setInterval(countdown, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="upcoming-timer">
      <div className="coundown-container d-flex align-items-center">
        <div className="countdown-el days-container">
          <h6 className="big-text" id="days">{days}</h6>
          <span>Days</span>
        </div>

        <div className="countdown-el hours-container">
          <h6 className="big-text" id="hours">{hours}</h6>
          <span>Hours</span>
        </div>

        <div className="countdown-el minutes-container">
          <h6 className="big-text" id="minutes">{minutes}</h6>
          <span>Minutes</span>
        </div>

        <div className="countdown-el seconds-container">
          <h6 className="big-text" id="seconds">{seconds}</h6>
          <span>Sec</span>
        </div>
      </div>
    </div>
  );
};

export default TimerCounter;
