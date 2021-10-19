let express = require("express");
let router = express.Router();

router.post(/.*/, function (req, res, next) {
  res.status(405).send({ error: "Method Not Allowed" });
});
router.put(/.*/, function (req, res, next) {
  res.status(405).send({ error: "Method Not Allowed" });
});
router.patch(/.*/, function (req, res, next) {
  res.status(405).send({ error: "Method Not Allowed" });
});
router.delete(/.*/, function (req, res, next) {
  res.status(405).send({ error: "Method Not Allowed" });
});

/* Version 1 */
router.use("/v1", require("./v1/index.js"));

module.exports = router;
