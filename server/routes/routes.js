import express from "express"
import {addAlarmCtrl, getAllAlertsCtrl} from "../ctrl/alertCtrl.js"
import {alertScheme, zodValidation} from "../middleware/middleare.js"

const router = express.Router()


router.get("/alert", getAllAlertsCtrl)

router.get("/alert/:id", ()=>{})

router.post("/alert",zodValidation(alertScheme), addAlarmCtrl)

router.delete("/alert", ()=>{})

router.put("/alert/:id", ()=>{})


export default router

