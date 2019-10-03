const mockData = require('../../../mockData')

const createCollege = (knex, player) => {
  return knex('colleges').insert({
    college: player.college || null
  }, 'id')
  .then(collegeId => {
    let playerPromises = {
      name: player.name,
      position: player.position,
      height: player.height,
      weight: player.weight,
      birth_date: player.birth_date,
      college_id: collegeId[0] || null,
      year_start: player.year_start,
      year_end: player.year_end
    }
    return createPlayer(knex, playerPromises)
  })
}

const createPlayer = (knex, player) => {
  return knex('players').insert(player);
};


exports.seed = (knex) => {
  return knex('players').del()
    .then(() => knex('colleges').del())
    .then(() => {
      let collegePromises = [];
      mockData.forEach(player => {
        collegePromises.push(createCollege(knex, player));
      });
     return Promise.all(collegePromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

