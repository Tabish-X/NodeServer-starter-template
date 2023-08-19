const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).render("index", {
    title: "welcome to basic server template",
  });
});

router.get("*", (req, res) => {
  res.status(404).render("notfound");
});


module.exports = router