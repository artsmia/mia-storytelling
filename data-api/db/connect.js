import Sequelize from 'sequelize'
import sqlite from 'sqlite3'

let db

if (process.env.DB_MODE === 'local') {
  let liteDb = new sqlite.Database('localDB.sqlite')

  db = new Sequelize({
    dialect: 'sqlite',
    storage: 'localDB.sqlite',
    logging: false
  })
} else {
  db = new Sequelize(process.env.DB_URL, {
    logging: false,
    charset: 'utf8',
    dialect: 'mysql'
  })
}

export default db
