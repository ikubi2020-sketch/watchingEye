
import { clientSupabase } from "./supaBaseConnection.js"

const dbName = "user_watchingEye"

export async function addNewUser(user) {
    const result = await clientSupabase.from("user_watchingEye").insert(user).select()
    return result
}


export async function deleteUser(id) {
    const result = await clientSupabase.from("user_watchingEye").delete(user).eq("id", id).select()
    return result
}

export async function getUser(id) {
    const result = await clientSupabase.from("user_watchingEye").select().eq("id", id)
    return result
}


export async function getallUser() {
    const result = await clientSupabase.from("user_watchingEye").select("*")
    return result
}
