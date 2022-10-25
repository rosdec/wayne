import { Wayne } from 'https://cdn.jsdelivr.net/gh/jcubic/wayne@master/index.js';

const app = new Wayne();

var heroes = ["Don Ciro", "Savastano", "Janfranco"];

app.get('/heroes', function (req, res) {
  res.json(heroes);
});

app.get('/heroes/{id}', function (req, res) {
  if (req.params.id) {
    const hero = heroes[req.params.id];
    if (hero)
      res.json(hero);
    else
      res.json("Hero Not Found");
  } else {
    res.json(heroes);
  }
});

app.post('/heroes/', async function (req, res) {
  req.text().then(text => {
    if (text.length > 0) {
      heroes.push(text);

      res.json(heroes);
    } else {
      res.json("No new Hero provided")
    }
  });
})
