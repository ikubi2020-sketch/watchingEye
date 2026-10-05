import express from "express"
import dotenv from "dotenv/config"
import helmet from "helmet"
import router from "./routes/routes.js"
import  {loggerServer, errorHandler} from "./utils/utils.js"

const port = process.env.PORT || 3001

const app = express()

app.use(loggerServer)

app.use(express.json())

app.use(helmet())

app.use("/api", router)

app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`server running on port ${port}`)
})