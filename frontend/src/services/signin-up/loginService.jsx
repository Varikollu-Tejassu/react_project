// import axios from 'axios';

// let baseUrl = process.env.REACT_APP_API_URL;
import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userLogin(email,password)
{
   let response = await axios.get(`${base_url}/api/signinUp/login`,{email:email,password:password});
  

   return response;
}

export default {userLogin};

