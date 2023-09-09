/* Import Section - Start */

/* React Imports - Start */

import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/jmanLogo.png";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Sidebar = () => {
  /* Render View Return - Start */
  return (
    <div>
      <div className="sidebar">
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
                to="/dashboard/resourceallocation"
              >
                Resource Allocation
              </Link>
            </li>
            {/* {userdata && userdata.userType === "admin" ? ( */}
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard/addevent"
              >
                Add Event
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

/* Function - End */

/* Export default functionName */
export default Sidebar;
  