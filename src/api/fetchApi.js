import axios from "axios";

export async function getApi(link, location) {
// http://api.weatherapi.com/v1/current.json?key=59848614b07c4c0685d152839230205&q=lagos&aqi=yes
  
    try {
        const res = await axios.get(`${link}?key=${process.env.API_KEY}&q=${location}&aqi=yes`)
        if(res.status == 200) {
            return res.data;
        } else {
            return res.response.error;
        }
    } catch (error) {
        return 'An error occured while fetching Current API';
    }
}

