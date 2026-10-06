import express from "express"
import {addAlarmCtrl, getAllAlertsCtrl, getAlarmByIdCtrl, DeleteAlarmCtrl, editAlarmCtrl} from "../ctrl/alertCtrl.js"
import {alertScheme, zodValidation ,validEdit} from "../middleware/middleare.js"
import {verifyAdminMiddleware, generaValidUser, specificValidUser} from "../middleware/authMiddelware.js"

const router = express.Router()

router.get("/",generaValidUser, getAllAlertsCtrl)

router.get("/:id",specificValidUser, getAlarmByIdCtrl)

router.post("/",zodValidation(alertScheme), addAlarmCtrl)

router.delete("/:id",verifyAdminMiddleware, DeleteAlarmCtrl)

router.put("/:id", specificValidUser, validEdit, editAlarmCtrl)

export default router

