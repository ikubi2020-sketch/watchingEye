import axios from "axios"

export async function globalAxios(method : string, path : string, params : {}, headers : {}, body : {}) {
    try {
        const response  = await axios({
            method,
            url : "http://localhost:3001/api/alerts" + path,
            params : params,
            headers : headers,
            data : body
        })
        return {
            data : response.data,
            error : null
        }
    } catch (error : any) {
        return {
            data : null,
            error : error.response?.data,
        }
    }
}