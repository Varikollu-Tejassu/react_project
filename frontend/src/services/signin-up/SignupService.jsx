import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userRegistration(first_name,last_name,email,dob,password)
{
   
<<<<<<< HEAD
  
   let response = await axios.post(`${base_url}/api/signinUp/register`,{first_name:first_name,last_name:last_name,email:email,dob:dob,password:password});
   console.log(response)
=======
   let response = await axios.post(`${base_url}/api/signinUp/register`,{first_name:first_name,last_name:last_name,email:email,dob:dob,password:password});
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
   return response;
}

export default {userRegistration};