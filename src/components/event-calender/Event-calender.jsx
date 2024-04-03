import React, { useState, useEffect } from 'react';
import '../event-calender/Event-calender.css';

const Event = ({ event }) => {
    return (
        <div className="event floating">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">Date: {event.date}</p>
            <p className="event-description">{event.description}</p>
        </div>
    );
};

const EventCalendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    console.log('Events data:', data);
                    setEvents(data);
                } else {
                    console.log('No events data available');
                }
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div className="event-calendar">
            <h2>Event Calendar</h2>
            {events.map(event => (
                <Event key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventCalendar;
