import dayjs from "dayjs";
import { getDailyApi } from "./api/fetchApi";

const link = 'http://api.weatherapi.com/v1/forecast.json';

export default function (elem) {
    elem.addEventListener('click', () => {

        getDailyApi(link, 'lagos', '7').then((res) => {
            const { forecastday } = res.forecast;
            console.log(forecastday);
            for (let index = 0; index < forecastday.length; index++) {
                console.log(dayjs(forecastday[index].date).format('dddd'));
            }
        })
    });
}