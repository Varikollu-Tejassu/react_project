/* Import Section - Start */

/* React Imports - Start */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/jmanLogo.png";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  /* Render View Return - Start */
  return (
    <div>
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        <div className="menu-button" onClick={toggleSidebar}>
          {showSidebar ? (
            <div className="sidebar-close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-menu-top">
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
<<<<<<< HEAD
                to="/dashboard/projectallocation"
=======
                to="/dashboard/resourceallocation"
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
              >
                Project Allocation
              </Link>
            </li>
            {/* {userdata && userdata.userType === "admin" ? ( */}
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
<<<<<<< HEAD
                to="/dashboard/manageevents"
              >
                Manage Event
=======
                to="/dashboard/addevent"
              >
                Add Event
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
              </Link>
            </li>
            {/* ) : null} */}
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard/profile"
              >
                Profile
              </Link>
            </li>
          </ul>
          <div className="sidebar-logout">
            {/* <div>{userdata.Fname}</div> &nbsp;
              <div style={{}} onClick={logout}>
                <button onClick={logout}>
                  <i
                    className="fa-solid fa-arrow-right-from-bracket"
                    style={{ color: "#0f1724" }}
                  ></i>
                </button>
              </div> */}
            <div>Name</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* Render View Return - End */
};
<<<<<<< HEAD
/* Render View Return - End */
=======
  /* Render View Return - End */
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e

/* Function - End */

/* Export default functionName */
export default Sidebar;
