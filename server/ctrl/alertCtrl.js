import {addAlarmServ, getAllAlertsServ, getAlarmByIdServ} from "../service/alertServ.js"


// router.get("/alert", ()=>{})

// router.get("/alert/:id", ()=>{})

// router.post("/alert", ()=>{})

// router.delete("/alert", ()=>{})

// router.put("/alert/:id", ()=>{})



export async function getAllAlertsCtrl(req, res , next) {
    try {
        const result =  await getAllAlertsServ()
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function getAlarmByIdCtrl(req, res , next) {
    const {id} = res.params
    console.log(id)
    try {
        const result = await getAlarmByIdServ(id)
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

export async function addAlarmCtrl(req, res , next) {
    console.log("point 1")
    const newAlarm = req.body
    console.log(newAlarm)
    try {
        const result = await addAlarmServ(newAlarm)
        return res.status(201).json({message : "alarm added successfully"})
    } catch (error) {
        next(error)
    }
}
export async function DeleteAlarmCtrl(req, res , next) {
    
    try {
        const result = await DeleteAlarmServ()
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}
export async function name5(req, res , next) {
    try {
        const result = {}
        return res.status(200).json({message : result})
    } catch (error) {
        next(error)
    }
}

