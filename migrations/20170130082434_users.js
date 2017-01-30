
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE users (
      id int(11) unsigned NOT NULL AUTO_INCREMENT,
      firstname varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      lastname varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      username varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      email varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      password varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
      timezone varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      created_at datetime DEFAULT NULL,
      updated_at datetime DEFAULT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY users_username_unique (username,email)
    ) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
	`);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
