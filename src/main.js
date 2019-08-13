// imports
const mariadb = require('mariadb/callback');
const fs = require('fs');
const express = require('express');

// constant variables
const HOSTNAME = '127.0.0.1';
const PORT = 8080;

let dbConfig;

try {
  const data = fs.readFileSync('../conf/db_config.json', 'utf8')
  dbConfig = JSON.parse(data);
} catch (err) {
  console.error(err)
}

const mariadbConn = mariadb.createConnection({
	host : dbConfig.host,
	user : dbConfig.user,
  password : dbConfig.password,
  database : dbConfig.database,
  connectionLimit: 5
});

const app = express();

app.get('/customers', (request, respond) => {
  console.log('Received a get customers request!');
  mariadbConn.query("SELECT * FROM customers", (err, rows) => {
    respond.send(rows);
    console.log('Response on get customers request sent.');
  });
});

app.get('/employees', (request, respond) => {
  console.log('Received a get employees request!');
  mariadbConn.query("SELECT * FROM employees", (err, rows) => {
    respond.send(rows);
    console.log('Response on get employees request sent.');
  });
});

app.get('/offices', (request, respond) => {
  console.log('Received a get offices request!');
  mariadbConn.query("SELECT * FROM offices", (err, rows) => {
    respond.send(rows);
    console.log('Response on get offices request sent.');
  });
});

app.get('/orderdetails', (request, respond) => {
  console.log('Received a get orderdetails request!');
  mariadbConn.query("SELECT * FROM orderdetails", (err, rows) => {
    respond.send(rows);
    console.log('Response on get orderdetails request sent.');
  });
});

app.get('/orders', (request, respond) => {
  console.log('Received a get orders request!');
  mariadbConn.query("SELECT * FROM orders", (err, rows) => {
    respond.send(rows);
    console.log('Response on get orders request sent.');
  });
});

app.get('/payments', (request, respond) => {
  console.log('Received a get payments request!');
  mariadbConn.query("SELECT * FROM payments", (err, rows) => {
    respond.send(rows);
    console.log('Response on get payments request sent.');
  });
});

app.get('/productlines', (request, respond) => {
  console.log('Received a get productlines request!');
  mariadbConn.query("SELECT * FROM productlines", (err, rows) => {
    respond.send(rows);
    console.log('Response on get productlines request sent.');
  });
});

app.get('/products', (request, respond) => {
  console.log('Received a get products request!');
  mariadbConn.query("SELECT * FROM products", (err, rows) => {
    respond.send(rows);
    console.log('Response on get products request sent.');
  });
});

app.listen(PORT, () => console.log(`Node js server app listening on port ${PORT}.`));