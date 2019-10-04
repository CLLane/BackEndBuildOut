const express = require('express');
const app = express();
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

// app.locals.launches = [];

app.use(express.json());


app.get('/', (request, response) => {
  return response.send('Hey its time to figure out who went where and some stats')
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

fs.createReadStream('player_data.csv')
  .pipe(csv())
  .on('data', data => results.push(data))
  .on('end', () => {
    console.log(results[0])
  })