
const csv = require("csv-parser");
const fs = require("fs");
const colleges = [];
const players = [];

 fs.createReadStream("player_data.csv")
  .pipe(csv())
  .on("data", data =>{ if(!colleges.find(obj => obj.college === data.college)){
    colleges.push(data)
  } 
    players.push(data)
  })
  .on("end", () => {
  });

const createCollege = (knex, college) => {
  return knex('colleges').insert({
    college: college.college 
  })
};

const createPlayer = (knex, player) => {
  return knex('colleges').where('college', player.college).first()
    .then(college => {
      return knex('players').insert({
        name: player.name,
        position: player.position,
        height: player.height,
        weight: player.weight,
        birth_date: player.birth_date,
        college_id: college.id || null,
        year_start: player.year_start,
        year_end: player.year_end
    })
  })
};


exports.seed = (knex) => {
  return knex('players').del()
    .then(() => knex('colleges').del())
    .then(() => {
      let collegePromises = [];
      colleges.forEach(college => {
        collegePromises.push(createCollege(knex, college));
      })
      return Promise.all(collegePromises)
    }).then(() => {
      let playerPromises = [];
      players.forEach(player => {
        playerPromises.push(createPlayer(knex, player));
      })
      return Promise.all(playerPromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

