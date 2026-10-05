import { error } from "node:console"
import zod from "zod"

export const alertScheme = zod.object({
    "displayName" :  zod.string({message : "displayName must be string"}),
    "description"  : zod.string({message : "description must be string"}),
    "priority" : zod.string({message : "priority must be string"}),
    "arena" : zod.string({message : "arena must be string"}),
    "status" : zod.string({message : "status must be string"}),
    "lon" : zod.number({message : "lon must be string"}),
    "lat" :  zod.number({message : "lon must be string"})
})


export function zodValidation(schema) {
    return (req, res, next) => {
        const result = schema.safeParas(req.body)
        if(!result.succeed) {return res.status(400).json({message : result.error.issue[0].message})} 
        next()
    }
}