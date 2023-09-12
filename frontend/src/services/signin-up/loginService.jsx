import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function userLogin(email,password)
{
<<<<<<< HEAD
   let response = await axios.get(`${base_url}/api/signinup/login`,
   {email:req.body.email,password:req.body.password})
=======
   let response = await axios.post(`${base_url}/api/signinUp/login`,{email:email,password:password});
  
>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab

   return response;
}

export default {userLogin};