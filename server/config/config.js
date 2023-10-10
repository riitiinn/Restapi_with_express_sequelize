require("dotenv").config({path:"../../.env"});

module.exports={
  development: {
    username: process.env.DB_USER,
    password: process.env.PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port:3306,
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port:3306,
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port:3306,
    dialect: "mysql"
  }
}
