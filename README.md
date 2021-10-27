# API Documents

## URI

```
GET http://api.lesson-pg.com/v1/kanji/
```

## Request

| Parameters  | Type   | Query                             | Description                                      |
| ----------- | ------ | --------------------------------- | ------------------------------------------------ |
| **article** | String | /v1/kanji/?article=螢が飛んでいる | 旧漢字/新漢字を含む文章を渡す<br>(※500 文字まで) |

## Response Body

`Response 200 (application/json)`

```json
{
  "old": "螢が飛んでいる",
  "new": "蛍が飛んでいる",
  "includedOld": true,
  "includedNew": false,
  "count": 1
}
```

| Properties      | Type    | Data           | Description                |
| --------------- | ------- | -------------- | -------------------------- |
| **old**         | String  | 螢が飛んでいる | 新漢字を旧漢字へ変換した値 |
| **new**         | String  | 蛍が飛んでいる | 旧漢字を新漢字へ変換した値 |
| **includedOld** | Bool    | true           | 旧漢字が含まれるか         |
| **includedNew** | Bool    | true           | 旧漢字が含まれるか         |
| **count**       | Integer | 1              | 存在した旧漢字数           |

`Response 400 (application/json)`

```json
{
  "message": "The maximum number of characters (500 characters) has been exceeded"
}
```

`Response 404 (application/json)`

```json
{
  "message": "Not Found"
}
```

`Response 405 (application/json)`

```json
{
  "message": "Method Not Allowed"
}
```
