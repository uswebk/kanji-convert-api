# API Documents

## ・ URI

```
GET http://api.pg-lesson.com/v1/kanji/?article={}
```

---

## ・ Parameters

```
?article="螢が飛んでいる"
```

### ・Properties

- **article**
  - String - 旧漢字・新漢字を含む文章を渡す(※500 文字まで)

---

## ・ Response Body

<font color=#84C98B>&nbsp;&nbsp;&nbsp;&nbsp;+ Response 200 (application/json)</font>

```json
{
  "old": "螢が飛んでいる",
  "new": "蛍が飛んでいる",
  "includedOld": true,
  "includedNew": false,
  "count": 1
}
```

### ・Properties

- **old**
  - String - 旧漢字を新漢字へ変換した値
- **new**
  - String - 新漢字を旧漢字へ変換した値
- **includedOld**
  - Bool - 旧漢字が含まれるか
- **includedNew**
  - Bool - 旧漢字存在する新漢字が含まれるか
- **count**
  - Integer - 存在した旧漢字数

### ・ Error

<font color=#FA2019>&nbsp;&nbsp;&nbsp;&nbsp;+ Response 400 (application/json)</font>

```json
{
  "message": "The maximum number of characters (500 characters) has been exceeded"
}
```

<font color=#FA2019>&nbsp;&nbsp;&nbsp;&nbsp;+ Response 404 (application/json)</font>

```json
{
  "message": "Not Found"
}
```

<font color=#FA2019>&nbsp;&nbsp;&nbsp;&nbsp;+ Response 405 (application/json)</font>

```json
{
  "message": "Method Not Allowed"
}
```

---
