import jwt from 'jsonwebtoken';
export const generateToken =(user) =>{
    return jwt.sign(
    {
    _id: user._id,
    name:user.name,
    email:user.email,
    isAdmin: user.isAdmin
},
process.env.JWT_SECRET || 'somethingsecret',
{
expiresIn: '30d',

}
);
};
export const isAuth =(req,res,next)=>{
    
    const authorization = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7,authorization.length);//this function we only get the token part start from Bearer (0,1,2,3,4,5,6and a space 7) and only return the token xxxxxx

    jwt.verify(token,process.env.JWT_SECRET || 'somethingsecret', (err,decode) =>{
        if(err){
            res.status(401).send({message:'Invalid Token'});
            
        }
        else{
            req.user = decode;
            next();
        }


    });
    }
    else{
        res.status(401).send({message:'NO Token'})
    }
};