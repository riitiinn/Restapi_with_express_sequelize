const userServices = require("../../services/user");
const httpStatus = require("http-status");

module.exports = async(req,res,next)=>{
    try{
        const message = await userServices.createUser(req.body);
        console.log("User created sucessfully",message);

        res.status(httpStatus.OK).json({
            message:"success",
            data:message
        });
    }catch(error){
        next(error);
    }
    };