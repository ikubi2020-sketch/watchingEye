import {addNewUser, deleteUser, getUser, getallUser} from "../dal/usersDbActions.js"

export async function addNewUserServ(newUser) {
    try {
        const result = await addNewUser(newUser)
        return result
    } catch (error) {
        throw error
    }
}

export async function getAllUsersServ(data) {
    try {
        const result = await {}
        return result
    } catch (error) {
        throw error
    }
}

export async function bServ(data) {
    try {
        const result = await {}
        return result
    } catch (error) {
        throw error
    }
}

export async function cServ(data) {
    try {
        const result = await {}
        return result
    } catch (error) {
        throw error
    }
}
