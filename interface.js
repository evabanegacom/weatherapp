function testing(div) {
  const divcontainer = document.createElement('div');
  divcontainer.className = 'container my-5';
  const divh1 = document.createElement('h1');
  const form = document.createElement('form');
  form.className = 'search-location';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'what city?');
  input.setAttribute('autocomplete', 'off');
  input.className = 'form-control text-muted form-rounded p-4 shadow-sm';
  const divcard = document.createElement('div');
  divcard.className = 'card rounded my-3 shadow-lg d-none back-card';
  const cardtop = document.createElement('div');
  cardtop.className = 'card-top text-center';
  const divcity = document.createElement('div');
  divcity.className = 'city-name my-3';
  const citypara = document.createElement('p');
  citypara.innerHTML = 'Los Angeles';
  const cityspan = document.createElement('span');
  cityspan.innerHTML = '...';
  const image = new Image();
  image.setAttribute('src', './night_image.svg');
  image.className = 'card-img-top time';
  const divcardbody = document.createElement('div');
  divcardbody.className = 'card-body';
  const cardbodychild = document.createElement('div');
  cardbodychild.className = 'card-mid row';
  const cardbodycol = document.createElement('div');
  cardbodycol.className = 'col-8 text-center temp';
  const span2 = document.createElement('span');
  span2.innerHTML = '30&deg;C';
  const divcondition = document.createElement('div');
  divcondition.className = 'col-4 condition-temp';
  const condp = document.createElement('p');
  condp.innerHTML = 'Thunder storm';
  condp.className = 'condition';
  const condp2 = document.createElement('p');
  condp2.innerHTML = '30&deg;C';
  condp2.className = 'high';
  const condp3 = document.createElement('p');
  condp3.innerHTML = '27&deg;C';
  condp3.className = 'low';
  const weathericon = document.createElement('div');
  weathericon.className = 'icon-container card shadow mx-auto';
  const image2 = new Image();
  image2.setAttribute('src', './cloud.svg');
  const cardbottom = document.createElement('div');
  cardbottom.className = 'card-bottom px-5 py-4 row';
  const lasttemp = document.createElement('div');
  lasttemp.className = 'col text-center';
  const degp = document.createElement('p');
  degp.innerHTML = '27&deg;C';
  const degspan = document.createElement('span');
  degspan.innerHTML = 'feel like';
  const divhumid = document.createElement('div');
  divhumid.className = 'col text-center';
  const ptemp = document.createElement('p');
  ptemp.innerHTML = '55%';
  const humidspan = document.createElement('span');
  humidspan.innerHTML = 'humidity';


  divh1.className = 'title text-center';
  divh1.innerHTML = 'weather app';
  form.appendChild(input);
  lasttemp.appendChild(degp);
  lasttemp.appendChild(degspan);
  divhumid.appendChild(ptemp);
  divhumid.appendChild(humidspan);
  weathericon.appendChild(image2);
  cardbottom.appendChild(lasttemp);
  cardbottom.appendChild(divhumid);
  cardbodycol.appendChild(span2);
  divcondition.appendChild(condp);
  divcondition.appendChild(condp2);
  divcondition.appendChild(condp3);
  cardbodychild.appendChild(cardbodycol);
  cardbodychild.appendChild(divcondition);
  divcity.appendChild(citypara);
  divcity.appendChild(cityspan);
  cardtop.appendChild(divcity);
  cardtop.appendChild(image);
  divcard.appendChild(cardtop);
  divcardbody.appendChild(cardbodychild);
  divcardbody.appendChild(weathericon);
  divcardbody.appendChild(cardbottom);

  divcard.appendChild(divcardbody);
  divcontainer.appendChild(divh1);
  divcontainer.appendChild(form);
  divcontainer.appendChild(divcard);

  div.appendChild(divcontainer);
}

function render() {
  const main = document.querySelector('#weather');
  const div = document.createElement('div');
  testing(div);
  main.appendChild(div);
}

export default render;