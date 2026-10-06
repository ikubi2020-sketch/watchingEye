import {comparePassword, createHash, verifyToken} from "./authTools.js"
import {getUser} from "../dal/usersDbActions.js"
import { createError } from "../utils/utils.js"
import {findByIdDal} from "../dal/dalAction.js"

export function newUserMiddleware(req, res , next) {
    const newUser = req.body
    const adminAuth = req.headers.authorization
    // 400 for bad request
    if(!adminAuth) { throw createError(400,  "missing headers")}
    const adminToken = adminAuth.split("Bearer ")[1]
    const verifyAdmin = verifyToken(adminToken)
    // 400 for bad request
    if(!verifyAdmin){ throw createError(400, "missing headers")}
    const loginPassword = String(newUser.password)
    const hashPassword = createHash(loginPassword)
    delete newUser.password
    newUser.passwordHash = hashPassword
    req.body = newUser
    console.log("point 1")
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

export async function verifyAdminMiddleware(req, res , next) {
    const adminAuth = req.headers.authorization
    // 400 for bad request
    if(!adminAuth) { throw createError(400,  "missing headers")}
    const adminToken = adminAuth.split("Bearer ")[1]
    const verifyAdmin = verifyToken(adminToken)
    // 400 for bad request
    if(!verifyAdmin){ throw createError(400, "missing headers")}
    const {data, error} = await getUser(verifyAdmin.id)
    // 401 for unauthorize user
    if(data[0].role !== "admin") {throw createError(401, "user not authorized") }
    next()
}

export function validUser() {
    const userAuth = req.headers.authorization
    // 400 for bad request
    if(!userAuth) { throw createError(400,  "missing headers")}
    const userToken = userAuth.split("Bearer ")[1]
    const verifyUser = verifyToken(userToken)
    // 400 for bad request
    if(!verifyUser){ throw createError(400, "missing headers")}
    req.body = verifyUser
    next()
}


export async function generaValidUser() {
    const userAuth = req.headers.authorization
    // 400 for bad request
    if(!userAuth) { throw createError(400,  "missing headers")}
    const userToken = userAuth.split("Bearer ")[1]
    const verifyUser = verifyToken(userToken)
    // 400 for bad request
    if(!verifyUser){ throw createError(400, "missing headers")}
    console.log(verifyUser)
    const {data, error} = await getUser(verifyUser.id)
    // 401 for unauthorize user
    if(data[0].role === "arena_user") {throw createError(401, "user not authorized") }
    next()
}

export async function specificValidUser() {
    const {id} = req.params
    // 400 for bad request
    if(!id) {throw createError(400,  "missing id params")}
    const specifiedEvent = await findByIdDal(id)
    const userAuth = req.headers.authorization
    // 400 for bad request
    if(!userAuth) { throw createError(400,  "missing headers")}
    const userToken = userAuth.split("Bearer ")[1]
    const verifyUser = verifyToken(userToken)
    // 400 for bad request
    if(!verifyUser){ throw createError(400, "missing headers")}
    console.log(verifyUser)
    const {data, error} = await getUser(verifyUser.id)
    // 401 for unauthorize user
    console.log(data[0].role, specifiedEvent[0].arena, data[0].assignedArena)
    if(data[0].role === "arena_user" && specifiedEvent[0].arena !== data[0].assignedArena) {throw createError(401, "user not authorized") }
    next()
}

