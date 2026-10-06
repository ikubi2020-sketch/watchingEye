import {getAllUsersServ, addNewUserServ, loginServ, deleteUserServ, getCurrentUserServ} from "../service/authService.js"
import {addNewUser} from "../dal/usersDbActions.js"
import { createHash } from "../middleware/authTools.js"

const fake_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywicGFzc3dvcmQiOjEyMzQ1LCJpYXQiOjE3OTEyODk0NjJ9.aG_-kCML3XolifvFvaCCNjNzi3oKLFRFtAFgziXX9-Y"


export async function createadminCtrl(req, res, next) {
    const admin = {
 "username" : "momo"   ,
  "password" : "12345",
  "email" : "momo@gmail.com",
  "role" : "admin",
   "assignedArena" : "all"
    }
    const hashPassword = createHash(admin.password)
    delete admin.password
    admin.passwordHash = hashPassword
    try {
        const {data , error} = await addNewUser(admin)
        return res.status(201).json({message : data})
    } catch (error) {
        next(error)
    }
}



export async function addNewUserCtrl(req, res, next) {
    const newUser = req.body
    try {
        const result = await addNewUserServ(newUser)
        console.log(result)
        // 201 for successful creation
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function deleteUserCtrl(req, res, next) {
    const {id} = req.params
    try {
        const result = await deleteUserServ(id)
         // 200 for success response
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getCurrentUserCtrl(req, res, next) {
    const userDetails = req.body
    try {
        const result = await getCurrentUserServ(userDetails)
         // 200 for success response
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getAllUsersCtrl(req, res, next) {
    try {
        const result = await getAllUsersServ()
        // 200 for success response
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

export function loginCtrl(req, res, next) {
    const userData = req.body
    try {
        const token = loginServ(userData)
        // 200 for success response
        return res.status(200).json({message : token})
    } catch (error) {
        next(error)
    }
}