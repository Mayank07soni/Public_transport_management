import express from 'express'
const app = express()
const port = 3000
import router from './routers/mailRouter.js'
import cors from "cors";
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/mail', router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
