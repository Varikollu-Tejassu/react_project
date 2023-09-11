import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userRegistration(first_name,last_name,email,dob,password)
{
   
   let response = await axios.post(`${base_url}/api/signinUp/register`,{first_name:first_name,last_name:last_name,email:email,dob:dob,password:password});
   return response;
}

export default {userRegistration};