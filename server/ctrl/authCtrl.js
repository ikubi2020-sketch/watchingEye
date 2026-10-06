import {getAllUsersServ, addNewUserServ} from "../service/authService.js"


export async function addNewUserCtrl(req, res, next) {
    const newUser = req.body
    try {
        const result = await addNewUserServ(newUser)
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function deleteUserCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getCurrentUserCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getAllUsersCtrl(req, res, next) {
    try {
        const result = await getAllUsersServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function loginCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}