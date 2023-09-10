/* Import Section - Start */

/* React Imports - Start */

import React from 'react';
import { Outlet } from 'react-router-dom';

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Layout = () => {

    
/* Render View Return - Start */
  return (
    <>
    <Layout/>
    <Outlet></Outlet>
    </>
  )

/* Render View Return - End */
}

/* Function - End */

/* Export default functionName */

export default Layout;