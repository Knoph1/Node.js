# Node.js RESTful API

A simple RESTful API built with Node.js using the native `http` module.

## Features

- Built with Node.js (no external frameworks)
- Supports `GET` and `POST` requests for `/api/users`
- Returns JSON responses
- Demonstrates basic RESTful architecture

## Installation

1. Clone the repository or download the files.
2. Ensure [Node.js](https://nodejs.org/) is installed.
3. Run the server:

```bash
node server.mjs
```

## Endpoints

### GET `/api/users`

- Returns a list of users in JSON format.

#### Example Response

```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]
```

### POST `/api/users`

- Adds a new user.
- Expects a JSON body with a `name` field.

#### Example Request

```json
{
  "name": "Charlie"
}
```

#### Example Response

```json
{
  "id": 3,
  "name": "Charlie"
}
```

## Notes

- The API is purely for demonstration purposes.
- No database is used — data is stored in memory and will reset on server restart.

## License

This project is licensed under the MIT License.

---
