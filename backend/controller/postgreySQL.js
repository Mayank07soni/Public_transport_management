import pool from "../models/postgreySQLModel";

const addUser=async (req,res)=>{
    try {
       const {email, password} = req.body;
    } catch (error) {
        console.log(error)
    }
}