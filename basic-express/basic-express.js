const express = require('express')
const bodyParser = require("body-parser");
const router = express.Router();

const app = express()
const port = 3000

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

heroes = ["Don Ciro", "Savastano", "Janfranco"];

app.get('/heroes/:id?', function (req, res) {
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

app.post('/heroes', function (req, res) {
  if (req.body) {
    heroes.push(req.body);

    res.json(heroes);
  } else {
    res.json("No new Hero provided")
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})