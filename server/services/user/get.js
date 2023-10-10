const {user} = require("../../models");
const {ValidationError} = require("../../errors");

module.exports = async(id)=>{
    const getUser = await user.findOne({
        where:{
            id:id,
        }
    });
    if(!getUser){
        throw new ValidationError("User Not found");
    }
    return getUser;
}
