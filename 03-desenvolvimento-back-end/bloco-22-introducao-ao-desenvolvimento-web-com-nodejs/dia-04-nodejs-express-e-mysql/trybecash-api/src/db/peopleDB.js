const conn = require('./connection');

const insert = (person) => conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.first_name, person.last_name, person.email, person.phone],
  );

module.exports = {
  insert,
};