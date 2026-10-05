import {addAlarmServ, getAllAlertsServ, getAlarmByIdServ, DeleteAlarmServ, editAlarmServ} from "../service/alertServ.js"


export async function getAllAlertsCtrl(req, res , next) {
    try {
        const result =  await getAllAlertsServ()
        // status 200 for a regular success 
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getAlarmByIdCtrl(req, res , next) {
    const {id} = req.params
    try {
        const result = await getAlarmByIdServ(id)
        // status 200 for a regular success 
        return res.status(200).json({alert : result})
    } catch (error) {
        next(error)
    }
}

export async function addAlarmCtrl(req, res , next) {
    const newAlarm = req.body
    try {
        const result = await addAlarmServ(newAlarm)
        // status 201 for a success creation
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function DeleteAlarmCtrl(req, res , next) {
    
    const {id} = req.params
    try {
        await DeleteAlarmServ(id)
        // status 204 for a success delete
        return res.status(204).json({message : "deleted successful"})
    } catch (error) {
        next(error)
    }
}

export async function editAlarmCtrl(req, res , next) {
    const {id} = req.params
    const data = req.body
    try {
        const result = await editAlarmServ(id, data)
        // status 200 for a regular success
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

