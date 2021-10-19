const kanjiList = require("../config/kanji");
const def = require("../config/const");

exports.convertKanji = (article) => {
  let new_kanji = article;
  let old_kanji = article;
  let includedOld = false;
  let includedNew = false;
  let count = 0;

  kanjiList.kanji.forEach((element) => {
    // 旧漢字が含まれている
    if (article.indexOf(element.old) !== -1) {
      count += article.match(new RegExp(element.old, "g") || []).length;
      includedOld = true;
    }
    // 新漢字が含まれている
    if (article.indexOf(element.new) !== -1) {
      includedNew = true;
    }
    new_kanji = new_kanji.replace(new RegExp(element.old, "g"), element.new);
    old_kanji = old_kanji.replace(new RegExp(element.new, "g"), element.old);
  });

  const kanji = {
    new: new_kanji,
    old: old_kanji,
    includedNew: includedNew,
    includedOld: includedOld,
    count: count,
  };

  return kanji;
};

exports.checkParameter = (req) => {
  let code = 200;
  let message = "";

  // クエリパラメータ不正
  let query_params = Object.keys(req.query);
  if (
    query_params.length === 0 ||
    query_params.indexOf(def.QUERY_ARTICLE) === -1
  ) {
    return {
      code: 400,
      message: "The query parameter is invalid.",
    };
  }

  // 最大文字数超過
  let article = req.query.article;
  if (article.length > def.MAXIMUM_LENGTH) {
    return {
      code: 400,
      message:
        "The maximum number of characters ( " +
        def.MAXIMUM_LENGTH +
        " characters) has been exceeded",
    };
  }
  // 0文字のリクエスト
  if (article.length === 0) {
    return {
      code: 404,
      message: "Not Found",
    };
  }

  const response = {
    code: code,
    message: message,
  };

  return response;
};
