const express = require('express')

const app = express()
const port = 3000
const config = {
    host: 'challengedb',
    user: 'root',
    password: 'root',
    database:'challenge_database'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO peoples(name) values ('Danilo Tiago'), ('Thai Santos')`
connection.query(sql)

let results = null
connection.query("SELECT * FROM peoples", function (err, result, fields) {
    if (err) throw err
    results = result
});

connection.end()

app.get('/', (req,res) => {
    const title = '<h1>Full Cycle Rocks!</h1>'

    let body = ""
    results.forEach(result => {
        body = body.concat(`- ${result.name}<br>`) 
    });

    const response = `${title}<br><br>${body}`
    res.send(response)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})