const {user} = require("../../models");

module.exports = async(createObj)=>{
    console.log(createObj);
    const createUser = await user.create({
        name:createObj.name,
        email:createObj.email,
        password:createObj.password,
    });
    return createUser;
};