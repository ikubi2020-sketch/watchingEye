import express from "express"
import {addAlarmCtrl, getAllAlertsCtrl, getAlarmByIdCtrl, DeleteAlarmCtrl, editAlarmCtrl} from "../ctrl/alertCtrl.js"
// import {alertScheme, zodValidation } from "../middleware/middleare.js"

const router = express.Router()


router.get("/alert", getAllAlertsCtrl)

router.get("/alert/:id", getAlarmByIdCtrl)

router.post("/alert", addAlarmCtrl)

router.delete("/alert/:id", DeleteAlarmCtrl)

router.put("/alert/:id", editAlarmCtrl)


export default router

