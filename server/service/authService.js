import {addNewUser, deleteUser, getUser, getallUser} from "../dal/usersDbActions.js"
import { createToken } from "../middleware/authTools.js"
import { createError } from "../utils/utils.js"

export async function addNewUserServ(newUser) {
    console.log(newUser)
    try {
        const {data, error} = await addNewUser(newUser)
        // 404 for not found
        if(!data) {throw createError(404, "user not found")}
        console.log(data, error)
        return data
    } catch (error) {
        throw error
    }
}

export async function getAllUsersServ(data) {
    try {
        const  {data, error}  = await getallUser()
        // 404 for not found
        if(!data) {throw createError(404, "users not found")}
        return data
    } catch (error) {
        throw error
    }
}

export async function getCurrentUserServ(userData) {
    try {
        const  {data, error}  = await  getUser(userData.id)
        return data
    } catch (error) {
        throw error
    }
}

export  function loginServ(userPayload) {
    try {
        const  token  = createToken(userPayload)
        return token
    } catch (error) {
        throw error
    }
}

export async  function deleteUserServ(id) {
    try {
        const  {data , error}  = await deleteUser(id)
        return data
    } catch (error) {
        throw error
    }
}
