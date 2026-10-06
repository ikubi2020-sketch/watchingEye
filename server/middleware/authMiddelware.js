import {comparePassword, createHash, verifyToken} from "./authTools.js"
import {getUser} from "../dal/usersDbActions.js"
import { createError } from "../utils/utils.js"


export function newUserMiddleware(req, res , next) {
    const newUser = req.body
    const adminAuth = req.headers.authorization
    // 400 for bad request
    if(!adminAuth) { throw createError(400,  "missing headers")}
    const adminToken = adminAuth.split("Bearer ")[1]
    const verifyAdmin = verifyToken(adminToken)
    // 400 for bad request
    if(!verifyAdmin){ throw createError(400, "missing headers")}
    const hashPassword = createHash(newUser.password)
    delete newUser.password
    newUser.passwordHash = hashPassword
    req.body = newUser
    next()
}

export async function loginMiddleware(req, res , next) {
    const loginUser = req.body
    const {data, error} = await  getUser(loginUser.id)
    //404 for not found
    if(!data) { throw createError(404,  "user not found")}
    const userFromDb = data[0]
    const loginPassword = String(loginUser.password)
    const isAuthorize = comparePassword(loginPassword, userFromDb.passwordHash)
    // 401 for not unAuthorized
    if(!isAuthorize) { throw createError(401,  "user not authorized ")}
    next()
}

export function verifyAdminMiddleware(req, res , next) {
    const adminAuth = req.headers.authorization
    // 400 for bad request
    if(!adminAuth) { throw createError(400,  "missing headers")}
    const adminToken = adminAuth.split("Bearer ")[1]
    const verifyAdmin = verifyToken(adminToken)
    // 400 for bad request
    if(!verifyAdmin){ throw createError(400, "missing headers")}
    next()
}

export function validUser() {
    const userAuth = req.headers.authorization
    // 400 for bad request
    if(!userAuth) { throw createError(400,  "missing headers")}
    const userToken = userAuth.split("Bearer ")[1]
    const verifyUser = verifyToken(userToken)
    if(!verifyUser){ throw createError(400, "missing headers")}
    console.log(verifyUser)
    req.body = verifyUser
    next()
}