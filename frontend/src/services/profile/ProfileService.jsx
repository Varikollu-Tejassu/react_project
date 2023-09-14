import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function getProfileData(empEmail) {
  let response = await axios.get(
    `${base_url}/api/profile/profiledata/${empEmail}`
  );

  return response;
}

async function getLoginData(empEmail) {
    let response = await axios.get(
        `${base_url}/api/signinUp/logindata/${empEmail}`
    );
    return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getProfileData, getLoginData};