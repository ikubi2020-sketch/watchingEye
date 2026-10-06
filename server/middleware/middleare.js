import zod, { number, string } from "zod"

export const alertScheme = zod.object({
    "displayName" :  zod.string({message : "displayName must be string"}).min(1, "can not get an empty string"),
    "description"  : zod.string({message : "description must be string"}).min(1, "can not get an empty string"),
    "priority" : zod.enum(["Critical", "High", "Medium", "Low"], "priority must be a designated string"),
    "arena" : zod.enum(["North", "South", "Center"], "arena must be a designated string"),
    "status" : zod.enum(["Active", "Handled"], "status must be a designated string"),
    "lon" : zod.coerce.number({message : "lon must be number"}),
    "lat" :  zod.coerce.number({message : "lat must be number"})
})

export function validEdit(req, res, next) {
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
    if(editDetails.lon){
        if(typeof(editDetails.lon) !== number ||editDetails.lon.length < 1 )
        return res.status(400).json({message : "lon is not valid"})
        cleanEditDetails.lon =  editDetails.lon}
    if(editDetails.lat){
        if(typeof(editDetails.lat) !== number ||editDetails.lat.length < 1 )
        return res.status(400).json({message : "lat is not valid"})
        cleanEditDetails.lat =  editDetails.lat}
    // req.body = editDetails
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


export const loginSchema = zod.object({
    "id" :  zod.coerce.number({message : "id must be number"}).min(1, "id can not get less then 1"),
    "password" :  zod.coerce.number({message : "password must be number"}).min(1, "can not get an empty string")
})

