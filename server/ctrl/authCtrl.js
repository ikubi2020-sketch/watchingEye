


async function addNewUserCtrl(req, res, next) {
    const newUser = req.body
    try {
        const result = await addNewUserServ(newUser)
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

async function deleteUserCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

async function getCurrentUserCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

async function getAllUsersCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}

async function loginCtrl(req, res, next) {
    try {
        const result = await addNewUserServ()
        return res.status(201).json({message : result})
    } catch (error) {
        next(error)
    }
}