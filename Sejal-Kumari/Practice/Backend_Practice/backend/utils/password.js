import bcrypt from "bcryptjs"
export const hashPassword = async(password)=>{
    const salt=10;
    return await bcrypt.hash(password,salt)
}
export const comparePassord = async(password,hashPassword)=>{
    return await bcrypt.compare(password, hashPassword)
}