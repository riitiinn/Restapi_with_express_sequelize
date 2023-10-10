const httpStatus = require("http-status");
const userController = require("../../services/user");

module.exports = async(req,res,next)=>{
    try{
        const message = await userController.list();
        res.status(httpStatus.OK).json({
            message:"Sucessful",
            data:message
        });
    }catch(err){
        next(err);
    }
    };