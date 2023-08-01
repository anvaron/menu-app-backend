### Express API
1. The API should have the following routes:

|path|methods|notes|
|----|-------|-----|
|`/`|`GET`|health check route: returns `{ data: "Service is running!" }`|
|`/items`|`GET`|returns an array of all the menu items|
|`/items/:id`|`GET`|returns an item with the given `id`; returns a `404` if the item is not found
2. The API should return **json** in the following format.

- If the response is a success: `{ data: <the data requested> }` with status code **200**
- If the response is an error: `{ error: <the error message> }` with the appropriate status code (404, 500, etc.)

3. The API should listen on any port specified in `process.env.PORT`, or use port 8888 as a default.
