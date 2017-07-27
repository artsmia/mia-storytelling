import db from './connect'
import models from './models'

db.sync().then((success) =>{
  console.log("db sync success")
}).catch((ex) => {
  console.error("db sync error", ex)
})


export default db
