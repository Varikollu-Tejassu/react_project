import axios from "axios";

let base_url = proess.env.REACT_APP_API_URL;

async function userRegistration(user_cred)
{
   let response = await axios.post(`${base_url}/api/signinup/register`);
   return response;
}

export default {userRegistration};