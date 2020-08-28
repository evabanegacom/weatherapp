import './iced-water.jpg';
import './main.css';
import render from '../interface';

render();

const key = '4641011f258f0906246323fdd8f36a20';

const searchform = document.querySelector('.search-location');
const cityvalue = document.querySelector('.search-location input');
const cityname = document.querySelector('.city-name p');
const bodycard = document.querySelector('.card-body');
const cardtopimage = document.querySelector('.card-top img');
const cardshow = document.querySelector('.back-card');


// const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=4641011f258f0906246323fdd8f36a20'

// fetch(baseUrl)
//   .then((data) => {console.log('response', data.json())})
//   .catch((error) => {
//       console.log(error)
//   })


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


function checkkelvin() {
  document.querySelector('body').addEventListener('click', () => {
    document.querySelector('.celcius').classList.remove('d-none');
  });
}


function updateapp(city) {
  const iconname = city.weather[0].icon;
  const unixTimeStamp = city.sys.sunrise;
  const date = new Date(1000 * unixTimeStamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const format = `${hours}:${minutes}`;
  const weathericon = `http://openweathermap.org/img/wn/${iconname}@2x.png`;
  cityname.innerHTML = city.name;
  bodycard.innerHTML = `<div class="card-mid row">
    <div class="col-8 text-center temp">
      <span id="kelvin" onclick="${checkkelvin()}">${celciusconvert(city.main.temp)}&deg;C</span>
      <p id="celciuss" class="d-none celcius">${fahconvert(city.main.temp)}&deg;F</p>
    </div>
    <div class="col-4 condition-temp">
      <p class="condition">${city.weather[0].description}</p>
      <p class="high">${celciusconvert(city.main.temp_max)}&deg;C</p>
      <p class="low">${celciusconvert(city.main.temp_min)}&deg;C</p>
    </div>
  </div>

  <div class="icon-container card shadow mx-auto">
    <img src="${weathericon}" alt="" />
  </div>
  <div class="card-bottom px-5 py-4 row">
    <div class="col text-center">
      <p>${format}</p>
      <span>${celciusconvert(city.main.feels_like)}&deg;C</span>
    </div>
    <div class="col text-center">
      <p>${city.main.humidity}&deg;C</p>
      <span></span>
    </div>
  </div>`;

  if (iconname.includes('d')) {
    cardtopimage.setAttribute('src', './day_image.svg');
  } else {
    cardtopimage.setAttribute('src', './night_image.svg');
  }

  cardshow.classList.remove('d-none');
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
