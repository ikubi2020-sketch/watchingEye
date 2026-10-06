import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export function createHash(password) {
    const hashPassword = bcrypt.hashSync(password , 10)
    return hashPassword
}

export function comparePassword(password, hashPassword) {
    const compareResult = bcrypt.compareSync(password , hashPassword)
    return compareResult
}

export function createToken(payload) {
    const token = jwt.sign(payload , process.env.TOKEN_KEY)
    return token
}

export function verifyToken(token) {
    const payLoad = jwt.sign(token , process.env.TOKEN_KEY)
    return payLoad
}

