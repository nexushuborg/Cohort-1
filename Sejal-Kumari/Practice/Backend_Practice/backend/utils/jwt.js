import jwt from "jsonwebtoken"

export const generateToken = (payload)=>
{
    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'1d' //Token expires in 24 hours
    })
}
export const setTokenCookie = (res,token)=>{
    res.cookie('token', token,{
        httpOnly:true,
        sameSite:'strict',
        maxAge:24*60*60*1000 // cookie expires in 1 day (in milliseconds)
    })
}
export const clearTokenCookie=(res)=>{
    res.cookie('token','',{
        httpOnly:true,
        expires: new Date(0)
    })
}