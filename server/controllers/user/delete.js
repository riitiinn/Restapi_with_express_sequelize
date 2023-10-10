const httpStatus = require("http-status");
const userServices = require("../../services/user");

module.exports = async(req,res,next)=>{
    try{
        const data = await userServices.delUser(req.params.id);
        res.status(httpStatus.OK).json({
            message:"Delete sucessful",
            data:data,
        });

    }catch(err){
        next(err);
    }
}