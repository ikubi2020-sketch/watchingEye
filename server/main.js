import express from "express"
import dotenv from "dotenv/config"
import helmet from "helmet"
import routerAlerts from "./routes/routes.js"
import authRouter from "./routes/authROutes.js"
import cors from "cors"
import  {loggerServer, errorHandler} from "./utils/utils.js"

const port = process.env.PORT || 3001

const app = express()

app.use(loggerServer)

app.use(express.json())

app.use(helmet())

app.use(cors({}))

app.use("/api/auth", authRouter)

app.use("/api/alerts", routerAlerts)

app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`server running on port ${port}`)
})