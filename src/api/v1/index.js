const express = require("express");
const router = express.Router();
const util = require("../../lib/util");

router.get("/", function (req, res, next) {
  res.send({ message: "hello kanji convert" });
});
router.get("/kanji", function (req, res, next) {
  // リクエスト不正チェック
  let error = util.checkParameter(req);

  if (error.code !== 200) {
    res.status(error.code).send({ error: error.message });
    return false;
  }
  let article = req.query.article;
  let result = util.convertKanji(article);
  res.status(200).send(result);
});

module.exports = router;
