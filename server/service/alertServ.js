import {findByIdDal,getAllAlarmsDal, insertAnAlarmDal} from "../dal/dalAction.js"
import {createError} from "../utils/utils.js"

export async function getAllAlertsServ() {
    try {
        const result = await getAllAlarmsDal()
        if(!result) {throw createError(500 , "something went wrong")}
        return result
    } catch (error) {
        throw error
    }
}


export async function name4(data) {
    try {
        const result = await {}
        return result
    } catch (error) {
        throw error
    }
}

export async function addAlarmServ(newAlarm) {
    try {
        const result = await insertAnAlarmDal(newAlarm)
        if(!result) {throw createError(500 , "alarm not added")}
        return result
    } catch (error) {
        throw error
    }
}

export async function name2(data) {
    try {
        const result = await {}
        return result
    } catch (error) {
        throw error
    }
}

export async function name1(data) {
    try {
        const result = await {}
        return result
    } catch (error) {
        throw error
    }
}