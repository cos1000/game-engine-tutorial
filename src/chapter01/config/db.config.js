module.exports = {
  HOST: 'localhost',
  USER: 'nodejs',
  PASSWORD: 'Foobar!@34',
  DB: 'nodejs',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
