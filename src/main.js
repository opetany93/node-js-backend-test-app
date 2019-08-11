const http = require('http');
const mysql = require("mysql");
const fs = require('fs');

const HOSTNAME = '127.0.0.1';
const PORT = 8080;

let dbConfig;

try {
  const data = fs.readFileSync('../conf/db_config.json', 'utf8')
  dbConfig = JSON.parse(data);
} catch (err) {
  console.error(err)
}

//Database connection
let connection = mysql.createConnection({
	host     : dbConfig.host,
	user     : dbConfig.user,
	password : dbConfig.password,
	database : dbConfig.database
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello dev.to!\n');
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at ${HOSTNAME} on port ${PORT}.`);
});