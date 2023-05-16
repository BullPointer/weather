import axios from "axios";

// http://api.weatherapi.com/v1/current.json?key=59848614b07c4c0685d152839230205&q=lagos&aqi=yes
// http://api.weatherapi.com/v1/forecast.json?key=59848614b07c4c0685d152839230205&q=lagos&days=7

export async function getApi(link, location) {
    const res = await axios.get(`${link}?key=${process.env.API_KEY}&q=${location}&aqi=yes`)
    if(res.status == 200) return res;
    return res.response;
}

export async function getDailyApi(link, location, days) {
    const res = await axios.get(`${link}?key=${process.env.API_KEY}&q=${location}&days=${days}`)
    if(res.status == 200) return res;
    return res.response;
}

