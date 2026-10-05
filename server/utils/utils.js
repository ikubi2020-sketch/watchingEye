

export async function loggerServer(req, res, next) {
    console.log(req.url, req.method)
    next()
}


export async function createError(statusCode , message) {
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}


export async function errorHandler(err, req, res, next) {
    console.log(err);
    if(err.statusCode){
        return res.status(err.statusCode).json({message : err.message})
    }
    res.status(500).json({message : "something went wrong"})
}
