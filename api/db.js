import mysql from "mysql"

export const db = mysql.createConnection({
    host: "mysql.vandervieira.com.br",
    user: "vandervieira30",
    password: "GKnjafF7wAVDbtmx",
    database: "vandervieira30"
})