const router = require("express").Router();
const userController = require("../controllers/user");

router.route("/")
.get(userController.list)
.post(userController.createUser);

//with id
router.route("/:id")
.get(userController.get)
.delete(userController.delUser)
.patch(userController.updateUser);

module.exports=router;
 