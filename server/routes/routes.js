import express from "express"
import {addAlarmCtrl, getAllAlertsCtrl, getAlarmByIdCtrl, DeleteAlarmCtrl, editAlarmCtrl} from "../ctrl/alertCtrl.js"
import {alertScheme, zodValidation ,validEdit} from "../middleware/middleare.js"

const router = express.Router()


router.get("/", getAllAlertsCtrl)

router.get("/:id", getAlarmByIdCtrl)

router.post("/",zodValidation(alertScheme), addAlarmCtrl)

router.delete("/:id", DeleteAlarmCtrl)

router.put("/:id",validEdit,  editAlarmCtrl)


export default router

