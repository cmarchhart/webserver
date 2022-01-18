const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'inv.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://10.0.0.0:80/inventory', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(inv => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = inv.Hersteller;

      const p = document.createElement('p');
      inv.Model = inv.Model.substring(0, 300);
      p.textContent = `${inv.Model}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Error!`;
    app.appendChild(errorMessage);
  }
}

request.send();