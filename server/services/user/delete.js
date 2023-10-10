const {user} = require("../../models");
 
module.exports = async (id)=>{
    const delUser = await user.destroy({
        where: {
            id:id,
        },
    });

   return delUser;
}