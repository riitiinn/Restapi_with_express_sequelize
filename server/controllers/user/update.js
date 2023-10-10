const httpStatus = require("http-status");
const userServices = require("../../services/user");

module.exports = async(req,res,next)=>{
    try{
        const user = await userServices.userUpdate({id:req.params.id, ...req.body})
        res.status(httpStatus.OK).json({
            message : "Successful",
            data:user,
        });
    }catch(err){
        next (err);
    }
};