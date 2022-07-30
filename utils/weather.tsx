import type { Location } from "../data/pois";
import { weather } from '../config.json';

export const _fetchWeather = ({ latitude, longitude }: Location) => {
  const BASE_URI = 'https://api.openweathermap.org/data/3.0/onecall';
  // TODO: cache these results
  return fetch(`${BASE_URI}?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=${weather.apiKey}`)
    .then(res => {
      console.log(JSON.stringify(res));
      return res;
    });
};

export const fetchWeather = ({ latitude, longitude }: Location) => {
  const BASE_URI = 'https://api.openweathermap.org/data/2.5/weather';
  // TODO: cache these results
  return fetch(`${BASE_URI}?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&units=imperial&appid=${weather.apiKey}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return {};
    })
    .then((data) => {
      console.log(massageCurrent(data));
      return massageCurrent(data);
    });
};
type Direction = 'sw' | 's' | 'se' | 'e' | 'ne' | 'n' | 'nw' | 'w'

type Weather = {
  description: string
  humidity: number
  icon: string //"http://openweathermap.org/img/wn/02n@2x.png",
  temperature: number
  timestamp: number,
  wind: {
    direction: Direction
    gusts: number | null,
    speed: number,
  },
}

function massageCurrent(data: any): Weather | null {
  if (!data) return null;
  // console.log(data.wind)
  const timestamp = data.dt * 1000;
  const temperature = Math.round(data.main.temp);
  const humidity = data.main.humidity;
  const description = data.weather[0].main;
  const icon = iconUrl(data.weather[0].icon);
  const wind = {
    speed: Math.round(data.wind.speed),
    gusts: data.wind.gust ? Math.round(data.wind.gust) : null,
    direction: degToDir(data.wind.deg),
  };

  return { timestamp, temperature, humidity, description, icon, wind };
}

function degToDir(deg: number): Direction {
  if (deg < 22.5) {
    return 'n';
  } else if (deg < 67.5) {
    return 'ne';
  } else if (deg < 112.5) {
    return 'e';
  } else if (deg < 157.5) {
    return 'se';
  } else if (deg < 202.5) {
    return 's';
  } else if (deg < 247.5) {
    return 'sw';
  } else if (deg < 292.5) {
    return 'w';
  } else if (deg < 337.5) {
    return 'nw';
  } else {
    return 'n';
  }
}

function iconUrl(id: any) {
  return `http://openweathermap.org/img/wn/${id}@2x.png`
}