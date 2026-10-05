import zod, { number, string } from "zod"

export const alertScheme = zod.object({
    "displayName" :  zod.string({message : "displayName must be string"}).min(1, "can not get an empty string"),
    "description"  : zod.string({message : "description must be string"}).min(1, "can not get an empty string"),
    "priority" : zod.enum(["critical", "high", "medium", "low"], {message : "status must be a designated string"}),
    "arena" : zod.enum(["north", "south", "center"], {message : "arena must be a designated string"}),
    "status" : zod.enum(["active", "handled"], {message : "status must be a designated string"}),
    "lon" : zod.number({message : "lon must be number"}),
    "lat" :  zod.number({message : "lon must be number"})
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

