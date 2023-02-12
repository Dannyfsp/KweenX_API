// import router from express
const router = require("express").Router();

// import functions from controllers
const {
  new_drinks,
  drinks_available,
  update_drinks,
  delete_drinks,
  single_drink,
} = require("../controllers/drinks.controllers");

router.get("/admin", drinks_available);
router.get("/admin/:id", single_drink);
router.post("/admin", new_drinks);
router.put("/admin/:id", update_drinks);
router.delete("/admin/:id", delete_drinks);

// export router to app
module.exports = router;
