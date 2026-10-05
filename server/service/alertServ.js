import {findByIdDal,getAllAlarmsDal, insertAnAlarmDal, deleteByIdDal, editByIdDal} from "../dal/dalAction.js"
import {createError} from "../utils/utils.js"

export async function getAllAlertsServ() {
    try {
        const result = await getAllAlarmsDal()
        // if it wasn't return then the problem is in their server (probably)
        if(!result) {throw createError(500 , "something went wrong")}
        return result
    } catch (error) {
        throw error
    }
}


export async function getAlarmByIdServ(id) {
    try {
        const result = await findByIdDal(id)
        //404 for if it was not found
        if(!result) {throw createError(404 , "alarm not found")}
        return result
    } catch (error) {
        throw error
    }
}

export async function addAlarmServ(newAlarm) {
    try {
        const result = await insertAnAlarmDal(newAlarm)
        return result
    } catch (error) {
        throw error
    }
}

export async function DeleteAlarmServ(id) {
    try {
        const result = await deleteByIdDal(id)
        // if it wasn't return then the problem is in their server (probably)
        if(!result.deletedCount) {throw createError(404 , "alarm not deleted")}
        return result
    } catch (error) {
        throw error
    }
}

export async function editAlarmServ(id, data) {
    try {
        const result = await editByIdDal(id, data)
        return result
    } catch (error) {
        throw error
    }
}