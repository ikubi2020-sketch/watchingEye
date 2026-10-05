import zod from "zod"

export const alertScheme = zod.object({
    "displayName" :  zod.string({message : "displayName must be string"}),
    "description"  : zod.string({message : "description must be string"}),
    "priority" : zod.string({message : "priority must be string"}),
    "arena" : zod.string({message : "arena must be string"}),
    "status" : zod.string({message : "status must be string"}),
    "lon" : zod.number({message : "lon must be number"}),
    "lat" :  zod.number({message : "lon must be number"})
})

export function zodValidation(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body)
        // zod return 400 for bad request
        if(!result.success) {return res.status(400).json({message : result.error.issues[0].message})} 
        next()
    }
}
