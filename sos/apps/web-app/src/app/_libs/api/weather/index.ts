import axios from 'axios';
import { WeatherResponse } from '@/app/_types';

export interface WeatherData {
  temp: number;
  maxTemp: number;
  minTemp: number;
  icon: string;
  windSpeed: number;
}

export const fetchWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    const res = await axios.get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
    );

    // const weatherId = res.data.weather[0].id;
    // const weatherKo = weatherDescKo[weatherId];
    const weatherIcon = res.data.weather[0].icon;
    const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    const temp = Math.round(res.data.main.temp);
    const maxTemp = Math.round(res.data.main.temp_max);
    const minTemp = Math.round(res.data.main.temp_min);
    const windSpeed = res.data.wind.speed;

    return {
      temp,
      maxTemp,
      minTemp,
      icon: weatherIconAdrs,
      windSpeed,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
