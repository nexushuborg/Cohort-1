import jwt from "jsonwebtoken"

export const AuthenticateToken= (req, res, next)=>{
    const token = req.cookies?.token
    if(!token){
        return res.status(401).json({
            success:'fail',
            message:"Access denied as no auth token provided"
        })
    }
    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user= decoded
        next();
    }
    catch(error){
        return res.status(403).json({
            status:'fail',
            message:"Invalid or expired token"
        })
    }
}