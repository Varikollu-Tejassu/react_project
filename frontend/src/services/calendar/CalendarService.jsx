import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function selectedCategory(selectedCategory) {
  let response = await axios.get(
    `${base_url}/api/calendar/${selectedCategory}`
  );

  return response;
}

async function getWeeklyEvent(selectedCategory) {
  let response = await axios.get(
    `${base_url}/api/calendar/selectedEventsbyweek/${selectedCategory}`
  );

  return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { selectedCategory, getWeeklyEvent };
