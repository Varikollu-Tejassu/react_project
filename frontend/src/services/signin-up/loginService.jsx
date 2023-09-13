import axios from "axios";

<<<<<<< HEAD
=======
// let baseUrl = process.env.REACT_APP_API_URL;
import axios from "axios";

>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
let base_url = process.env.REACT_APP_API_URL;

async function userLogin(email,password)
{
   let response = await axios.post(`${base_url}/api/signinUp/login`,{email:email,password:password});
<<<<<<< HEAD
  console.log(response)
=======
  
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e

   return response;
}

<<<<<<< HEAD
export default {userLogin};
=======
export default {userLogin};

>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
