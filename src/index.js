import './iced-water.jpg';
import './main.css';
import render from '../interface';

render();

const key = '4641011f258f0906246323fdd8f36a20';

const searchform = document.querySelector('.search-location');
const cityvalue = document.querySelector('.search-location input');
const cityname = document.querySelector('.city-name p');
const cardtopimage = document.querySelector('.card-top img');
const cardshow = document.querySelector('.back-card');
const tempspan = document.querySelector('.span2');
const tempspan2 = document.querySelector('.fah');
const weatherinfo = document.querySelector('.weatherinfo');
const condition = document.querySelector('.condition');
const high = document.querySelector('.high');
const low = document.querySelector('.low');
const time = document.querySelector('.sunset');
const feelsLike = document.querySelector('.feelslike');
const humidity = document.querySelector('.humid');


const celciusconvert = (kelvin) => {
  const celcius = Math.round(kelvin - 273.15);
  return celcius;
};

const fahconvert = (kelvin) => {
  const celcius = Math.round(kelvin / 3.7);
  return celcius;
};

const requestcity = async (city) => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${key}`;

  const response = await fetch(baseUrl + query);

  const data = await response.json();
  return data;
};

tempspan.addEventListener('click', (e) => {
  e.preventDefault();
  tempspan.classList.add('d-none');
  tempspan2.classList.remove('d-none');
});

tempspan2.addEventListener('click', (e) => {
  e.preventDefault();
  tempspan2.classList.add('d-none');
  tempspan.classList.remove('d-none');
});

function updateapp(city) {
  const iconname = city.weather[0].icon;
  const unixTimeStamp = city.sys.sunrise;
  const date = new Date(1000 * unixTimeStamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const format = `${hours}:${minutes}`;
  const weathericon = `http://openweathermap.org/img/wn/${iconname}@2x.png`;
  weatherinfo.setAttribute('src', weathericon);
  cityname.innerHTML = city.name;
  cardshow.classList.remove('d-none');
  tempspan.innerHTML = `${celciusconvert(city.main.temp)}&deg;C`;
  tempspan2.innerHTML = `${fahconvert(city.main.temp)}&deg;F`;
  condition.innerHTML = city.weather[0].description;
  high.innerHTML = `${celciusconvert(city.main.temp_max)}&deg;C`;
  low.innerHTML = `${celciusconvert(city.main.temp_min)}&deg;C`;
  time.innerHTML = format;
  feelsLike.innerHTML = `${celciusconvert(city.main.feels_like)}&deg;C`;
  humidity.innerHTML = `${city.main.humidity}&deg;C`;

  if (iconname.includes('d')) {
    cardtopimage.setAttribute('src', './day_image.svg');
  } else {
    cardtopimage.setAttribute('src', './night_image.svg');
  }
}

// eventlistener for form

searchform.addEventListener('submit', (event) => {
  event.preventDefault();

  const citysearched = cityvalue.value.trim();

  searchform.reset();
  requestcity(citysearched)
    .then((data) => {
      updateapp(data);
    })
    .catch((error) => { updateapp(error); });
});
