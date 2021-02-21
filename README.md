# Ellipsis Pagination

The purpose of this package is to help frontend to generate a pagination with ellipsis

---

## Installation

`yarn`

```js
yarn add ellipsis-pagination
```

`npm`

```js
npm install ellipsis-pagination
```
---

## Usage

### Example

```js
import truncatePagination from 'ellipsis-pagination'

const paginate = truncatePagination({
  prefix: 2, // optional, default is 2
  suffix: 2, // optional, default is 2
  currentPage: 1, // required
  displayNumber: 5, // required, number of pager to display
  totalPage: 10 // required
})
```

### Parameters

| Params | Type | Description | Default | Required |
| ------- | ---- | ----------- | ------- | -------- |
| prefix | int | Number cannot greater than 2 | 2 | &#9746; |
| suffix | int | Number cannot greater than 2 | 2  | &#9746; |
| currentPage | int | current number page | - | &#9745; |
| displayNumber | int | Number must be higher than 3 and must be an odd number | - | &#9745; |
| totalPage | int | total number of pages | - | &#9745; |

### Sample Result

```json
[
   {
      "type":"PAGE",
      "page":1,
      "isActive":true
   },
   {
      "type":"PAGE",
      "page":2,
      "isActive":false
   },
   {
      "type":"PAGE",
      "page":3,
      "isActive":false
   },
   {
      "type":"PAGE",
      "page":4,
      "isActive":false
   },
   {
      "type":"PAGE",
      "page":5,
      "isActive":false
   },
   {
      "type":"ELLIPSIS",
      "page":"suffix-ellipsis",
      "isActive":false
   },
   {
      "type":"PAGE",
      "page":9,
      "isActive":false
   },
   {
      "type":"PAGE",
      "page":10,
      "isActive":false
   }
]
```

| Name | Description | Value |
| ---- | ----------- | ----- |
| type | type of pagination | `PAGE` or `ELLIPSIS` |
| page | page number | int |
| isActive | current page | int |

---

## ToDo

- Unit test
- Typescript
