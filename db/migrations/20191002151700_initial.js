
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('colleges', (table) => {
      table.increments('id').primary();
      table.string('college');

      table.timestamps(true, true)
    }),
    knex.schema.createTable('players', (table) => {
      table.increments('id').primary();
      table.string('name')
      table.string('position')
      table.string('height')
      table.string('weight')
      table.string('birth_date')
      table.integer('college_id').unsigned()
      table.foreign('college_id')
        .references('colleges.id')
      table.string('year_start')
      table.string('year_end')
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('colleges'),
    knex.schema.dropTable('players'),
  ]);
};
