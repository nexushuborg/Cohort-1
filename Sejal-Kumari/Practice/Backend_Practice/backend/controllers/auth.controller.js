import { query } from "../db/";
import { hashPassword, comparePassord, hashPassword } from "../utils/password";
import { generateToken,setTokenCookie,clearTokenCookie } from "../utils/jwt";

export const signup = async(req, res)=>{
    try{
        const {email, password}= req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"email and password required"
            })
        }
        const existingUser = await query ('SELECT * FROM users WHERE email = $1', [email])
        if(existingUser.rows.length >0){
            return res.status(409).json({
                message:"User with this email already exists"
            })
        }
        const hashPassword= await hashPassword(password)
        const newUser= await query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id , name , email, created_at',[name,email,password]
        )
        const user= newUser.rows[0];

    }
} 