import axios from "axios";

<<<<<<< HEAD
let base_url = proess.env.REACT_APP_API_URL;

async function userRegistration(user_cred)
{
   let response = await axios.post(`${base_url}/api/signinup/register`);
=======
let base_url = process.env.REACT_APP_API_URL;

async function userRegistration(first_name,last_name,email,dob,password)
{
   
   let response = await axios.post(`${base_url}/api/signinUp/register`,{first_name:first_name,last_name:last_name,email:email,dob:dob,password:password});
>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab
   return response;
}

export default {userRegistration};