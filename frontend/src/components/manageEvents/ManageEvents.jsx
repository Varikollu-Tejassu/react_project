/* Import Section - Start */

/* React Imports - Start */

import React, { useState, useEffect } from "react";
import "../manageEvents/manageEvents.css";
import { useNavigate } from "react-router-dom";
import { FaPen, FaTrash, FaSearch } from "react-icons/fa";
import EventForm from "../manageEvents/eventForm";
import manageeventservice from "../../services/manageEvents/ManageEventsService";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const ManageEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [sortItem, setSortItem] = useState({ key: "", direction: "" });
  const [events, setEvents] = useState([]);

  const getevents = () => {
    console.log("sending req from me");
    manageeventservice.getManageEvent().then((response) => {
      setEvents(response.data);
      console.log("ED", response.data);
    });
  };

  useEffect(() => {
    getevents();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    openModal();
  };

  const handleEditEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    closeModal();
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  const requestSort = (key) => {
    let direction = "ascending";

    if (sortItem.key === key && sortItem.direction === "ascending") {
      direction = "descending";
    }

    setSortItem({ key, direction });
  };

  const sortedData = events
    .filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortItem.key === "") return 0;

      const aValue = a[sortItem.key];

      const bValue = b[sortItem.key];

      if (aValue < bValue) {
        return sortItem.direction === "ascending" ? -1 : 1;
      }

      if (aValue > bValue) {
        return sortItem.direction === "ascending" ? 1 : -1;
      }

      return 0;
    });

  /* Render View Return - Start */

  return (
    <>
      <div className="manageEvent-page">
        <h1>Manage Event</h1>
        <div className="add-event-btn">
          <button className="ad-ev-btn" onClick={openModal}>
            + Add Event
          </button>
          {isModalOpen && (
            <EventForm
              onEditEvent={handleEditEvent}
              event={selectedEvent}
              onCancel={closeModal}
            />
          )}
        </div>
        <div>
          <div className="search">
            {/* <button onClick={toggleSearch}>
            </button> */}

            <input
              type="text"
              placeholder="Search events"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <table className="events-table">
            <thead>
              <tr>
                <th onClick={() => requestSort("event_type")}>
                  Event_Type
                  {sortItem.key === "event_type" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("title")}>
                  Title
                  {sortItem.key === "project_name" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("start_date")}>
                  Start_Date
                  {sortItem.key === "start_date" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("end_date")}>
                  End_Date
                  {sortItem.key === "end_date" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("start_time")}>
                  Start_Time
                  {sortItem.key === "start_time" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("end_time")}>
                  End_Time
                  {sortItem.key === "end_time" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("is_allday")}>
                  Full_Day
                  {sortItem.key === "end_time" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("other_details")}>
                  Other_Details
                  {sortItem.key === " other_details" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((event) => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.event_type}</td>
                  <td>{event.start_date}</td>
                  <td>{event.end_date}</td>
                  <td>{event.start_time}</td>
                  <td>{event.end_time}</td>
                  <td>{(event.is_allday)===true?"Y":"N"}</td>
                  <td>{event.other_details}</td>
                  <td className="edit-btn">
                    <button
                      className="btnnn"
                      onClick={() => handleEditClick(event)}
                    >
                      <FaPen />
                    </button>
                  </td>
                  <td className="edit-btn">
                    <button
                      className="dlte-btnnn"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  /* Render View Return - End */
};

/* Function - End */

/* Export default functionName; */

export default ManageEvents;
