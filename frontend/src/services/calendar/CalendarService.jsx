import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function selectedCategory(cred){
    let response = await axios.post(`${base_url}/${cred}`);
    return response;
}


export default {selectedCategory}