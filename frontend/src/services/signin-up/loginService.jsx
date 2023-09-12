import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userLogin(email,password)
{
   let response = await axios.post(`${base_url}/api/signinUp/login`,{email:email,password:password});
  console.log(response)

   return response;
}

export default {userLogin};