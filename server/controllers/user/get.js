const httpStatus = require("http-status");
const userServices = require("../../services/user");

module.exports= async(req,res,next)=>{
    try{
    const user= await userServices.get(req.params.id);
    res.status(httpStatus.OK).json({
        message:"Successful",
        data:user,
    });
}catch(error){
    next(error);
}
}
