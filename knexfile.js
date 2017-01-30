// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'abc_carmanagement',
      user:     'root'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'carcareapp_api',
      user:     'carcareapp_user',
      password: 'yA6#NPq34?L6yNnj'
    }
  }
};
