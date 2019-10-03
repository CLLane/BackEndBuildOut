const express = require("express");
const app = express();
const csv = require("csv-parser");
const fs = require("fs");
const results = [];
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.set("port", process.env.PORT || 3000);
app.locals.title = "BYOB";

app.use(express.json());

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});

fs.createReadStream("player_data.csv")
  .pipe(csv())
  .on("data", data => results.push(data))
  .on("end", () => {
    console.log(results[0]);
  });

app.get("/", (request, response) => {
  return response.send(
    "Hey its time to figure out who went where and some stats"
  );
});

app.get("/api/v1/colleges", (request, response) => {
  database("colleges")
    .select()
    .then(colleges => {
      response.status(200).json(colleges);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/api/v1/players", (request, response) => {
  database("players")
    .select()
    .then(players => {
      response.status(200).json(players);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/api/v1/players/:id", (request, response) => {
  database("players")
    .where("id", request.params.id)
    .select()
    .then(players => {
      if (players.length) {
        response.status(200).json(players);
      } else {
        response.status(404).json({
          error: `Could not find a player with id ${request.params.id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/api/v1/colleges/:id", (request, response) => {
  database("colleges")
    .where("id", request.params.id)
    .select()
    .then(colleges => {
      if (colleges.length) {
        response.status(200).json(colleges);
      } else {
        response.status(404).json({
          error: `Could not find a college with id ${request.params.id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post("/api/v1/colleges", (request, response) => {
  const college = request.body;

  for (let requiredParameter of ["college"]) {
    if (!college[requiredParameter]) {
      return response.status(422).send({
        error: `Expected format: { college: <String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }
  database("colleges")
    .insert(college, "id")
    .then(college => {
      response.status(201).json({ id: college[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
