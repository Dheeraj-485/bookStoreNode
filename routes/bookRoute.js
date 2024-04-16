const express = require("express");
const router = express.Router();
const routerController = require("../controllers/bookCtrl");

router.get("/", routerController.index);

router.post("/", routerController.create);
router.put("/:id", routerController.Update);
router.delete("/:id", routerController.Destroy);

module.exports = router;
