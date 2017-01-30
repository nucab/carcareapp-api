
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    // Inserts seed entries
    knex('users').delete()
  );
};
