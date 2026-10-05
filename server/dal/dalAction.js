
import { ObjectId } from "bson"
import { dbAccede } from "./dbConnection.js"

const alertConnection = dbAccede.collection("alert_connection")

export async function findByIdDal(id) {
    const result = await alertConnection.findOne({_id : new ObjectId(id)})
    return result
}

export async function getAllAlarmsDal() {
    const result = await alertConnection.find({}).toArray()
    return result
}

export async function insertAnAlarmDal(newAlarm){
    const result = await alertConnection.insertOne(newAlarm)
    return result
}




