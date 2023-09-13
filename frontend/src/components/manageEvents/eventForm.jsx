import React, { useState, useEffect } from "react";
import axios from "axios";
import "../manageEvents/manageEvents.css";
import { useNavigate } from "react-router-dom";

const AddEvent = ({ onEditEvent, event, onCancel }) => {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (event) {
      setEventName(event.eventName);
      setEventType(event.eventType);
      setStartDate(event.startDate);
      setEndDate(event.endDate);
      setStartTime(event.startTime);
      setEndTime(event.endTime);
      setDescription(event.description);
    }
  }, [event]);

  const handleAddEvent = () => {
    const newEvent = {
      eventName,
      eventType,
      startDate,
      endDate,
      startTime,
      endTime,
      description,
    };

    axios
      .post("http://localhost:4000/api/events", newEvent)
      .then((response) => {
        console.log("Event added successfully!");
        navigate("/events");
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  const handleEditEvent = () => {
    const updatedEvent = {
      id: event.id,
      eventName,
      eventType,
      startDate,
      endDate,
      startTime,
      endTime,
      description,
    };

    axios
      .put(`http://localhost:4000/api/events/${event.id}`, updatedEvent)
      .then((response) => {
        console.log("Event edited successfully!");
        onEditEvent(updatedEvent);
        onCancel();
      })
      .catch((error) => {
        console.error("Error editing event:", error);
      });
  };

  const closeModal = () => {
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="event-form-container">
          <button className="close" onClick={closeModal}>
            <span>&times;</span>
          </button>
          <p>Add Event</p>

          <div className="add-event-input-area">
            <div className="add-event-name-data">
              <div className="form-name">
                <label>Event Name:</label>
                <input
                  className="form-input"
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className="form-type">
                <label>Event Type:</label>
                <select
                  className="form-input"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="Official">Official</option>
                  <option value="Non-Official">Non-Official</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="dates">
              <div className="start-date">
                <label>Start Date:</label>
                <input
                  className="form-date"
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="end-date">
                <label>End Date:</label>
                <input
                  className="form-date"
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className="time">
              <div className="start-time">
                <label>Start Time:</label>
                <input
                  className="form-time"
                  type="time"
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className="end-time">
                <label>End Time:</label>
                <input
                  className="form-time"
                  type="time"
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-desc">
              <label>Description:</label>
              <textarea
                className="form-des"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button
            className="form-button"
            onClick={event ? handleEditEvent : handleAddEvent}
          >
            {event ? "Update Event" : "Add Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
