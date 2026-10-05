import zod, { string } from "zod"

export const alertScheme = zod.object({
    "displayName" :  zod.string({message : "displayName must be string"}).min(1, "can not get an empty string"),
    "description"  : zod.string({message : "description must be string"}).min(1, "can not get an empty string"),
    "priority" : zod.string({message : "priority must be string"}).min(1, "can not get an empty string"),
    "arena" : zod.enum(["critical", "high", "medium", "low"], {message : "arena must be a designated string"}),
    "status" : zod.enum(["north", "south", "center"], {message : "status must be a designated string"}),
    "lon" : zod.number({message : "lon must be number"}),
    "lat" :  zod.number({message : "lon must be number"})
})


export async function validEdit(req, res, next) {
    const cleanEditDetails = {}
    const editDetails = req.body
    if(editDetails.displayName){
        if(typeof(editDetails.displayName) !== string ||editDetails.displayName.length < 1 )
        return res.status(400).json({message : "displayName is not valid"})
        cleanEditDetails.displayName =  editDetails.displayName}
    if(editDetails.description){
        if(typeof(editDetails.description) !== string ||editDetails.description.length < 1 )
        return res.status(400).json({message : "description is not valid"})
        cleanEditDetails.description =  editDetails.description}
    if(editDetails.priority){
        if(typeof(editDetails.priority) !== string ||editDetails.priority.length < 1 )
        return res.status(400).json({message : "priority is not valid"})
        cleanEditDetails.priority =  editDetails.priority}
    if(editDetails.arena){
        if(typeof(editDetails.arena) !== string || !["critical", "high", "medium", "low"] === editDetails.priority)
        return res.status(400).json({message : "priority is not valid"})
        cleanEditDetails.arena =  editDetails.arena}
    req.body = editDetails
    next()
}

export function zodValidation(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body)
        // zod return 400 for bad request
        if(!result.success) {return res.status(400).json({message : result.error.issues[0].message})} 
        next()
    }
}

