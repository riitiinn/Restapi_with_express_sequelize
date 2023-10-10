const {user} = require("../../models");

module.exports = async ()=>{
    const list= await user.findAll();
    return list; 
}