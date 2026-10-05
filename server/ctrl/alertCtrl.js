import {addAlarmServ, getAllAlertsServ, getAlarmByIdServ, DeleteAlarmServ} from "../service/alertServ.js"


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
    const {id} = req.params
    try {
        const result = await getAlarmByIdServ(id)
        return res.status(200).json({alert : result})
    } catch (error) {
        next(error)
    }
}

export async function addAlarmCtrl(req, res , next) {
    const newAlarm = req.body
    try {
        const result = await addAlarmServ(newAlarm)
        return res.status(201).json({message : "alarm added successfully"})
    } catch (error) {
        next(error)
    }
}
export async function DeleteAlarmCtrl(req, res , next) {
    
    const {id} = req.params
    try {
        await DeleteAlarmServ(id)
        return res.status(200).json({message : "deleted successful"})
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

