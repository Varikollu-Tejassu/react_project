/* eslint-disable array-callback-return */
/* Import Section - Start */

/* React Imports - Start */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Profileservice from "../../services/profile/ProfileService";
/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Profile = () => {
  const [empEmail, setEmpEmail] = useState("gokul@gmail.com");
  const [firstLetter, setFirstLetter] = useState("");
  const [ldata, setLdata] = useState([]);
  const [loginData, setLoginData] = useState([]);
  const [change, setChange] = useState(false);
  const [editEnabled, setEditEnabled] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getprofile = () => {
    Profileservice.getProfileData(empEmail)
      .then((res) => {
        setLdata(res.data);
        console.log(res.data);
        setTempData(res.data);
        setFirstLetter(res.data.first_name.charAt(0));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getprofile();
    getLogin();
  }, []);

  const getLogin = () => {
    Profileservice.getLoginData(empEmail)
    .then((res) => {
      setLoginData(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  /* Render View Return - Start */
  return (
    <>
     

      <div className='profile-container'>
                <div className='profile-details-container'>
                    <p className='profile-details-header'>Profile Info :)</p>
                    <div className='profile-details-innerdiv'>
                        <label><strong>Employee Id</strong></label>
                        {!editEnabled &&
                            <span>{ldata.emp_id}</span>
                        }
                        {editEnabled &&
                            <input type="text"  value={tempData.empid} onChange={(e) => {
                                setTempData({...tempData,empid:e.currentTarget.value})
                            }}/>
                        }
                    </div>
                    <div className='profile-details-innerdiv'>
                        <label><strong>Email</strong></label>
                        {!editEnabled &&
                            <span>{ldata.email}</span>
                        }
                        {editEnabled &&
                            <input type="text" value={tempData.email} disabled/>
                        }
                    </div>
            
                    <div className='profile-details-innerdiv'>
                        <label><strong>Date of Birth</strong></label>
                        {!editEnabled &&
                            <span>{loginData.dob}</span>
                        }
                        {editEnabled &&
                            <input type="text"  value={loginData.dob} onChange={(e) => {
                                setTempData({...tempData,dob:e.currentTarget.value})
                            }}/>
                        }
                    </div>
                    <div className='profile-details-innerdiv'>
                        <label><strong>Date of Joining</strong></label>
                        {!editEnabled &&
                            <span>{ldata.joining_date}</span>
                        }
                        {editEnabled &&
                            <input type="text"  value={tempData.joining_date} onChange={(e) => {
                                setTempData({...tempData,doj:e.currentTarget.value})
                            }}/>
                        }
                    </div>
                    <div className='profile-details-innerdiv'>
                        <label><strong>Work Location</strong></label>
                        {!editEnabled &&
                            <span>{ldata.work_location}</span>
                        }
                        {editEnabled &&
                            <input type="text"  value={tempData.worklocation} onChange={(e) => {
                                setTempData({...tempData,worklocation:e.currentTarget.value})
                            }}/>
                        }
                    </div>
                   
                </div>
                <div className='profile-pic-container'>
                    {ldata.profileimage &&
                        <img className='profile-pic' src={ldata.profileimage}></img>
                    }
                    {!ldata.profileimage &&
                        <p className='profile-pic'>{firstLetter}</p>
                    }
                    <div className='profile-person-name'>
                        {!editEnabled &&
                            <h2 className='profile-pic-letter'>{ldata.first_name}</h2>
                        }
                        {editEnabled &&
                            <input type="text" className='firstNameInput' value={tempData.first_name} onChange={(e) => {
                                setTempData({...tempData,firstname:e.currentTarget.value})
                            }}/>
                        }
                        &nbsp;&nbsp;
                        {!editEnabled &&
                            <h2>{ldata.last_name}</h2>
                        }
                        {editEnabled &&
                            <input type="text" className='lastNameInput'  value={tempData.last_name} onChange={(e) => {
                                setTempData({...tempData,lastname:e.currentTarget.value})
                            }}/>
                        }
                    </div>
                    <p className='profile-person-designation'>
                        {!editEnabled &&
                            <h2>{ldata.designation}</h2>
                        }
                        {editEnabled &&
                            <input type="text"  value={tempData.designation} onChange={(e) => {
                                setTempData({...tempData,designation:e.currentTarget.value})
                            }}/>
                        }
                    </p>
                    <div className='edit-btn'>
                    {/* <button className='btn editBtn'
                        onClick={
                            ()=>{
                                setEditEnabled(!editEnabled);
                                setShowSaveBtn(!showSaveBtn);
                                if(editEnabled === true){
                                    console.log("edit true..")
                                    setTempData(ldata);
                                }
                            }
                        }
                    >{editEnabled === true ? 'Cancel' : 'Edit'}</button>
                    {showSaveBtn &&
                        <button className='btn saveBtn'
                            onClick={
                                ()=>{
                                    axios.put(`http://localhost:4000/profile/${empEmail}?`,{ldata : tempData})
                                    .then(()=>
                                    {
                                        setEditEnabled(false);
                                        setShowSaveBtn(false);
                                        // setData(tempData);
                                        // setChange(!change)
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                                }
                            }
                        >Save</button> */}
                 
                    </div>
                </div>
            </div>
    </>
  );
};
/* Render View Return - End */

/* Function - End */

/* Export default functionName */
export default Profile;
