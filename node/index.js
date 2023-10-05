const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const names = [
    "Lebron James",
    "Michael Jordan",
    "Luka Doncic",
    "Trae Young",
    "Kobe Bryant",
    "Damian Lillard",
    "Stephen Curry",
    "Giannis Antetokounmpo",
    "James Harden",
    "Nikola Jokic",
    "Joel Embiid"
]

const luckyNumber = Math.round(Math.random() * 10);

console.log("numero: ", luckyNumber)

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people (name) values ("${names[luckyNumber]}")`
connection.query(sql)

let results = [];

const select = `SELECT * FROM people`

connection.query(select, function (err, rows) {
    if (err) throw err
    console.log("Rows: ", rows)
    results = rows
})

connection.end()

app.get('/', (req, res) => {
    res.send(
        `<h1>Full Cycle Rocks!</h1>` + 
        "<ul>" + 
        `${results.map(result => `<li>${result.name}</li>`)}` + 
        "</ul>"
    )
})

app.listen(port, () => {
    console.log("Rodando na porta", port)
})