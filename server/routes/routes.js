import express from "express"
import {addAlarmCtrl, getAllAlertsCtrl, getAlarmByIdCtrl, DeleteAlarmCtrl, editAlarmCtrl} from "../ctrl/alertCtrl.js"
import {alertScheme, zodValidation ,validEdit} from "../middleware/middleare.js"

const router = express.Router()


router.get("/alerts", getAllAlertsCtrl)

router.get("/alerts/:id", getAlarmByIdCtrl)

router.post("/alerts",zodValidation(alertScheme), addAlarmCtrl)

router.delete("/alerts/:id", DeleteAlarmCtrl)

router.put("/alerts/:id",validEdit,  editAlarmCtrl)


export default router

