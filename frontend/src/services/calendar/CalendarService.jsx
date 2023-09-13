import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

<<<<<<< HEAD
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
=======
async function selectedCategory(selectedCategory){
    let response = await axios.get(`${base_url}/api/calendar/${selectedCategory}`);
    return response;
}

async function getWeeklyEvent(selectedCategory){
    let response = await axios.get(`${base_url}/api/calendar/selectedEventsbyweek/${selectedCategory}`);
    return response;
}


export default {selectedCategory, getWeeklyEvent}
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
