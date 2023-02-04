import * as types from "./actionTypes"
import axios from "axios"

export const getCapsule =(params)=>(dispatch)=>{
    dispatch({type :types.GET_CAPSULES_REQUEST})
    return axios.get(`https://api.spacexdata.com/v3/capsules`,params)
    .then((res)=>{
        dispatch({type :types.GET_CAPSULES_SUCCESS, payload:res.data})
        console.log("data",res.data)
    })
    
    .catch((err)=>{
        dispatch({type: types.GET_CAPSULES_FAILURE, payload:err})
    })
}