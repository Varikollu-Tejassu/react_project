import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function fetchData() {
  let response = await axios.get(
    `${base_url}/api/projectAllocation/getproject`
  );

  return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {fetchData};