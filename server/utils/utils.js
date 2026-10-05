

export async function loggerServer(req, res, next) {
    console.log(req.url, req.method)
    next()
}

export function createError(status , message) {
    const error = new Error(message)
    error.statusCode = status
    return error
}

export function errorHandler(err, req, res, next) {
    //if I throw an expected status so it will be sent to the user
    console.log(err);
    if(err.statusCode){res.status(err.statusCode).json({message : err.message})}
    // status 500 when unexpected mistake happen so 500 is a general server failure
    else res.status(500).json({message : "something went wrong"})
}

export function addIdToListOfAlerts(listOfAlerts) {
    const newAlertList = listOfAlerts.map((alert)=> {
        alert.id = alert._id
        return alert})
    return newAlertList
}