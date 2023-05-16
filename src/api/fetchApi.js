import axios from "axios";

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

