/* Import Section - Start */

import React, { useEffect, useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Calendar = () => {
  const [eventdata, setEventdata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    console.log("OBJ->", selectedCategory);

    axios
      .get(`http://localhost:8080/eventdata/${selectedCategory}`)
      .then((response) => {
        setEventdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedCategory]);

  //  For DropDown
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };

  /* Render View Return - Start */

  return (
    <div className="calendar-area">
      <div className="calendar-table">
        <div className="dashboard-header">Events</div>
        {isLoading ? ( // Display loading indicator while fetching data
          <ClipLoader color={"black"} size={50} />
        ) : (
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={eventdata.map((item) => ({
              title: item.title,
              allday:
                item.starttime.split("T")[1].split(".")[0] ===
                item.endtime.split("T")[1].split(".")[0]
                  ? true
                  : false,
              start:
                item.starttime.split("T")[1] === item.endtime.split("T")[1]
                  ? item.startdate
                  : item.startdate.concat(
                      "T".concat(item.starttime.split("T")[1].split(".")[0])
                    ),
              // Festival:#2596be
              // Bithday: 'purple'
              // Meetings: #ca4f89
              // others: #242464
              // Holiday: red
              // start:item.startdate,
              end: item.enddate,
              backgroundColor:
                item.eventtype === "Birthday"
                  ? "purple"
                  : item.eventtype === "Meeting"
                  ? "#ca4f89"
                  : item.eventtype === "Holiday"
                  ? "red"
                  : item.eventtype === "Festival"
                  ? "#2596be"
                  : "#242464",
            }))}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today prev,next", // will normally be on the left. if RTL, will be on the right
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
            }}
            height={"90vh"}
          />
        )}
      </div>
      {isLoading ? ( // Display loading indicator while fetching data
        ""
      ) : (
        <div className="calendar-dropdown-area">
          {isLoading ? ( // Display loading indicator while fetching data
            <></>
          ) : (
            <div className="calendar-dropdownFilter">
              <select
                id="category"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="All">ALL</option>
                <option value="Holiday">Holiday</option>
                <option value="Event">Event</option>
                <option value="Birthday">Birthday</option>
                <option value="Festival">Festival</option>
                <option value="Others">Others</option>
              </select>
              <i className="fa-solid fa-filter"></i>
            </div>
          )}

          <div className="calendar-dropdown-details">
            <p className="calendar-dropdown-details-header">Upcoming Events</p>
          </div>

          <div className="calendar-event-area">
            <p className="calendar-event-area-header">Events Details</p>
          </div>
        </div>
      )}
    </div>
  );

  /* Render View Return - End */
};

/* Function - End */

/* Export default functionName */

export default Calendar;
